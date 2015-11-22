/* 
	Hero instance class
*/

// 		Hero instance constructor
//
// heroId  (string) - hero to retrieve from hero data
// options (object)
// Optional properties:
// version (string)  - Dota 2 version override
// level   (integer) - Hero level override
// label   (string)  - Label override
// team    (string)  - team definition
// dead    (boolean) - deadness override
// gold    (integer) - gold override
function HeroInstance(heroId, options) {
	if (!options) options = {};
	
	this.Raw = DotaData.getHeroProperties(heroId, options.version);
	this.Meta = { "ID": heroId, 
				  "Level": Math.min(Math.max(options.level, 1), 25) || this.Raw.Level, 
				  "Label": options.label || this.Raw.Name, 
				  "Team": options.team || undefined, 
				  "Dead": options.dead || false,
				  "Gold": Number.isInteger(options.gold) || 625 };
	this.Base = {};
	this.Item = {};
	this.Items = [];
	if (options.items && ItemInstance.isValidArray(options.items))
		for (var item of options.items)
			this.addItem(item, undefined, true);
	this.Ability = {};
	this.Abilities = [];
	this.AbilityIds = {};
	this.addAbilities(options.abilities);
	this.Buff = {};
	this.Buffs = [];
	this.Total = {Strength: 0, Agility: 0, Intelligence: 0, HealthBase: 0, ManaRegenerationBase: 0,
				  MovementSpeedBase: 0, ManaBase: 0 }
	this.LevelChange();
	this.ItemChange();
	this.AbilityChange();
	this.BuffChange();
}

HeroInstance.prototype.toString = function() {
	return "[HeroInstance "+this.HeroId+"]";
}

// Adds a handler for hero data
// handler - object with properties
// name (string) 			- name
// binds (array of strings) - other handlers that influence
// handler (function)		- the handling function
HeroInstance.addHandler = function (handler) {
	if (handler.name in HeroInstance.prototype) 
		throw "Handler \"" + handler.name + "\"already exists!";
	if (typeof handler.name !== "string") 
		throw "No handler name set!";
	if (typeof handler.handler !== "function" ) 
		throw "No handler passed!";
	
	var wrapper = (function(value) 
		{
			handler.handler.call(this, value);
			
			this.propagateChange(this[handler.name].binds);
		})
	HeroInstance.prototype[handler.name] = wrapper;
	HeroInstance.prototype[handler.name].binds = [];
	
	for ( var bindID of handler.binds )
		this.prototype[bindID].binds.push(handler.name);
	
}

HeroInstance.prototype.propagateChange = function (properties) {
	if (!Array.isArray(properties)) 
		return;
	if (!properties.length) 
		return;
	var propagation = [];
	for ( var propId in properties ) {
		var prop = properties[propId];
		propagation.concat(this[prop].binds);
		this[prop]();
	}
	this.propagateChange(propagation);
}

HeroInstance.prototype.addAbilities = function(abilityOptions) {
	for (var prop in this.Raw)
		if (test = /Ability(\d+)/.exec(prop)) {
			var abilityInstance = new AbilityInstance(this.Raw[prop]);
			abilityInstance.boundUpdate = this.AbilityChange.bind(this);
			abilityInstance.heroRef = this;
			this.Abilities[parseInt(test[1])-1] = abilityInstance;
			this.AbilityIds[this.Raw[prop]] = abilityInstance;
		}
	if (abilityOptions)
		for (var abilityId in abilityOptions) {
			if (!(abilityId in this.AbilityIds)) {
				console.warn("Invalid ability ID "+abilityId+"!");
				continue;
			}
			var abilityData = abilityOptions[abilityId];
			if (abilityData.level)
				this.AbilityIds[abilityId].Level = abilityData.level;
			if (typeof this.AbilityIds[abilityId].Charges == "number" && typeof abilityData.charges == "number")
				this.AbilityIds[abilityId].Charges = abilityData.charges;
		}
}

// Adds an item to the hero
// item        - (ItemInstance)
// forceInsert - circumvents max item limit
// returns -1 if failed
// returns index if success
HeroInstance.prototype.addItem = function (item, forceInsert, silent) {
	if (this.Items.length >= 6 && !forceInsert) {
		return -1;
	}
	var index = this.Items.push(item);
	item.boundDelete = this.removeItem.bind(this, item);
	item.boundUpdate = this.updateTable;
	item.heroRef = this;
	if (!silent)
		this.ItemChange();
	return index;
}

