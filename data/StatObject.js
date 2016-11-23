
/**
 * Abstract class for StatObjects deriratives
 * @class StatObject
 */
class StatObject {

	/**
	 * Creates an instance of StatObject.
	 *
	 * @param {String} type Stat origin of the object
	 * @param {String} objId Identifier for the stats
	 * @param {Object} [properties={}] Customizalbe properties
	 *
	 * @memberOf StatObject
	 */
	constructor(type, objId, properties = {}) {
		if (this.constructor === StatObject)
			throw "Can't instantiate an abstract class!";
		let typeData = DotaData.getTypeData(type, objId, properties.version)
		PropertyProcessor.applyDataProperties(this, typeData)
		Object.defineProperty(this, "ID", {value: objId, enumerable: true});
		//
		Object.defineProperty(this, "_HTML", {value: {}});
		Object.defineProperty(this, "_HTML_DynamicElements", {value: {}});
		// host of this StatInstance
		Object.defineProperty(this, "_heroRef", {writable: true});
		// buff emitted from this instance and existing on host hero
		Object.defineProperty(this, "_boundUnlink", {writable: true});
		// ability/item that emits this StatObject
		Object.defineProperty(this, "_emitterRef", {writable: true});
		Object.defineProperty(this, "_buffReferences", {value: new Map()});

		if (typeof properties.level === "number" && !Object.is(NaN, properties.level))
			this.Level = Math.max(this.LevelMin || 0, Math.min(properties.level, this.LevelMax || Infinity));
		else if (typeof properties.level === "boolean")
			this.Level = properties.level

		if (typeof properties.charges === "number" && !Object.is(NaN, properties.charges))
			this.Charges = Math.max(this.ChargesMin || 0, Math.min(properties.charges, this.ChargesMax || Infinity));

		if (this.Meta && this.Meta.SavedProperties) {
			for (let prop of this.Meta.SavedProperties)
				if (prop in properties)
					this[prop] = properties[prop]
		}

		// Also, not autowrapping this because of various disparities between skills
		if (properties.AghsUpgraded !== undefined)
			this.AghsUpgraded = properties.AghsUpgraded
		//Object.seal(this)
	}

	/**
	 * Utility getter for properties
	 *
	 * @readonly
	 *
	 * @memberOf StatObject
	 */
	get $total() {
		if (this._heroRef && this._heroRef.Total)
			return this._heroRef.Total
		return {}
	}

	/**
	 * Utility getter for properties
	 *
	 * @readonly
	 *
	 * @memberOf StatObject
	 */
	get $hero() {
		if (this._heroRef)
			return this._heroRef
	}

	/**
	 * Utility getter for properties
	 *
	 * @readonly
	 *
	 * @memberOf StatObject
	 */
	get $emitter() {
		if (this._emitterRef)
			return this._emitterRef
	}

	toString() { return `[${this.ID} ${this.constructor.name}]` }

	/**
	 * Copy methdod. Returns same type as child
	 *
	 * @returns StatObject
	 *
	 * @memberOf StatObject
	 */
	copy() {
		let props = {
			Id: this.ID,
			level: this.Level,
			charges: this.Charges
		}
		if (this.Meta && this.Meta.SavedProperties)
			for (let prop of this.Meta.SavedProperties)
				props[prop] = DotaData.copyDataObject(this[prop])
		props.version = this.Version
		return new this.constructor(this.ID, props)
	}

	/**
	 * Method to save object state into a serializable format
	 *
	 * @returns
	 *
	 * @memberOf StatObject
	 */
	serialize() {
		let props = {version: this.Version}
		props.Id = this.ID
		props.level = this.Level
		props.charges = this.Charges
		if (this.Meta && this.Meta.SavedProperties)
			for (let prop of this.Meta.SavedProperties)
				props[prop] = DotaData.copyDataObject(this[prop])
		return props
	}

	/**
	 * Host hero update method
	 *
	 * @memberOf StatObject
	 */
	update() {
		if (this._heroRef.Total)
			this.updateHero()
	}

