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
	this.Skill = {}
	this.Skills = [];
	this.Aura = {};
	this.Auras = [];
	this.LevelChange();
	this.ItemChange();
}

HeroInstance.prototype.toString = function() {
	return "[HeroInstance "+this.HeroId+"]";
}

HeroInstance.addHandler = function (handler) {
	if (handler.Name in HeroInstance.prototype) 
		throw "Handler \"" + handler.Name + "\"already exists!";
	if (typeof handler.Name !== "string") 
		throw "No handler name set!";
	if (typeof handler.Handler !== "function" ) 
		throw "No handler passed!";
	
	var wrapper = (function(value) 
		{
			handler.Handler.call(this, value);
			this.propagateChange(this[handler.Name].binds);
		})
	HeroInstance.prototype[handler.Name] = wrapper;
	HeroInstance.prototype[handler.Name].binds = [];
	
	for ( var i in handler.Binds ) {
		var bind = handler.Binds[i];
		this.prototype[bind].binds.push(handler.Name);
	}
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

// Adds an item to the hero
// item        - (ItemInstance)
// forceInsert - circumvents max item limit
// returns -1 if failed
// returns index if success
HeroInstance.prototype.addItem = function (item, forceInsert) {
	if (this.Items.length >= 6 && !forceInsert) {
		return -1;
	}
	var index = this.Items.push(item);
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
	this.ItemChange();
}

// Placeholder. Overritten when instance is inserted into a table
HeroInstance.prototype.updateTable = function () {}

HeroInstance.addHandler({
	Name: "LevelChange",
	Binds: [],
	Handler: function(lvl){
		if (lvl) {
			this.Meta.Level = lvl;
		}
		this.Base.StrengthFloat = this.Raw.StrengthBase + this.Raw.StrengthGain * (this.Meta.Level-1);
		this.Base.Strength = Math.floor(this.Base.StrengthFloat);
		this.Base.AgilityFloat = this.Raw.AgilityBase + this.Raw.AgilityGain * (this.Meta.Level-1);
		this.Base.Agility = Math.floor(this.Base.AgilityFloat);
		this.Base.IntelligenceFloat = this.Raw.IntelligenceBase + this.Raw.IntelligenceGain * (this.Meta.Level-1);
		this.Base.Intelligence = Math.floor(this.Base.IntelligenceFloat);
		this.Base.Armor = this.Raw.Armor + this.Base.Agility * 0.14;
		this.Base.Health = this.Raw.Health + this.Base.Strength * 19;
		this.Base.HealthRegeneration = this.Raw.HealthRegeneration + this.Base.Strength * 0.03;
		this.Base.Mana = this.Raw.Mana + this.Base.Intelligence * 13;
		this.Base.ManaRegeneration = this.Raw.ManaRegeneration + this.Base.Intelligence * 0.04;
		var primaryStat = 0;
		if ( this.Raw.Type == "Strength" )
			primaryStat = this.Base.Strength;
		if ( this.Raw.Type == "Agility" )
			primaryStat = this.Base.Agility;
		if ( this.Raw.Type == "Intelligence" )
			primaryStat = this.Base.Intelligence;
		this.Base.DamageMin = this.Raw.DamageMin + primaryStat;	
		this.Base.DamageMax = this.Raw.DamageMax + primaryStat;
	}
});

HeroInstance.addHandler({
	Name: "ItemChange",
	Binds: [],
	Handler: function() {
		var a = { "Strength": 0, "Agility":0, "Intelligence":0, 
			"MovementSpeedFlat":0, "MovementSpeedPercentage":0,
			"Armor":0, "MagicalResistance": 0, "Evasion":0,
			"Health":0, "HealthRegeneration":0, "Mana":0, "ManaRegenerationFlat": 0,
			"ManaRegenerationPercentage": 0, "Damage": 0, "AttackSpeed": 0,
			"Range":0, "VisionDay": 0, "VisionNight": 0 };
		for (var item of this.Items) {
			for (var prop in a) {
				var value = item[prop];
				if (prop == "Evasion" || prop == "MagicalResistance") {
					a[prop] += (1 - a[prop]) * value;
				}
				else {
					a[prop] += value;
				}
			}
		}
		this.Item = a;
	}
});

HeroInstance.addHandler({
	Name: "SkillChange",
	Binds: ["LevelChange"],
	Handler: function() {
		var a = { "Strength": 0, "Agility":0, "Intelligence":0, 
			"MovementSpeedFlat":0, "MovementSpeedPercentage":0,
			"Armor":0, "MagicalResistance": 0, "Evasion":0,
			"Health":0, "HealthRegeneration":0, "Mana":0, "ManaRegenerationFlat": 0,
			"ManaRegenerationPercentage": 0, "Damage": 0, "DamageBase": 0, "AttackSpeed": 0,
			"Range":0, "VisionDay": 0, "VisionNight": 0 },
			bootSpeed = 0;
		
		for (var item of this.Skills) {
			for (var prop in a) {
				var value = item[prop];
				if (prop.IsBoot && prop.MovementSpeedFlat > bootSpeed) {
					bootSpeed = prop.MovementSpeedFlat;
				}
				else if (prop == "Evasion" || prop == "MagicalResistance") {
					a[prop] += (1 - a[prop]) * value;
				}
				else {
					a[prop] += value;
				}
			}
		}
		a.MovementSpeedFlat += bootSpeed;
		this.Skill = a;
	}
});

HeroInstance.addHandler({
	Name: "TotalChange",
	Binds: ["LevelChange", "ItemChange", "SkillChange"],
	Handler: function() {
		var a = {};
		a.StrengthBonus = this.Item.Strength + this.Skill.Strength;
		a.Strength = this.Base.Strength + a.StrengthBonus;
		a.AgilityBonus = this.Item.Agility + this.Skill.Agility;
		a.AgilityFloat = this.Base.AgilityFloat + a.AgilityBonus;
		a.Agility = this.Base.Agility + a.AgilityBonus;
		a.IntelligenceBonus = this.Item.Intelligence + this.Skill.Intelligence;
		a.Intelligence = this.Base.Intelligence + a.IntelligenceBonus;
		a.MovementSpeedBase = this.Raw.MovementSpeed + this.Item.MovementSpeedFlat + this.Skill.MovementSpeedFlat;
		a.MovementSpeedPercentage = this.Item.MovementSpeedPercentage + this.Skill.MovementSpeedPercentage;
		a.MovementSpeed = Math.max(a.MovementSpeedBase * (1+ a.MovementSpeedPercentage), 100);
		a.ArmorBonus = this.Item.Armor + this.Skill.Armor;
		a.ArmorBase = this.Raw.Armor + Math.round(a.AgilityFloat * 0.14 * 100) / 100;
		a.Armor = a.ArmorBase + a.ArmorBonus;
		a.Evasion = this.Item.Evasion + (1-this.Item.Evasion) * this.Skill.Evasion;
		a.MagicalResistance = this.Raw.MagicalResistance + (1-this.Raw.MagicalResistance) * this.Skill.MagicalResistance;
		a.HealthBase = this.Raw.Health + a.Strength * 19;
		a.Health = a.HealthBase + this.Item.Health + this.Skill.Health
		a.HealthRegenerationBase = this.Raw.HealthRegeneration + a.Strength * 0.03;
		a.HealthRegenerationBonus = this.Item.HealthRegeneration + this.Skill.HealthRegeneration;
		a.HealthRegeneration = a.HealthRegenerationBase + a.HealthRegenerationBonus;
		a.ManaBase = this.Raw.Mana + a.Intelligence * 13;
		a.ManaBonus = this.Item.Mana + this.Skill.Mana;
		a.Mana = a.ManaBase + a.ManaBonus;
		a.ManaRegenerationBase = this.Raw.ManaRegeneration + a.Intelligence * 0.04;
		a.ManaRegenerationFlat = this.Skill.ManaRegenerationFlat;
		a.ManaRegenerationPercentage = this.Item.ManaRegenerationPercentage + this.Skill.ManaRegenerationPercentage;
		a.ManaRegeneration = a.ManaRegenerationBase * (1 + a.ManaRegenerationPercentage) + a.ManaRegenerationFlat;
		a.DamageBaseMin = this.Raw.DamageMin + a[this.Raw.Type] + this.Skill.DamageBase;
		a.DamageBaseMax = this.Raw.DamageMax + a[this.Raw.Type] + this.Skill.DamageBase;
		a.DamageBase = Math.floor((a.DamageBaseMin +a.DamageBaseMax)/2);
		a.DamageBonus = this.Item.Damage + this.Skill.Damage;
		a.AttackSpeed = 100 + this.Item.AttackSpeed + a.Agility;
		a.Range = this.Raw.Range + this.Skill.Range;
		a.VisionDay = this.Raw.VisionDaytime;
		a.VisionNight = this.Raw.VisionNighttime + this.Skill.VisionNight + this.Item.VisionNight;

		this.Total = a;
		this.updateTable();
	}
});
	








