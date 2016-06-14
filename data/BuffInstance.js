
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
	Object.defineProperty(this, "boundDelete", {writable: true}); // removes the buff from hero
	Object.defineProperty(this, "heroRef", {writable: true}); // hero that has this buff
	Object.defineProperty(this, "ownerRef", {writable: true}); // hero that owns/emits this buff
	Object.defineProperty(this, "boundUnlink", {writable: true}); // unlinks the buff from owner object (the emitting ability/item)
	Object.defineProperty(this, "emitterRef", {writable: true}); // ability/item that emits this buff

	for (var prop in buff) {
		var value = buff[prop];
		if (value instanceof Function)
			Object.defineProperty(this, prop, { get: value, enumerable: true });
		else
			Object.defineProperty(this, prop, { value: value, enumerable: true, writable: true });
	}

	if (typeof properties.level === "number")
		if (buff.LevelMin != undefined && properties.level >= buff.LevelMin)
			this.Level = properties.level;
		else if ( buff.LevelMin != undefined )
			this.Level = buff.LevelMin;
		else
			this.Level = properties.level;
	if (typeof properties.levelMax === "number")
		this.LevelMax = properties.levelMax;
	if (typeof properties.levelMin === "number")
		this.LevelMin = properties.levelMin;

	if (typeof properties.charges === "number")
		if (buff.ChargesMin != undefined && properties.charges >= buff.ChargesMin)
			this.Charges = properties.charges;
		else if ( buff.ChargesMin != undefined )
			this.Charges = buff.ChargesMin;
		else
			this.Charges = properties.charges;
	if (typeof properties.chargesMax === "number")
		this.ChargesMax = properties.chargesMax
}

BuffInstance.prototype.toString = function () {
	return "[BuffInstance "+this.ID+"]";
}

BuffInstance.prototype.copy = function() {
	props = { version: this.Version };
	props.level = this.Level;
	props.charges = this.Charges;
	return new BuffInstance(this.ID, props);
}

BuffInstance.prototype.update = function () {
	if (this.boundUpdate)
		this.boundUpdate();
	this.updateDisplayElement();
}

// the order of deletions is important
BuffInstance.prototype.delete = function () {
	if (this.boundDelete) // removes reference from the hero
		this.boundDelete();
	if (this.displayElement) // terminates HTML display
		this.displayElement.parentElement.removeChild(this.displayElement);
	if (this.boundUnlink) // removes reference from the emmiting item/ability
		this.boundUnlink();
	if (this.boundUpdate)
		this.boundUpdate();
}

BuffInstance.prototype.createDisplayElement = function() {
	return ElementHelper.createDisplayElement(this)
}

BuffInstance.prototype.updateDisplayElement = function () {
	ElementHelper.updateDisplayElements(this)
}

