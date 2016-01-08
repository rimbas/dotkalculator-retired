
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
	Object.defineProperty(this, "buffReferences", {value: new Map(), writable: true});
	
	for (var prop in ability) {
		var value = ability[prop];
		if (value instanceof Function)
			Object.defineProperty(this, prop, { get: value, enumerable: true });
		else
			this[prop] = value;	
	}
	if (typeof properties.level === "number")
		if (ability.LevelMin && properties.level >= ability.LevelMin)
			this.Level = properties.level;
		else if ( ability.LevelMin === undefined )
			this.Level = properties.level;
	if (typeof properties.levelMax === "number")
		this.LevelMax = properties.levelMax;
	if (typeof properties.charges === "number")
		if (ability.ChargesMin && properties.level >= ability.ChargesMin)
			this.Charges = properties.level;
		else if ( ability.ChargesMin === undefined )
			this.Charges = properties.level;
	if (typeof properties.chargesMax === "number")
		this.ChargesMax = properties.chargesMax
}

AbilityInstance.prototype.clone = function() {
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
	if (!this.Buff || this.Level < 1)
		return;
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

AbilityInstance.prototype.delete = function () {
	for (var buff of this.buffReferences)
		buff[1].delete()
}

AbilityInstance.prototype.toString = function () {
	return "[AbilityInstance "+this.ID+"]";
}

AbilityInstance.prototype.createDisplayElement = function() {
	return ElementHelper.createDisplayElement(this)
}

AbilityInstance.prototype.updateDisplayElement = function () {
	ElementHelper.updateDisplayElements(this)
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

