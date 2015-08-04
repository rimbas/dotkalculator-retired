/* 
	Hero instance class
*/

// Hero instance constructor
// heroId  (string)           - hero to retrieve from hero data
// [level] (integer 1..25)    - desired hero level
// [items] (array of strings) - items for the inventory
function HeroInstance(heroId, level, items) {
	var BaseProperties = DotaData.getHeroProperties(heroId);
	for ( var prop in BaseProperties ) {
		this[prop] = BaseProperties[prop];	
	}
	this.HeroId = heroId;
	this.Level = Math.min(Math.max(level || 1, 1), 25);
	this.Items = items;
	this.EvaluateAll();
}
Object.defineProperty(HeroInstance.prototype, "LevelMult", { get: function () { return this.Level - 1; } } )

// Instance copier
HeroInstance.prototype.clone = function () {
	return new HeroInstance(this.HeroId, this.Level, this.Items.slice(0));
}

HeroInstance.prototype.EvaluateAll = function() {
	for (var ev in this.eval) {
		this.eval[ev].call(this)
	}
}

// Calls the evaluation function for the property, changes internal variables 
// returns main value
// property (string) - valid property
HeroInstance.prototype.Evaluate = function( property ) {
	if ( property in this.eval ) return this.eval[property].call(this)
}
HeroInstance.prototype.eval = {};

// Strength evaluation function
// Sets:
// AttributeStrengthRaw   - Base strength + level gain strength
// AttributeStrengthBonus - Strength gained from items
// AttributeStrengthTotal - Total strength
HeroInstance.prototype.eval.Strength = function () {
	var rawStr = Math.floor(this.AttributeStrengthBase + this.AttributeStrengthGain * this.LevelMult),
		bonusStr = 0; // todo: calculate item bonus
	this.AttributeStrengthRaw = rawStr;
	this.AttributeStrengthBonus = bonusStr;
	this.AttributeStrengthTotal = rawStr + bonusStr;
	return this.AttributeStrengthTotal;
}

// Agility evaluation function
// Sets:
// AttributeAgilityRaw   - Base + level gain agility
// AttributeAgilityBonus - Agility gained from items
// AttributeAgilityTotal - Total agility
HeroInstance.prototype.eval.Agility = function () {
	var rawAgi = Math.floor(this.AttributeAgilityBase + this.AttributeAgilityGain * this.LevelMult),
		bonusAgi = 0; // todo: calculate item bonus
	this.AttributeAgilityRaw = rawAgi;
	this.AttributeAgilityBonus = bonusAgi;
	this.AttributeAgilityTotal = rawAgi + bonusAgi;
	return this.AttributeAgilityTotal;
}

HeroInstance.prototype.eval.Intelligence = function () {
	var rawInt = Math.floor(this.AttributeIntelligenceBase + this.AttributeIntelligenceGain * this.LevelMult),
		bonusInt = 0; // todo: calculate item bonus
	this.AttributeIntelligenceRaw = rawInt;
	this.AttributeIntelligenceBonus = bonusInt;
	this.AttributeIntelligenceTotal = rawInt + bonusInt;
	return this.AttributeIntelligenceTotal;
}


// Evaluates Strength, returns health
HeroInstance.prototype.eval.Health = function () {
	this.StatusHealthTotal = this.StatusHealthBase + this.Evaluate("Strength") * 19;
	return this.StatusHealthTotal;
}

HeroInstance.prototype.eval.Mana = function () {
	this.StatusManaTotal = this.StatusManaBase + this.Evaluate("Intelligence") * 13;
	return this.StatusManaTotal;
}

HeroInstance.prototype.eval.Armor = function () {
	var floatArmor = this.ArmorBase + this.Evaluate("Agility") * 0.14;
	this.ArmorTotal = Math.round( floatArmor * 100 ) / 100;
	return this.ArmorTotal;
}

HeroInstance.prototype.eval.Damage = function() {
	var statDamage = this.Evaluate(this.AttributePrimary);
	var baseDamage = Math.round( (this.AttackDamageMin + this.AttackDamageMax) / 2 );
	this.AttackDamageBase = baseDamage + statDamage;
	return this.AttackDamageBase;
}