// removes item from a hero
// item (integer) - removes item at index
// item (itemInstance) - removes itemInstance
HeroInstance.prototype.removeItem = function (item) {
	if (Number.isInteger(item)) {
		this.Items.splice(item, 1);	
	}
	else if (item instanceof ItemInstance) {
		this.Items.splice(this.Items.indexOf(item), 1);
	}
	item.heroRef = undefined;
	this.ItemChange();
}

// adds a buff to hero
// override flag removes
HeroInstance.prototype.addBuff = function (buff, override) {
	if (!(buff instanceof BuffInstance))
		throw "Attempting to add invalid buff "+buff;
	if (override) 
		this.removeBuff(buff.ID)
	
	this.Buffs.push(buff)
	buff.boundDelete = this.removeBuff.bind(this, buff)
	buff.boundUpdate = this.updateTable;
	buff.heroRef = this;
	
	this.BuffChange();
}

HeroInstance.prototype.removeBuff = function(buff) {
	if (Array.isArray(buff)) 
		for (var b of buff)
			this.Buffs.splice(this.Buffs.indexOf(b), 1)
	else if (typeof buff == "string")
		this.removeBuffsWithID(buff)
	else if (buff instanceof BuffInstance)
		this.Buffs.splice(this.Buffs.indexOf(buff), 1)
	this.BuffChange()
}

HeroInstance.prototype.removeBuffsWithID = function (buffID) {
	this.removeBuff(this.getBuffs(buffID))
}

HeroInstance.prototype.getBuffs = function(buffId) {
	var list = [];
	for (var buff of this.Buffs)
		if (buff.ID == buffId)
			list.push(buff);
	return list;
}

// Placeholder. Overritten when instance is inserted into a table
HeroInstance.prototype.updateTable = function () {}

HeroInstance.addHandler({
	name: "LevelChange",
	binds: [],
	handler: function(lvl){
		if (lvl) {
			this.Meta.Level = lvl;
		}
		this.Base.StrengthFloat = this.Raw.StrengthBase + this.Raw.StrengthGain * (this.Meta.Level-1);
		this.Base.Strength = Math.round(this.Base.StrengthFloat);
		this.Base.AgilityFloat = this.Raw.AgilityBase + this.Raw.AgilityGain * (this.Meta.Level-1);
		this.Base.Agility = Math.round(this.Base.AgilityFloat);
		this.Base.IntelligenceFloat = this.Raw.IntelligenceBase + this.Raw.IntelligenceGain * (this.Meta.Level-1);
		this.Base.Intelligence = Math.round(this.Base.IntelligenceFloat);
		this.Base.Armor = this.Raw.Armor + this.Base.Agility * 0.14;
		this.Base.Health = this.Raw.Health + this.Base.Strength * 19;
		this.Base.HealthRegeneration = this.Raw.HealthRegeneration + this.Base.Strength * 0.03;
		this.Base.Mana = this.Raw.Mana + this.Base.Intelligence * 13;
		this.Base.ManaRegeneration = this.Raw.ManaRegeneration + this.Base.Intelligence * 0.04;
		var primaryStat = 0;
		if ( this.Raw.Type == "Strength" )
			primaryStat = this.Base.Strength;
		else if ( this.Raw.Type == "Agility" )
			primaryStat = this.Base.Agility;
		else if ( this.Raw.Type == "Intelligence" )
			primaryStat = this.Base.Intelligence;
		this.Base.DamageMin = this.Raw.DamageMin + primaryStat;	
		this.Base.DamageMax = this.Raw.DamageMax + primaryStat;
	}
});

