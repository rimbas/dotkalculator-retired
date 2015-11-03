
// AbilityInstance
// Helper object for HeroInstance
function AbilityInstance(skillId, properties) {
	properties = properties || {};
	var ability = DotaData.getAbilityProperties(skillId, properties.version);
	
	Object.defineProperty(this, "ID", {value: skillId});
	Object.defineProperty(this, "displayElement", {writable: true});
	Object.defineProperty(this, "chargeElement", {writable: true});
	Object.defineProperty(this, "levelElement", {writable: true});
	Object.defineProperty(this, "dynamicElements", {writable: true, value: {}});
	Object.defineProperty(this, "boundUpdate", {writable: true});
	Object.defineProperty(this, "heroRef", {writable: true});
	
	for (var prop in ability) {
		var value = ability[prop];
		if (value instanceof Function) {
			Object.defineProperty(this, prop, { get: value, enumerable: true });
		}
		else {
			this[prop] = value;	
		}
	}
	if (typeof properties.level === "number")
		this.Level = properties.level;
	if (typeof properties.charger === "number")
		this.Charges = properties.charges;
}

AbilityInstance.prototype.clone = function() {
	props = { version: this.Version };
	props.level = this.Level;
	props.charges = this.Charges;
	return new AbilityInstance(this.ID, props);
}

AbilityInstance.prototype.toString = function () {
	return "[AbilityInstance "+this.ID+"]";
}

AbilityInstance.prototype.createDisplayElement = function() {
	if (this.displayElement)
		return this.displayElement;
	
	var div = document.createElement("div");
	this.displayElement = div;
	div.className = "ability-display";
	div.style.backgroundImage = "url(images/abilities/" + this.ID + ".png)";

	if (typeof this.Charges === "number") {
		var chargeElement = document.createElement("span");
		chargeElement.textContent = this.Charges;
		chargeElement.className = "item-display-charges";
		this.chargeElement = chargeElement;
		div.appendChild(chargeElement);
	}
	
	var levelElement = document.createElement("span");
	levelElement.className = "ability-display-levels";
	levelElement.textContent = DotaData.numericToRoman(this.Level);
	div.appendChild(levelElement);
	this.levelElement = levelElement;
	
	var hidden = document.createElement("div");
	div.appendChild(hidden);
		hidden.className = "ability-display-options";
	this.populateOptionElement(hidden);
	
	return div;
}

AbilityInstance.prototype.populateOptionElement = function(el) {
	var h1 = document.createElement("h1");
		h1.textContent = this.ID;
	el.appendChild(h1);
	
	// why did it have to turn out like this
	if ("Charges" in this) {
		var chargeLabel = document.createElement("span");
		chargeLabel.textContent = "Charges:";
		chargeLabel.style.textAlign = "right";
		chargeLabel.style.padding = "3px";
		chargeLabel.style.width = "50px";
		el.appendChild(chargeLabel);
		
		var chargeInput = document.createElement("input");
		chargeInput.style.width = "3em";
		chargeInput.value = this.Charges;
		chargeInput.min = 0;
		chargeInput.max = this.ChargesMax || 1000;
		chargeInput.type = "number";
		chargeInput.className = "mini-spinner";
		chargeInput.onchange = (function(e,u){
			this.Charges = e.target.value;
			this.updateDisplayElement();
			this.boundUpdate();
		}).bind(this);
		el.appendChild(chargeInput);
		
		el.appendChild(document.createElement("br"));
	}
	
	var levelLabel = document.createElement("span");
	levelLabel.textContent = "Level:";
	levelLabel.style.textAlign = "right";
	levelLabel.style.padding = "3px";
	levelLabel.style.width = "50px";
	el.appendChild(levelLabel);

	var levelInput = document.createElement("input");
	levelInput.style.width = "3em";
	levelInput.value = this.Level;
	levelInput.min = 0;
	levelInput.max = this.LevelMax;
	levelInput.type = "number";
	levelInput.className = "mini-spinner";
	levelInput.onchange = (function(e,u){
		this.Level = e.target.value;
		this.updateDisplayElement();
		this.boundUpdate();
	}).bind(this);
	el.appendChild(levelInput);

	el.appendChild(document.createElement("br"));
	
	var statOrder = ["Strength", "Agility", "Intelligence", "Health", "Mana",
		"HealthRegeneration", "ManaRegenerationPercentage", "ManaRegeneration",
		"Damage", "AttackSpeed", "MovementSpeed", "MovementSpeedPercentage",
		"MagicalResistance", "Evasion", "Armor"], valuePool = {};
		
	for (var i = 0, stat; i <= statOrder.length; stat=statOrder[i++]) {
		if (typeof this[stat] === "undefined")
			continue;
		valuePool[stat] = this[stat];
	}
	
	for (var stat in valuePool) {
		var readable = DotaData.statToReadable(stat, valuePool[stat]),
			valueLabel = document.createElement("span");
			valueLabel.className = "item-display-options value";
			this.dynamicElements[stat] = valueLabel;
		if (readable.isPercentage)
			valueLabel.title = (valuePool[stat] * this.heroRef.Total[readable.baseName]).toFixed(0);
		if (valuePool[stat] < 0) valueLabel.classList.add("negative");
			valueLabel.textContent = readable.value;
		el.appendChild(valueLabel);
		var spanLabel = document.createElement("span");
			spanLabel.className = "item-display-options label";
			spanLabel.textContent = readable.key;
		el.appendChild(spanLabel);
		el.appendChild(document.createElement("br"));
	}
}

AbilityInstance.prototype.updateDisplayElement = function () {
	if (!this.displayElement)
		return;
	if (this.chargeElement)
		this.chargeElement.textContent = this.Charges;
	if (this.levelElement)
		this.levelElement.textContent = DotaData.numericToRoman(this.Level);
	for (var stat in this.dynamicElements) {
		var readable = DotaData.statToReadable(stat, this[stat]);
		this.dynamicElements[stat].textContent = readable.value;
	}
		
}