	/**
	 * Method to update the host hero
	 *
	 * @abstract
	 *
	 * @memberOf StatObject
	 */
	updateHero() {}

	/**
	 * Method to update emitted buffs. Called only by the host hero.
	 *
	 * @memberOf StatObject
	 */
	updateEmittedBuffs() {
		for (let [hero, buff] of this._buffReferences)
			if (hero !== this.$hero)
				buff.update()
	}

	/**
	 * Method to create the base HTML display element
	 *
	 * @returns HTMLElement
	 *
	 * @memberOf StatObject
	 */
	createDisplay() {
		if (this._HTML.DisplayElement !== undefined)
			return this._HTML.DisplayElement
		let div = document.createElement("div");
		this._HTML.DisplayElement = div;
		div.classList.add("item-display");
		if (this instanceof AbilityObject || this instanceof BuffObject)
			div.classList.add("ability");
		else if (this instanceof ItemObject )
			div.classList.add("item");

		if (typeof this.Image == "string")
			div.style.backgroundImage = "url(images/abilities/" + this.Image + ".png)";
		else if (this instanceof ItemObject)
			div.style.backgroundImage = "url(images/items/" + this.ID + ".png)";
		else
			div.style.backgroundImage = "url(images/abilities/" + this.ID + ".png)";

		if (typeof this.Level === "number") {
			let levelElement = document.createElement("span");
			levelElement.className = "item-display-levels";
			levelElement.textContent = DotaData.numericToRoman(this.Level);
			div.appendChild(levelElement);
			this._HTML.LevelElement = levelElement;
		}

		if (typeof this.Charges === "number") {
			let chargeElement = document.createElement("span");
			chargeElement.textContent = this.Charges;
			chargeElement.className = "item-display-charges";
			this._HTML.ChargeElement = chargeElement;
			div.appendChild(chargeElement);
		}

		if (this.Buff || this.Action) {
			let activateButton = div.appendChild(document.createElement("button"));
			activateButton.classList.add("item-display-activate")
			activateButton.onclick = this.activate.bind(this)
			this._HTML.ActionButton = activateButton;
		}

		if (this instanceof ItemObject || this instanceof BuffObject && this.Class != "Aura") {
			let deleteButton = div.appendChild(document.createElement("button"))
			deleteButton.className = "item-display-delete"
			deleteButton.onclick = this.delete.bind(this)
		}

		this._HTML.DisplayElement.appendChild(this.createTooltip())
		this.updateDisplay()

		return div;
	}