HeroInstance.addHandler({
	name: "ItemChange",
	binds: [],
	handler: function() {
		var a = { "Strength": 0, "Agility":0, "Intelligence":0, 
			"MovementSpeed":0, "MovementSpeedPercentage":0,
			"Armor":0, "MagicalResistance": 0, "Evasion":0,
			"Health":0, "HealthRegeneration":0, "Mana":0, "ManaRegeneration": 0,
			"ManaRegenerationPercentage": 0, "Damage": 0, "AttackSpeed": 0,
			"Range":0, "VisionDay": 0, "VisionNight": 0, "Cost": 0 },
			f = {};
		for (var item of this.Items) {
			if (item.Family)
				if (!f[item.Family.Name])
					f[item.Family.Name] = item.Family;
				else if (f[item.Family.Name].Level < item.Family.Level) 
					f[item.Family.Name] = item.Family;
			
			for (var prop in a) {
				var value = item[prop];
				if (!value)
					continue;
				else if (prop == "Evasion" || prop == "MagicalResistance")
					a[prop] += (1 - a[prop]) * value;
				else
					a[prop] += value;
			}
		}
		
		for (var familyName in f) {
			var family = f[familyName];
			for (var prop in family.Stats) {
				var value = family.Stats[prop];
				if (prop == "Evasion" || prop == "MagicalResistance")
					a[prop] += (1 - a[prop]) * value;
				else
					a[prop] += value;
			}
		}
		this.Item = a;
	}
});

// AbilityChange is split to allow Drow aura calculation work correctly
HeroInstance.addHandler({
	name: "AbilityChange",
	binds: ["LevelChange"],
	handler: function() {
		var a = { "Strength": 0, "Agility":0, "Intelligence":0, "MovementSpeed": 0 };
		for (var ability of this.Abilities) {
			for (var prop in a) {
				var value = ability[prop];
				if (!value)
					continue;
				else if (prop == "Evasion" || prop == "MagicalResistance")
					a[prop] += (1 - a[prop]) * value;
				else
					a[prop] += value;
			}
		}
		this.Ability = a;
	}
});

HeroInstance.addHandler({
	name: "BuffChange",
	binds: [],
	handler: function() {
		var a = { "Strength": 0, "Agility": 0, "Intelligence": 0, "MovementSpeed": 0,
				"MovementSpeedPercentage": 0, "Armor": 0, "Evasion": 0, "Blind": 0,
				"MagicalResistance": 0, "Health": 0, "HealthPercentage": 0, "HealthRegeneration": 0, 
				"Mana": 0, "ManaRegenerationFlat": 0, "Damage": 0, "DamagePercentage": 0,
				"AttackSpeed": 0 }
		for (var buff of this.Buffs) {
			for (var prop in a) {
				var value = buff[prop];
				if (!value)
					continue;
				else if (prop == "Evasion" || prop == "MagicalResistance")
					a[prop] += (1 - a[prop]) * value;
				else
					a[prop] += value;
			}
		}
		this.Buff = a;
	}
})

HeroInstance.addHandler({
	name: "PreTotalChange",
	binds: ["LevelChange", "ItemChange", "AbilityChange", "BuffChange"],
	handler: function() {
		var a = {};
		a.StrengthBonus = this.Item.Strength + this.Ability.Strength + this.Buff.Strength;
		a.Strength = this.Base.Strength + a.StrengthBonus;
		a.AgilityBonus = this.Item.Agility + this.Ability.Agility + this.Buff.Agility;
		a.AgilityFloat = this.Base.AgilityFloat + a.AgilityBonus;
		a.Agility = this.Base.Agility + a.AgilityBonus;
		a.IntelligenceBonus = this.Item.Intelligence + this.Ability.Intelligence + this.Buff.Intelligence;
		a.Intelligence = this.Base.Intelligence + a.IntelligenceBonus;
		a.MovementSpeedBase = this.Raw.MovementSpeed + this.Item.MovementSpeed + this.Ability.MovementSpeed + this.Buff.MovementSpeed;
		a.HealthBase = this.Raw.Health + a.Strength * 19;
		a.ManaBonus = this.Raw.Mana + this.Item.Mana + this.Ability.Mana + this.Buff.Mana;
		a.ManaRegenerationBase = this.Raw.ManaRegeneration + a.Intelligence * 0.04;
		this.Total = a;
	}
})

HeroInstance.addHandler({
	name: "PostAbilityChange",
	binds: ["PreTotalChange"],
	handler: function() {
		var a = { "Strength": 0, "Agility": 0, "Intelligence": 0, 
			"MovementSpeed": 0, "MovementSpeedPercentage": 0,
			"Armor": 0, "MagicalResistance": 0, "Evasion": 0,
			"Health": 0, "HealthRegeneration": 0, "Mana": 0, "ManaRegeneration": 0,
			"ManaRegenerationPercentage": 0, "Damage": 0, "DamageBase": 0,
			"AttackSpeed": 0, "Range": 0, "VisionDay": 0, "VisionNight": 0 };
		for (var ability of this.Abilities) {
			for (var prop in a) {
				var value = ability[prop];
				if (!value)
					continue;
				else if (prop == "Evasion" || prop == "MagicalResistance")
					a[prop] += (1 - a[prop]) * value;
				else
					a[prop] += value;
			}
		}
		this.Ability = a;
	}
});

