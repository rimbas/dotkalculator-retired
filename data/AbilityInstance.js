
// AbilityInstance
// Helper object for HeroInstance
function AbilityInstance(skillId, properties) {
	properties = properties || {};
	let ability = DotaData.getTypeData("Abilities", skillId, properties.version);

	Object.defineProperty(this, "ID", {value: skillId});
	Object.defineProperty(this, "displayElement", {writable: true, enumerable: false});
	Object.defineProperty(this, "chargeElement", {writable: true, enumerable: false});
	Object.defineProperty(this, "levelElement", {writable: true, enumerable: false});
	Object.defineProperty(this, "actionButton", {writable: true, enumerable: false});
	Object.defineProperty(this, "dynamicElements", {writable: true, value: {}, enumerable: false});
	Object.defineProperty(this, "boundUpdate", {writable: true, enumerable: false});
	Object.defineProperty(this, "heroRef", {writable: true, enumerable: false});
	Object.defineProperty(this, "heroTotal", {get: function heroTotalGetter(){
		if (this.heroRef && this.heroRef.Total)
			return this.heroRef.Total;
		return {};
	}, enumerable: false})
	Object.defineProperty(this, "buffReferences", {value: new Map(), writable: true, enumerable: false});

	PropertyProcessor.applyDataProperties(this, ability)

	if (typeof properties.level === "number")
		if (ability.LevelMin != undefined && properties.level >= ability.LevelMin)
			this.Level = properties.level;
		else if ( ability.LevelMin != undefined )
			this.Level = ability.LevelMin;
		else
			this.Level = properties.level;
	if (typeof properties.levelMax === "number")
		this.LevelMax = properties.levelMax;
	if (typeof properties.levelMin === "number")
		this.LevelMin = properties.levelMin;

	if (typeof properties.charges === "number")
		if (ability.ChargesMin != undefined && properties.charges >= ability.ChargesMin)
			this.Charges = properties.charges;
		else if ( ability.ChargesMin != undefined )
			this.Charges = ability.ChargesMin;
		else
			this.Charges = properties.charges;
	if (typeof properties.chargesMax === "number")
		this.ChargesMax = properties.chargesMax
}

AbilityInstance.prototype.copy = function() {
	props = { version: this.Version };
	props.level = this.Level;
	props.charges = this.Charges;
	return new AbilityInstance(this.ID, props);
}

AbilityInstance.prototype.update = function () {
	if (this.boundUpdate)
		this.boundUpdate()
	if (this.ownerBuff)
		this.ownerBuff.update()
	this.updateDisplayElement()
	this.updateExternal();
}

AbilityInstance.prototype.updateExternal = function() {
	for (var buff of this.buffReferences)
		buff[1].update()
}

