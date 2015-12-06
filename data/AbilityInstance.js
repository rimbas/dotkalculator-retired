
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
	Object.defineProperty(this, "buffReferences", {value: {}, writable: true});
	
	for (var prop in ability) {
		var value = ability[prop];
		if (value instanceof Function)
			Object.defineProperty(this, prop, { get: value, enumerable: true });
		else
			this[prop] = value;	
	}
	if (typeof properties.level === "number")
		this.Level = properties.level;
	if (typeof properties.charges === "number")
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
	div.className = "item-display ability";
	div.style.backgroundImage = "url(images/abilities/" + this.ID + ".png)";

	if (typeof this.Charges === "number") {
		var chargeElement = document.createElement("span");
		chargeElement.textContent = this.Charges;
		chargeElement.className = "item-display-charges";
		this.chargeElement = chargeElement;
		div.appendChild(chargeElement);
	}
	
	var levelElement = document.createElement("span");
	levelElement.className = "item-display-levels";
	levelElement.textContent = DotaData.numericToRoman(this.Level);
	div.appendChild(levelElement);
	this.levelElement = levelElement;
	
	div.appendChild(ElementHelper.createDetailedTooltip(this));
	
	return div;
}

AbilityInstance.prototype.updateDisplayElement = function () {
	ElementHelper.updateDisplayElements(this)
}

