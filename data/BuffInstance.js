
// AbilityInstance
// Helper object for HeroInstance
function BuffInstance(buffId, properties) {
	properties = properties || {};
	var buff = DotaData.getBuffProperties(buffId, properties.version);
	
	Object.defineProperty(this, "ID", {value: buffId});
	Object.defineProperty(this, "displayElement", {writable: true});
	Object.defineProperty(this, "chargeElement", {writable: true});
	Object.defineProperty(this, "levelElement", {writable: true});
	Object.defineProperty(this, "dynamicElements", {writable: true, value: {}});
	Object.defineProperty(this, "boundUpdate", {writable: true});
	Object.defineProperty(this, "heroRef", {writable: true});
	
	for (var prop in buff) {
		var value = buff[prop];
		if (value instanceof Function)
			Object.defineProperty(this, prop, { get: value, enumerable: true });
		else
			this[prop] = value;	
	}
	if (typeof properties.level === "number" && this.Level)
		this.Level = properties.level;
	if (typeof properties.charges === "number" && this.Charges)
		this.Charges = properties.charges;
}

BuffInstance.prototype.clone = function() {
	props = { version: this.Version };
	props.level = this.Level;
	props.charges = this.Charges;
	return new BuffInstance(this.ID, props);
}

BuffInstance.prototype.toString = function () {
	return "[BuffInstance "+this.ID+"]";
}

BuffInstance.prototype.createDisplayElement = function() {
	if (this.displayElement)
		return this.displayElement;
	
	var div = document.createElement("div");
	this.displayElement = div;
	div.className = "item-display ability";
	div.style.backgroundImage = "url(images/buffs/" + this.ID + ".png)";

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

BuffInstance.prototype.updateDisplayElement = function () {
	ElementHelper.updateDisplayElements(this)
}

