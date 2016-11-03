// Main Dota data object

DotaData = {};
DotaData.Versions = {}
DotaData.NewestVersion = "";
DotaData.NewestMajor = "";

DotaData.Meta = {
	TeamList: ["Radiant", "Dire"],
	TypeList: ["Strength", "Agility", "Intelligence"],
	ShopSections: [
		"Consumables", "Attributes", "Armaments", "Arcane", "Common", "Support",
		"Caster", "Weapons", "Armor", "Artifacts", "Secret", "Unlisted" ],
	// List of properties that should be automatically handled.
	// This list is also a reference list of stats that should be displayed in tooltips
	StatAutoProperties: [
		"Strength", "Agility", "Intelligence", "Health", "Mana",
		"HealthRegeneration", "ManaRegenerationPercentage", "ManaRegenerationFlat",
		"MagicalResistance", "Evasion", "Armor", "MovementSpeed", "MovementSpeedPercentage",
		"Damage", "DamageBase", "DamagePercentage", "DamageReductionPercentage", "DamageReduction",
		"AttackSpeed", "AttackRate", "Range", "Haste", "ManaCostReduction", "CooldownReduction",
		"VisionNight",
	],
	// Technical or hidden automatically handled properties
	TechnicalAutoProperties: [
		"LevelMin", "LevelMax", "ChargesMin", "ChargesMax", "Image",
		"ManaCost", "Cooldown", "Hidden", "Buff", "HasAghanims", "Class",
		"Invisible", "Revealed", "MovementSpeedUncapped",
	]
}

DotaData.getCurrentHeroList = function() {
	return DotaData.Versions[DotaData.NewestMajor].Heroes;
}

DotaData.getCurrentItemList = function() {
	return DotaData.Versions[DotaData.NewestMajor].Items;
}

DotaData.getHeroList = function(version) {
	return DotaData.Versions[DotaData.getMajorFromVersion(version)].Heroes
}

DotaData.getItemList = function(version) {
	return DotaData.Versions[DotaData.getMajorFromVersion(version)].Items
}

DotaData.addVersion = function(data) {
	let version = DotaData.checkVersionData(data)
	if (version > DotaData.NewestVersion)
		DotaData.NewestVersion = version;
	if (!data.Meta.Base && version > DotaData.NewestMajor)
		 DotaData.NewestMajor = version;
	DotaData.Versions[version] = data;
}

// Utility to check for worst errors in data definition files
// Also returns the version of data
DotaData.checkVersionData = function(data, extra) {
	if (data.Meta == undefined)
		throw "Metadata is not defined!"
	let version = data.Meta.Version
	if (version in DotaData.Versions)
		throw `Version "${version}" already defined!`

	if (data.Meta == undefined || data.Meta.Base == undefined ) {
		if (!data.Heroes && !data.Items && !data.Abilities && !data.Buffs)
			throw `No usable data in version "${version}"!`

		for (var heroId in data.Heroes) {
			var hero = data.Heroes[heroId];
			if (typeof heroId != "string")
				console.error(`Hero "${heroId}" with a non string identifier!`);

			if (hero.Name == undefined)
				console.warn(`Hero "${heroId}" has no name! (Field "Name" is missing)`)

			if (extra && hero.LoreName == undefined)
				console.warn(`Hero "${heroId}" has no lore name! (Field "LoreName" is missing)`)
		}
	}
	else {
		// TODO: Checks for inconsistencies between major and minor versions

		for (let typeId in data) {
			let typeData = data[typeId];


			for (let objId in typeData) {
				let objData = typeData[objId];
			}
		}
	}
	return data.Meta.Version;
}

DotaData.getMajorFromVersion = function majorFromVersion(version) {
	let majorVersion = version
	while ("Base" in DotaData.Versions[majorVersion].Meta) {
		majorVersion = DotaData.Versions[majorVersion].Meta.Base
	}
	return majorVersion
}

// Lookup list for percentage based values
DotaData.percentageValues = [
	"Evasion", "MagicalResistance", "CooldownReduction", "ManaCostReduction",
]

// Lookup list when stats are defined with positive values but should be
// displayed as negative
DotaData.negatedValues = [
	"CooldownReduction", "ManaCostReduction",
]

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
	"DamageReductionPercentage": "Damage",
	"ManaCostReduction": "Mana cost reduction",
	"CooldownReduction": "Cooldown reduction",
}

// Lookup list when positive stats are detrimental
DotaData.positiveNegativeStats = [
	"AttackRate",
]

// stat formatter, oh boy
DotaData.statToReadable = function(stat, val) {
	if (DotaData.negatedValues.includes(stat))
		val = -val;
	let key = DotaData.readableStatStrings[stat] || stat,
		isPercentage = false, //calculatable percentage (from a base value)
		percentageTest = /^(\w+)Percentage$/.exec(stat),
		printableValue = val,
		signPrefix = val > 0 ? "+" : "";

	// Format printable value depending if its a percentage or normal value
	if (percentageTest || DotaData.percentageValues.includes(stat))
		printableValue = signPrefix + (val * 100).toFixed(0)+"%";
	else if ( val != Math.trunc(val))
		printableValue = signPrefix + printableValue.toFixed(2)
	else
		printableValue = signPrefix + printableValue

	// Flag if it's possible to calculate a value for this property by replacing
	// the suffix "Percentage" with "Base"
	if (percentageTest && percentageTest[1])
		isPercentage = true;

	return {
		key: key,
		value: printableValue,
		isPercentage: isPercentage,
		baseName: percentageTest ? percentageTest[1] : undefined,
		negativeOverride: DotaData.positiveNegativeStats.includes(stat),
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
		return "" + val // derp
	return null
}

// Unified data aggregator
// type		- section in data definitions
// id		- requested data identifier
// version	- version selector
DotaData.getTypeData = function getTypeData(type, id, version) {
	if (version == undefined)
		version = DotaData.NewestVersion;
	if (!(version in DotaData.Versions))
		throw `No such version "${version}" exists!`
	let dotaVersion = DotaData.Versions[version];
	if (dotaVersion.Meta.Base) {
		let base = getTypeData(type, id, dotaVersion.Meta.Base);

		if (dotaVersion[type]) {
			let data = dotaVersion[type][id];
			for (let prop in data)
				base[prop] = data[prop];
		}
		base.Version = version;
		return base
	}
	else {
		let constructedData = {};
		// Absolute base data
		if (dotaVersion[type] == undefined) {
			throw `Version "${version}" without "${type}" type!`
		}
		let base = dotaVersion[type]._base,
			data = dotaVersion[type][id];
		if (data === undefined)
			throw `No such id "${id}" in type ${type} in version "${version}"!`
		for (let prop in dotaVersion[type]._base)
			constructedData[prop] = base[prop];
		for (let prop in data)
			constructedData[prop] = data[prop];

		constructedData.Version = version;
		return constructedData
	}
}