	/**
	 * Creates the tooltip/hoverbox that displays detailed stat values
	 *
	 * @returns HTMLElement
	 *
	 * @memberOf StatObject
	 */
	createTooltip() {
		let el = document.createElement("div"),
			heading = el.appendChild(document.createElement("span")),
			heroTotal = this.heroTotal,
			deferredThis = this;
		el.className = "item-tooltip"
		heading.className = "label-name"


		this._HTML.NameElement = heading

		if ("AghsUpgraded" in this) {
			let aghs = el.appendChild(document.createElement("span"))
			aghs.title = "This skill can be upgraded with an Aghanim's Scepter"
			aghs.classList.add("label-aghanims")
			this._HTML.AghsElement = aghs
		}

		let versionLabel = el.appendChild(document.createElement("span"));
			versionLabel.classList.add("label-version");
			versionLabel.textContent = "("+this.Version+")";

		el.appendChild(document.createElement("br"));

		if (typeof this.Level === "number") {
			let levelLabel = document.createElement("span");
			levelLabel.textContent = "Level:";
			levelLabel.className = "mini-spinner-label"
			el.appendChild(levelLabel);

			let levelInput = document.createElement("input");
			levelInput.style.width = "3em";
			levelInput.value = this.Level;
			levelInput.min = typeof this.LevelMin === "number" ? this.LevelMin : 0;
			levelInput.max = this.LevelMax;
			levelInput.type = "number";
			levelInput.className = "mini-spinner";
			if (this._emitterRef || this.LockedLevel)
				levelInput.disabled = true;
			else
				levelInput.onchange = function onLevelInputChange(e,u){
					deferredThis.Level = Number.parseInt(e.target.value);
					if ("Charges" in this) {
						let min = Math.min(deferredThis.Charges, deferredThis.ChargesMax || 1000),
							max = Math.max(min, deferredThis.ChargesMin || 0)
						deferredThis.Charges = max;
					}
					deferredThis.update()
				}
			el.appendChild(levelInput);
			this._HTML.LevelInputElement = levelInput;

			el.appendChild(document.createElement("br"));
		}

		if ("Charges" in this) {
			let chargeLabel = document.createElement("span");
			if (this.ChargesSemantic)
				chargeLabel.textContent = this.ChargesSemantic.toString() + ":";
			else if (this instanceof AbilityObject || this instanceof BuffObject)
				chargeLabel.textContent = "Stacks:";
			else
				chargeLabel.textContent = "Charges:";
			chargeLabel.className = "mini-spinner-label"
			el.appendChild(chargeLabel);

			let chargeInput = document.createElement("input");
			chargeInput.style.width = "3em";
			chargeInput.value = this.Charges;
			chargeInput.min = (typeof this.ChargesMin == "number") ? this.ChargesMin : 0;
			chargeInput.max = (typeof this.ChargesMax == "number") ? this.ChargesMax : 1000;
			chargeInput.type = "number";
			chargeInput.className = "mini-spinner";
			if (this._emitterRef || this.LockedCharges)
				chargeInput.disabled = true;
			else
				chargeInput.onchange = function onChargeInputChange(e,u) {
					deferredThis.Charges = Number.parseInt(e.target.value);
					deferredThis.update()
				}
			el.appendChild(chargeInput);
			this._HTML.ChargeInputElement = chargeInput

			el.appendChild(document.createElement("br"));
		}

		let statOrder = DotaData.Meta.StatAutoProperties,
			statOrderAggregated = []

		for (let stat of statOrder)
			if (this.hasOwnProperty(stat))
				statOrderAggregated.push(stat)

		if (this.Family)
			for (let stat in this.Family.Stats)
				statOrderAggregated.push(stat)

		if (this.Meta && this.Meta.TooltipStats)
			for (let stat of this.Meta.TooltipStats)
				statOrderAggregated.push(stat)

		for (let stat of statOrderAggregated) {
			let readable = DotaData.statToReadable(stat, statOrderAggregated[stat]),
				spanValue = document.createElement("span"),
				spanLabel = document.createElement("span");
			spanValue.className = "item-display-options";
			spanLabel.className = "item-display-options label";
			this._HTML_DynamicElements[stat] = spanValue;

			if (DotaData.Meta.TooltipPlainStyle.includes(stat)
				|| (this.Meta && this.Meta.TooltipPlain
				&& this.Meta.TooltipPlain.includes(stat)))
			{
				spanLabel.textContent = readable.key + ": "
				el.appendChild(spanLabel)
				el.appendChild(spanValue)
			}
			else {
			// mouseover tooltip displaying
				spanValue.classList.add("value")
				spanLabel.textContent = readable.key;
				el.appendChild(spanValue)
				el.appendChild(spanLabel)
			}

			el.appendChild(document.createElement("br"));
		}

		if ("Cooldown" in this) {
			let cooldown = el.appendChild(document.createElement("span"))
			cooldown.className = "item-display-options cooldown";
			this._HTML.CooldownElement = cooldown;
		}

		if ("ManaCost" in this) {
			let manacost = el.appendChild(document.createElement("span"))
			manacost.className = "item-display-options manacost";
			this._HTML.ManacostElement = manacost;
		}

		if (this._HTML.ManacostElement || this._HTML.CooldownElement) {
			let breaker = el.appendChild(document.createElement("br"));
			if (this._HTML.ManacostElement === undefined || this._HTML.CooldownElement === undefined)
				breaker.classList.add("single-mode")
		}

		if ("Warning" in this) {
			let warning = el.appendChild(document.createElement("span"))
			warning.className = "item-display-options warning"
			warning.textContent = this.Warning;
			el.appendChild(document.createElement("br"))
		}

		if ("Lore" in this) {
			let lore = el.appendChild(document.createElement("span"))
			lore.className = "item-display-options lore"
			lore.textContent = this.Lore
			el.appendChild(document.createElement("br"))
		}

		this._HTML.DisplayElement.appendChild(el)
		this.updateTooltip()
		return el
	}

