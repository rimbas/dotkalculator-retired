
// ItemInstance
// Helper object for HeroInstance
function ItemInstance(itemId, properties) {
	properties = properties || {};
	var item = DotaData.getItemProperties(itemId, properties.Version);
	this.ID = itemId;
	for (var prop in item) {
		var value = item[prop];
		if (value instanceof Function) {
			Object.defineProperty(this, prop, {
				get: value,
				enumerable: true
			});
		}
		else {
			this[prop] = value;	
		}
	}
	if (properties.charges) {
		this.Charges = properties.Charges;	
	}
	Object.defineProperty(this, "DisplayElement", {writable: true});
	//Object.defineProperty(this, "HeroInstance", {writable: true});
}

// Checks if all elements of array are valid ItemInstance objects
ItemInstance.isValidArray = function( itemInstanceArray ) {
	if (!Array.isArray(itemInstanceArray)) {
		throw itemInstanceArray+" is not a valid array";
	}
	for (var item of itemInstanceArray) {
		if (!item instanceof ItemInstance) {
			throw "Object "+item+" is not an ItemInstance object";
		}
	}
	return itemInstanceArray;
}

ItemInstance.prototype.toString = function () {
	return "[ItemInstance "+this.ID+":"+this.Charges+"]";
}

ItemInstance.prototype.clone = function () {
	var props = { version: this.Version };
	if (this.Charges) props.charges = this.Charges;
	return new ItemInstance(this.ID, props );
}

ItemInstance.prototype.createDisplayElement = function() {
	var div = document.createElement("div");
	div.className = "item-display";
	div.style.backgroundImage = "url(images/items/" + this.ID + ".png)";
	
	if (typeof this.Charges === "number") {
		div.textContent = this.Charges;	
	}
	
	this.DisplayElement = div;
	return div
}

//
function SkillInstance(skillId, properties) {
	properties = properties || {};
	var skill = DotaData.getSkillProperties(skillId, properties.version);
	this.ID = skillId;
	for (var prop in skill) {
		var value = skill[prop];
		if (value instanceof Function) {
			Object.defineProperty(this, prop, {
				get: value,
				enumerable: true
			});
		}
		else {
			this[prop] = value;	
		}
	}
}

SkillInstance.prototype.toString = function () {
	return "[ItemInstance "+this.ID+":"+this.Charges+"]";
}
