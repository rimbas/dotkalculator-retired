/* 
	Hero instance class
*/

// 		Hero instance constructor
//
// heroId  (string)           - hero to retrieve from hero data
// [level] (integer 1..25)    - desired hero level
// [items] (array of strings) - items for the inventory
function HeroInstance(heroId, level, team, items) {
	level = Math.min(Math.max(level, 1), 25) || 1;
	this.Raw = DotaData.getHeroProperties(heroId);
	this.Base = {};
	this.Items = [];
	this.Item = {};
	this.Auras = [];
	this.Aura = {};
	this.Meta = { "ID": heroId, "Label": this.Raw.Name, "Team": team || "None", "Dead": false };
	this.Level(level);
}

HeroInstance.prototype.toString = function() {
	return "[HeroInstance "+this.HeroId+"]";
}

HeroInstance.addHandler = function (name, binds, handler) {
	if (name in HeroInstance.prototype) 
		throw "Handler \"" + name + "\"already exists!";
	if (typeof name !== "string") 
		throw "No handler name set!";
	if (typeof handler !== "function" ) 
		throw "No handler passed!";
	
	var wrapper = function(value) 
		{
			handler.call(this, value);
			this.propagateChange(this[name].binds);
		}
	wrapper.binds = [];
	HeroInstance.prototype[name] = wrapper;
	
	for ( var i in binds ) {
		var bind = binds[i];
		this.prototype[bind].binds.push(name);
	}
}

HeroInstance.prototype.propagateChange = function (properties) {
	if (!Array.isArray(properties)) 
		throw "Array expected, got " + properties;
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

HeroInstance.addHandler(
	"Level",
	[],
	function(lvl){
		this.Raw.Level = lvl
		this.Base.Strength = this.Raw.StrengthBase + this.Raw.StrengthGain * (lvl-1);
		this.Base.Agility = this.Raw.AgilityBase + this.Raw.AgilityGain * (lvl-1);
		this.Base.Intelligence = this.Raw.IntelligenceBase + this.Raw.IntelligenceGain * (lvl-1);
		this.Base.Armor = this.Raw.Armor + this.Base.Agility * 0.14;
		this.Base.Health = this.Raw.Health + this.Base.Strength * 19;
		this.Base.HealthRegen = this.Raw.HealthRegen + this.Base.Strength * 0.03;
		this.Base.Mana = this.Raw.Mana + this.Base.Intelligence * 13;
		this.Base.ManaRegen = this.Raw.ManaRegen + this.Base.Intelligence * 0.04;
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
);

HeroInstance.addHandler(
	"Items",
	[],
	function() {
		var a = { "Strength": 0, "Agility":0, "Intelligence":0, 
			"MovementSpeedFlat":0, "MovementSpeedPercentage":0,
			"Armor":0, "MagicResistance": 0, "Evasion":0,
			"Health":0, "HealthRagen":0, "Mana":0, "ManaRegen":0,
			"ManaRegenFlat":0, "ManaRegenPercentage": 0,
			"Damage": 0, "AttackSpeed": 0, "Range":0,
			"VisionDay": 0, "VisionNight": 0 };
		for (var i = 0; i < this.Items.length; i++) {
			for (var prop in a) {
				var value = this.Items[i][prop];
				a[prop] += value;
			}
		}
		this.Item = a;
	}
);