	/**
	 * Method to update data in the base display
	 *
	 * @memberOf StatObject
	 */
	updateDisplay() {
		if (!this._HTML.DisplayElement)
			return;
		let heroTotal = this.$total; // alias for the hero total ref of the object

		if ("Hidden" in this && this.Hidden === true) {
			this._HTML.DisplayElement.style.display = "none"
			return;
		}
		else if ("Hidden" in this)
			this._HTML.DisplayElement.style.display = null

		if (this.Image) {
			if (this instanceof ItemObject)
				this._HTML.DisplayElement.style.backgroundImage = "url(images/items/" + this.Image + ".png)";
			else
				this._HTML.DisplayElement.style.backgroundImage = "url(images/abilities/" + this.Image + ".png)";
		}

		if (this._HTML.ChargeElement)
			this._HTML.ChargeElement.textContent = this.Charges;

		if (this._HTML.LevelElement)
			this._HTML.LevelElement.textContent = DotaData.numericToRoman(this.Level);

		if (this._HTML.ActionButton) {
			if (this.Level === 0 || this.Level === false || this.HiddenAction)
				this._HTML.ActionButton.style.display = "none"
			else
				this._HTML.ActionButton.style.display = null;
		}

		this.updateTooltip()
	}

	/**
	 * Method to update data in the tooltip
	 *
	 * @memberOf StatObject
	 */
	updateTooltip() {
		let heroTotal = this.$total;

		if (this._HTML.NameElement)
			this._HTML.NameElement.textContent = this.Name || this.ID;

		if (this._HTML.LevelInputElement && (this._emitterRef || this.LockedLevel)) {
			this._HTML.LevelInputElement.value = this.Level
		}

		if (this._HTML.ChargeInputElement) {
			this._HTML.ChargeInputElement.value = this.Charges;
			if (typeof this.ChargesMin == "number")
				this._HTML.ChargeInputElement.min = this.ChargesMin;
			if (typeof this.ChargesMax == "number")
				this._HTML.ChargeInputElement.max = this.ChargesMax;
		}

		if (this._HTML.AghsElement) {
			if (this.AghsUpgraded == true)
				this._HTML.AghsElement.classList.remove("disabled")
			else
				this._HTML.AghsElement.classList.add("disabled")
		}

		for (let stat in this._HTML_DynamicElements) {
			let statValue = stat in this ? this[stat] : this.Family.Stats[stat];
			if (this.Level === 0 && typeof statValue === "number" )
				statValue = 0;
			let dynElement = this._HTML_DynamicElements[stat],
				readable = DotaData.statToReadable(stat, statValue);

			if (DotaData.Meta.TooltipPlainStyle.includes(stat) ||
				(this.Meta && this.Meta.TooltipPlain && this.Meta.TooltipPlain.includes(stat))) {
				dynElement.textContent = statValue;
			}
			else {
				dynElement.textContent = readable.value;
				if (readable.isPercentage)
					dynElement.title = (statValue * heroTotal[readable.baseName+"Base"]).toFixed(2);

				if (readable.negativeOverride) {
					if (statValue <= 0)
						dynElement.classList.remove("negative");
					else
						dynElement.classList.add("negative");
				}
				else {
					if (statValue >= 0)
						dynElement.classList.remove("negative");
					else
						dynElement.classList.add("negative");
				}
			}
		}
		if (this._HTML.CooldownElement)
			if (this.Level === 0)
				this._HTML.CooldownElement.style.display = "none"
			else {
				this._HTML.CooldownElement.style.display = null;
				let reduction = heroTotal.CooldownReduction || 1
				this._HTML.CooldownElement.textContent = Math.round(this.Cooldown * reduction * 100)/100
			}

		if (this._HTML.ManacostElement)
			if (this.Level === 0)
				this._HTML.ManacostElement.style.display = "none"
			else {
				this._HTML.ManacostElement.style.display = null;
				let reduction = heroTotal.ManaCostReduction || 1
				this._HTML.ManacostElement.textContent = Math.round(this.ManaCost * reduction*100)/100
			}
	}