HeroInstance.addHandler({
	name: "TotalChange",
	binds: ["PostAbilityChange", "LevelChange"],
	handler: function() {
		var a = this.Total;
		a.MovementSpeedPercentage = this.Item.MovementSpeedPercentage + this.Ability.MovementSpeedPercentage + this.Buff.MovementSpeedPercentage;
		a.MovementSpeed = Math.max(a.MovementSpeedBase * (1 + a.MovementSpeedPercentage), 100);
		a.ArmorBonus = this.Item.Armor + this.Ability.Armor + this.Buff.Armor;
		a.ArmorBase = this.Raw.Armor + Math.round(a.AgilityFloat * 0.14 * 100) / 100;
		a.Armor = a.ArmorBase + a.ArmorBonus;
		a.Evasion = this.Item.Evasion + (1-this.Item.Evasion) * this.Ability.Evasion;
		a.Evasion = a.Evasion + (1-a.Evasion) * this.Buff.Evasion;
		a.MagicalResistance = this.Raw.MagicalResistance + (1 - this.Raw.MagicalResistance) * this.Item.MagicalResistance;
		a.MagicalResistance = a.MagicalResistance + (1 - a.MagicalResistance) * this.Ability.MagicalResistance;
		a.MagicalResistance = a.MagicalResistance + (1 - a.MagicalResistance) * this.Buff.MagicalResistance;
		a.HealthBase = a.HealthBase + this.Item.Health + this.Ability.Health + this.Buff.Health;
		a.Health = a.HealthBase * (1 + this.Buff.HealthPercentage);
		a.HealthRegenerationBase = this.Raw.HealthRegeneration + a.Strength * 0.03;
		a.HealthRegenerationBonus = this.Item.HealthRegeneration + this.Ability.HealthRegeneration + this.Buff.HealthRegeneration;
		a.HealthRegeneration = a.HealthRegenerationBase + a.HealthRegenerationBonus;
		a.ManaBase = this.Raw.Mana + a.Intelligence * 13;
		a.ManaBonus = this.Ability.Mana + this.Buff.Mana;
		a.Mana = a.ManaBase + a.ManaBonus;
		a.ManaRegenerationBase = this.Raw.ManaRegeneration + a.Intelligence * 0.04;
		a.ManaRegenerationFlat = this.Item.ManaRegeneration + this.Ability.ManaRegenerationFlat + this.Buff.ManaRegenerationFlat;
		a.ManaRegenerationPercentage = this.Item.ManaRegenerationPercentage + this.Ability.ManaRegenerationPercentage + this.Buff.ManaRegenerationPercentage;
		a.ManaRegeneration = a.ManaRegenerationBase * (1 + a.ManaRegenerationPercentage) + a.ManaRegenerationFlat;
		a.DamageBaseMin = this.Raw.DamageMin + a[this.Raw.Type] + this.Ability.DamageBase;
		a.DamageBaseMax = this.Raw.DamageMax + a[this.Raw.Type] + this.Ability.DamageBase;
		a.DamageBase = Math.floor((a.DamageBaseMin + a.DamageBaseMax) / 2);
		a.DamageBonus = this.Item.Damage + this.Ability.Damage + Math.floor(a.DamageBase * this.Buff.DamagePercentage);
		a.AttackSpeed = 100 + this.Item.AttackSpeed + a.Agility + this.Ability.AttackSpeed + this.Buff.AttackSpeed;
		a.Range = this.Raw.Range + this.Ability.Range;
		a.VisionDay = this.Raw.VisionDaytime;
		a.VisionNight = this.Raw.VisionNighttime + this.Ability.VisionNight + this.Item.VisionNight;
		a.Cost = this.Item.Cost;
		
		this.Total = a;
		this.updateTable();
		for (var item of this.Items)
			item.updateDisplayElement()
		for (var ability of this.Abilities)
			ability.updateDisplayElement()
	}
});
	








