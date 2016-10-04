// Main Dota data object

DotaData = {};
DotaData.Versions = {}
DotaData.NewestVersion = "";

DotaData.Meta = {
	TeamList: ["Radiant", "Dire"],
	TypeList: ["Strength", "Agility", "Intelligence"],
	ShopSections: [
		"Consumables", "Attributes", "Armaments", "Arcane", "Common", "Support",
		"Caster", "Weapons", "Armor", "Artifacts", "Secret", "Unlisted" ],
}

// Returns a new instance of complete hero propery data
// heroId (string) - internal hero ID
DotaData.getHeroProperties = function (heroId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.NewestVersion];
	if (!(heroId in version.Heroes)) throw "No such id \"" + heroId + "\" in hero list";
	var obj = {},
		base = version.Heroes._base,
		hero = version.Heroes[heroId],
		AbilityIDs = [];

	for (let prop in base) {
		obj[prop] = base[prop];
	}
	for (let prop in hero) {
		obj[prop] = hero[prop];
	}

	return obj;
}

DotaData.getItemProperties = function (itemId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.NewestVersion];
	if (!(itemId in version.Items)) throw "No such id \"" + itemId + "\" in item list";
	var obj = {},
		base = version.Items._base,
		item = version.Items[itemId];

	for (let prop in base)
		obj[prop] = base[prop];
	for (let prop in item)
		obj[prop] = item[prop];
	return obj;
}

DotaData.getAbilityProperties = function (abilityId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.NewestVersion];
	if (!(abilityId in version.Abilities))
		throw "No such id \"" + abilityId + "\" in ability list";
	var obj = {},
		base = version.Abilities._base,
		skill = version.Abilities[abilityId];

	for (let prop in base)
		obj[prop] = base[prop];
	for (let prop in skill)
		obj[prop] = skill[prop];
	return obj;
}

DotaData.getBuffProperties = function(buffId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.NewestVersion];
	if (!(buffId in version.Buffs))
		throw "No such id \"" + buffId + "\" in buff list";
	var obj = {},
		base = version.Buffs._base,
		buff = version.Buffs[buffId];

	for (let prop in base)
		obj[prop] = base[prop]
	for (let prop in buff)
		obj[prop] = buff[prop];
	return obj;
}

DotaData.getCurrentHeroList = function() {
	return DotaData.Versions[DotaData.NewestVersion].Heroes;
}

DotaData.getCurrentItemList = function() {
	return DotaData.Versions[DotaData.NewestVersion].Items;
}

DotaData.getHeroList = function(version) {
	return DotaData.Versions[version].Heroes
}

DotaData.getItemList = function(version) {
	return DotaData.Versions[version].Items
}

DotaData.addVersion = function(version, data) {
	if (version > DotaData.NewestVersion)
		DotaData.NewestVersion = version;
	DotaData.checkVersionData(data);
	DotaData.Versions[version] = data;
}

DotaData.checkVersionData = function(data) {
	for (var heroId in data.Heroes) {
		var hero = data.Heroes[heroId];
		if (typeof heroId != "string")
			console.error("Hero "+heroId+" with a non string identifier!");

		if (hero.Name == undefined)
			console.warn("Hero with ID "+heroId+" has no name!")
	}
}

// Lookup list for readable property names
DotaData.readableStatStrings = {
	"HealthRegeneration": "HP regeneration",
	"ManaRegeneration": "Mana regeneration",
	"ManaRegenerationPercentage": "Mana regeneration",
	"ManaRegenerationFlat": "Mana regeneration",
	"MovementSpeed": "Movement speed",
	"MovementSpeedPercentage": "Movement speed",
	"VisionDay": "Day vision",
	"VisionNight": "Night vision",
	"AttackSpeed": "Attack speed",
	"MagicalResistance": "Magical resistance",
	"AttackRate": "Base attack time",
	"DamagePercentage": "Damage",
	"DamageBase": "Base damage",
	"DamageReductionPercentage": "Damage"
}

// Lookup list when positive stats are detrimental
DotaData.positiveNegativeStats = {
	"AttackRate": true
}

// stat formatter
DotaData.statToReadable = function(stat, val) {
	var key = DotaData.readableStatStrings[stat] ? DotaData.readableStatStrings[stat] : stat,
		isPercentage = false, //calculatable percentage (from a base value)
		percentageTest = /^(\w+)Percentage$/.exec(stat),
		printableValue = val;
	if (percentageTest || stat == "Evasion" || stat == "MagicalResistance")
		printableValue = (val > 0 ? "+" : "" ) + (val * 100).toFixed(0)+"%";
	else if ( val != Math.trunc(val))
		printableValue = (printableValue > 0 ? "+" : "") + printableValue.toFixed(2)
	else
		printableValue = printableValue > 0 ? "+" + printableValue : printableValue
	if (percentageTest && percentageTest[1])
		isPercentage = true;
	return {
		key: key,
		value: printableValue,
		isPercentage: isPercentage,
		baseName: percentageTest ? percentageTest[1] : undefined,
		negativeOverride: DotaData.positiveNegativeStats[stat]
	};
}

DotaData.numericToRoman = function(num) {
	return  0 <= num && num <= 10 ? ["-", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][Math.floor(num)] : num;
}

// Formatter for <HTMLElement>.textContent
// Display nothing when value is 0 or a sign prefixed value otherwise
DotaData.formatStatTextContent = function formatStatTextContent(val) {
	if (val > 0)
		return "+" + val;
	else if (val < 0)
		return "" + val
	return null
}
