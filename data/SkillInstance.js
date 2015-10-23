
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
	return "[ItemInstance "+this.ID+"]";
}
