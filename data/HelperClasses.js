
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
	Object.defineProperty(this, "DisplayElement", {});
}

ItemInstance.prototype.toString = function () {
	return "[ItemInstance "+this.ID+":"+this.Charges+"]";
}

ItemInstance.prototype.createImageElement = function () {
	var img = document.createElement("img");
	img.className = "item-image";
	img.width = 33;
	img.height = 24;
	img.src = "images/items/" + this.ID + ".png";
	this.DisplayElement = img;
	
	return img;
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
