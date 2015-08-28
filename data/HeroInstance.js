/* 
	Hero instance class
*/

// 		Hero instance constructor
//
// heroId  (string)           - hero to retrieve from hero data
// [level] (integer 1..25)    - desired hero level
// [items] (array of strings) - items for the inventory
function HeroInstance(heroId, level, items) {
	level = Math.min(Math.max(level, 1), 25) || 1;
	this.Stats = DotaData.getHeroProperties(heroId);
	this.HeroId = heroId;
	this.SkillList = [];
	this.Skills = {};
	this.ItemList = Array.isArray(items) ? items : [];
	this.Items = {};
	this.AuraList = [];
	this.Auras = {};
	this.BuffList = []
	this.Buffs = {};
	this.Level(level);
	//this.Skills()
	//this.Items();
	//console.log( "Hero " + this.Stats.Name + " created", this);
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
	function(value){
		this.Stats.Level = value;
		this.Stats.LevelMult = value - 1;
	}
);

HeroInstance.addHandler( 
		"Strength", 
		["Level"],
		function() { 
			var rawStr = this.Stats.AttributeStrengthBase + this.Stats.AttributeStrengthGain * this.Stats.LevelMult,
				bonusStr = 0; // todo: calculate item bonus
			this.Stats.AttributeStrengthRaw = rawStr;
			this.Stats.AttributeStrengthBonus = bonusStr;
			this.Stats.AttributeStrengthTotal = rawStr + bonusStr;
		});

HeroInstance.addHandler( 
		"Agility", 
		["Level"],
		function() { 
			var rawAgi = this.Stats.AttributeAgilityBase + this.Stats.AttributeAgilityGain * this.Stats.LevelMult,
				bonusAgi = 0; // todo: calculate item bonus
			this.Stats.AttributeAgilityRaw = rawAgi;
			this.Stats.AttributeAgilityBonus = bonusAgi;
			this.Stats.AttributeAgilityTotal = rawAgi + bonusAgi;
		});

HeroInstance.addHandler( 
		"Intelligence", 
		["Level"],
		function() { 
			var rawInt = this.Stats.AttributeIntelligenceBase + this.Stats.AttributeIntelligenceGain * this.Stats.LevelMult,
				bonusInt = 0; // todo: calculate item bonus
			this.Stats.AttributeIntelligenceRaw = rawInt;
			this.Stats.AttributeIntelligenceBonus = bonusInt;
			this.Stats.AttributeIntelligenceTotal = rawInt + bonusInt;
		}
);
HeroInstance.addHandler( 
		"Primary", 
		["Level"],
		function() { 
			var rawPrimary = 0, bonusPrimary = 0;
			if ( this.Stats.AttributePrimary === "Strength" ) {
				rawPrimary = this.Stats.AttributeStrengthBase + this.Stats.AttributeStrengthGain * this.Stats.LevelMult,
				bonusPrimary = 0;
			}
			else if ( this.Stats.AttributePrimary === "Agility" ) {
				rawPrimary = this.Stats.AttributeAgilityBase + this.Stats.AttributeAgilityGain * this.Stats.LevelMult,
				bonusPrimary = 0;
			}
			else if ( this.Stats.AttributePrimary === "Intelligence" ) {
				rawPrimary = this.Stats.AttributeIntelligenceBase + this.Stats.AttributeIntelligenceGain * this.Stats.LevelMult,
				bonusPrimary = 0;
			}
			this.Stats.AttributePrimaryRaw = rawPrimary;
			this.Stats.AttributePrimaryBonus = bonusPrimary;
			this.Stats.AttributePrimaryTotal = rawPrimary + bonusPrimary;
		}
);

HeroInstance.addHandler(
	"Health",
	["Strength"],
	function() {
		var hp = this.Stats.StatusHealthBase + this.Stats.AttributeStrengthTotal * 19;
		this.Stats.StatusHealthTotal = Math.round(hp);
	});

HeroInstance.addHandler(
	"Mana",
	["Intelligence"],
	function() {
		var mp = this.Stats.StatusManaBase + this.Stats.AttributeIntelligenceTotal * 13;
		this.Stats.StatusManaTotal = Math.round(mp);
	});

HeroInstance.addHandler(
	"Armor",
	["Agility"],
	function() {
		var armor = this.Stats.StatusArmorBase + this.Stats.AttributeAgilityTotal * 0.14;
		this.Stats.StatusArmorTotal = Math.round( armor * 100 ) / 100;
	});

HeroInstance.addHandler(
	"PhysicalResistance",
	["Armor"],
	function() {
		var res = (0.06 * this.Stats.StatusArmorTotal) / (1 + 0.06 * this.Stats.StatusArmorTotal);
		res = Math.round( res * 100 ) / 100;
		this.Stats.StatusPhysicalResistance = res;
	});

HeroInstance.addHandler(
	"Damage",
	["Primary"],
	function(){
		var attackBase = Math.floor((this.Stats.AttackDamageMin+this.Stats.AttackDamageMax)/2) + this.Stats.AttributePrimaryTotal;
		var attackBonus = 0;
		this.Stats.AttackDamageBase = attackBase;
		this.Stats.AttackDamageBonus = attackBonus;
		this.Stats.AttackDamageTotal = attackBase + attackBonus;
	});