	/**
	 *  Method to remove this object and clean up its emitted objects
	 *
	 * @memberOf StatObject
	 */
	delete() {
		if (this._boundUnlink)
			this._boundUnlink();
		for (let [key, buff] of this._buffReferences)
			buff.delete();
		if (this._heroRef)
			this._heroRef.remove(this);
		if (this._HTML.DisplayElement && this._HTML.DisplayElement.parentElement)
			this._HTML.DisplayElement.parentElement.removeChild(this._HTML.DisplayElement);
	}

	/**
	 * Method to invoke special operations defined by the stats
	 *
	 * @memberOf StatObject
	 */
	activate() {
		if (!this.Action)
			return
		let propertyTemplate = {
				level: this.Level,
				charges: this.Charges,
				chargesMax: this.ChargesMax
			},
			versionOverride = {version: this.Version};
		if (this.Action.Type === "Buff" && this.$hero) { // Action gives a buff
			function resolveBuffOptions(value) {
				if (typeof value === "string")
					return [{Id: value}]
				else if (value && "Id" in value)
					return [value]
				else if (Array.isArray(value)) {
					let buffList = []
					for (let id of value) {
						let [res] = resolveBuffOptions(id)
						buffList.push(res)
					}
					return buffList
				}
				else if (value instanceof Function)
					return resolveBuffOptions(value.call(this))
			}
			let selfBuffs, teammateBuffs;

			if (this.Action.Id) { // action with same properties for everything
				let buffOpts = resolveBuffOptions.call(this, this.Action.Id)
				if (this.Action.Self)
					selfBuffs = buffOpts
				if (this.Action.Teammates)
					teammateBuffs = buffOpts
			}
			else {
				selfBuffs = resolveBuffOptions.call(this, this.Action.Self)
				teammateBuffs = resolveBuffOptions.call(this, this.Action.Teammates)
			}

			if (selfBuffs && selfBuffs.length > 0)
				for (let buff of selfBuffs) {
					let props = Object.assign({}, propertyTemplate, buff, versionOverride)
					this.$hero.addBuff(new BuffObject(props.Id, props), this.Action.Refresh)
				}
			if (teammateBuffs && teammateBuffs.length > 0)
				for (let buff of teammateBuffs) {
					let props = Object.assign({}, propertyTemplate, buff, versionOverride)
					for (let teammate of this.$hero.getTeammates())
						teammate.addBuff(new BuffObject(props.Id, props), this.Action.Refresh)
				}
		}
		else if (this.Action.Type === "Operation") { // action operates on the instance
			if (!(this.Action.Function instanceof Function))
				throw "Operation without function!"
			this.Action.Function.call(this)
			this.update()
		}
	}

	/**
	 * @param {HeroInstance} newTeammate
	 *
	 * @memberOf StatObject
	 */
	addTeammate(newTeammate) {
		if (this.Aura && !this._buffReferences.has(newTeammate)) {
			let newBuff = new BuffObject(this.Aura, {version: this.Version})
			newBuff._emitterRef = this
			newBuff._boundUnlink = this._buffReferences.delete.bind(this._buffReferences, newBuff)
			newTeammate.addBuff(newBuff, "leave")
			this._buffReferences.set(newTeammate, newBuff)
		}
	}

	/**
	 * @param {HeroInstance} oldTeammate
	 *
	 * @memberOf StatObject
	 */
	removeTeammate(oldTeammate) {
		if (this._buffReferences.has(oldTeammate)) {
			this._buffReferences.get(oldTeammate).delete();
			this._buffReferences.delete(oldTeammate);
		}
	}

}