AbilityInstance.prototype.activate = function() {
	let buffOptionTemplate = {
		level: this.Level,
		levelMax: this.LevelMax,
		charges: this.Charges,
		chargesMax: this.ChargesMax,
		version: this.Version,
	}
	if (this.Buff && this.Level) { // deprecated
		if (this.Buff.NoTarget && this.Buff.Self)
			if (typeof this.Buff.Self === "string")
				this.heroRef.addBuff(new BuffInstance(this.Buff.Self, {level: this.Level, levelMax: this.LevelMax, charges: this.Charges, chargesMax: this.ChargesMax }), this.Buff.Refresh )
			else if (this.Buff.Self === true)
				this.heroRef.addBuff(new BuffInstance(this.Buff.Name, {level: this.Level, levelMax: this.LevelMax, charges: this.Charges, chargesMax: this.ChargesMax }), this.Buff.Refresh )
			else if (Array.isArray(this.Buff.Self))
				for (var buffId of this.Buff.Self)
					this.heroRef.addBuff(new BuffInstance(buffId, {level: this.Level, levelMax: this.LevelMax, charges: this.Charges, chargesMax: this.ChargesMax }), this.Buff.Refresh )

		if (this.Buff.NoTarget && this.Buff.Teammates)
			for (var teammate of this.heroRef.getTeammates())
				if (typeof this.Buff.Teammates === "string")
					teammate.addBuff(new BuffInstance(this.Buff.Teammates, {level: this.Level, levelMax: this.LevelMax, charges: this.Charges, chargesMax: this.ChargesMax }), this.Buff.Refresh )
				else if (this.Buff.Teammates === true)
					teammate.addBuff(new BuffInstance(this.Buff.Name, {level: this.Level, levelMax: this.LevelMax, charges: this.Charges, chargesMax: this.ChargesMax }), this.Buff.Refresh )
				else if (Array.isArray(this.Buff.Teammates))
					for (var buffId of this.Buff.Teammate)
						teammate.addBuff(new BuffInstance(buffId, {level: this.Level, levelMax: this.LevelMax, charges: this.Charges, chargesMax: this.ChargesMax }), this.Buff.Refresh )
	}
	else if (this.Action && this.Level) {
		if (this.Action.Type === "Buff") { // Action gives a buff
			if (this.Action.Id) { // action with same properties for everything
				let buffId;
				if (typeof this.Action.Id === "string")
					buffId = this.Action.Id
				else if (this.Action.Id instanceof Function)
					buffId = this.Action.Id.call(this)

				if (buffId == undefined) return;

				let targetList = [];
				if (this.Action.Self == true)
					targetList.push(this.heroRef)
				if (this.Action.Teammates)
					targetList = targetList.concat(this.heroRef.getTeammates())
				for (let hero of targetList) {
					let newBuff = new BuffInstance(buffId, buffOptionTemplate)
					if (this.Action.Modifier instanceof Function)
						this.Action.Modifier.call(this, newBuff)
					hero.addBuff(newBuff, this.Action.Refresh)
				}
			}
			else {
				if (this.Action.Self) { // self specific buff
					let buffId, newBuff;
					if (typeof this.Action.Self === "string")
						buffId = this.Action.Self;
					else if (this.Action.Self instanceof Function)
						buffId = this.Action.Self.call(this)
					else if (typeof this.Action.Self.Id === "string")
						buffId = this.Action.Self.Id
					else if (this.Action.Self.Id instanceof Function)
						buffId = this.Action.Self.Id.call(this)

					if (buffId === undefined) return;

					newBuff = new BuffInstance(buffId, buffOptionTemplate)
					if (this.Action.Self.Modifier instanceof Function)
						this.Action.Self.Modifier.call(this, newBuff)
					this.heroRef.addBuff(newBuff, this.Action.Refresh)
				}
				if (this.Action.Teammates) { // teammate specific buff
					let targets = this.heroRef.getTeammates(),
						buffId;
					if (typeof this.Action.Teammates === "string")
						buffId = this.Action.Teammates
					else if (this.Action.Teammates instanceof Function)
						buffId = this.Action.Teammates.call(this)
					else if (typeof this.Action.Teammates.Id === "string")
						buffId = this.Action.Teammates.Id
					else if (this.Action.Teammates.Id instanceof Function)
						buffId = this.Action.Teammates.Id.call(this)

					for (let hero of targets) {
						let newBuff = new BuffInstance(buffId, buffOptionTemplate)
						if (this.Action.Teammates.Modifier instanceof Function)
							this.Action.Teammates.Modifier.call(this, newBuff)
						hero.addBuff(newBuff, this.Action.Refresh)
					}
				}
			}
		}
		else if (this.Action.Type === "Operation") { // action operates on the instance
			if (!(this.Action.Function instanceof Function))
				throw `Operation without function!`
			this.Action.Function.call(this)
			this.update()
		}
	}
}

AbilityInstance.prototype.delete = function () {
	for (var buff of this.buffReferences)
		buff[1].delete()
}

AbilityInstance.prototype.toString = function () {
	return "[AbilityInstance "+this.ID+"]";
}

AbilityInstance.prototype.createDisplayElement = function() {
	return UIHelper.createDisplayElement(this)
}

AbilityInstance.prototype.updateDisplayElement = function () {
	UIHelper.updateDisplayElements(this)
}

// adds the owner of this item
AbilityInstance.prototype.addOwner = function(owner) {
	if (!this.Aura) return;
	var newBuff = new BuffInstance(this.Aura);
	newBuff.boundUnlink = this.removeReferencedBuff.bind(this, owner);
	this.ownerBuff = newBuff;
	newBuff.ownerRef = owner;
	newBuff.emitterRef = this;
	owner.addBuff(newBuff, "override");
}

AbilityInstance.prototype.addTeammate = function(newTeammate) {
	if (newTeammate === this) return;
	if (!this.Aura) return;
	if (!this.buffReferences.has(newTeammate) ) {
		var newBuff = new BuffInstance(this.Aura);
		newBuff.ownerRef = this.heroRef;
		newBuff.emitterRef = this;
		newBuff.boundUnlink = this.removeReferencedBuff.bind(this, newTeammate);
		newTeammate.addBuff(newBuff, "leave");
		this.buffReferences.set(newTeammate, newBuff);
	}
}

AbilityInstance.prototype.removeTeammate = function(oldTeammate) {
	if (!this.Aura) return;
	if (this.buffReferences.has(oldTeammate)) {
		this.buffReferences.get(oldTeammate).delete();
		this.buffReferences.delete(oldTeammate);
	}
}

AbilityInstance.prototype.removeReferencedBuff = function(teammate) {
	this.buffReferences.delete(teammate);
}

