
function ItemInstance(itemId, init) {
	init = init || {};
	var item = DotaData.getItemProperties(itemId, init.Version);
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
	//img.ItemInstanceReference = this;
	//Object.defineProperty(this, "DisplayElement", {value: img} );
	return img;
}


function SkillInstance(skillId) {
	var skill = DotaData.getSkillProperties(skillId);
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
