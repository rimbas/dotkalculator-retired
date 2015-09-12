
function ItemInstance(itemId) {
	var item = DotaData.getItemProperties(itemId);
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