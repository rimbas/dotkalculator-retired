DotaData = {};
DotaData.Versions = {}
DotaData.NewestVersion = "6.85";  //working in valve time so badly, this was started in 6.84b
DotaData.TargetVersion = DotaData.NewestVersion;

// Returns a new instance of complete hero propery data
// heroId (string) - internal hero ID
DotaData.getHeroProperties = function (heroId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.TargetVersion];
	if (!(heroId in version.Heroes)) throw "No such id \"" + heroId + "\" in hero list";
	var obj = {}, i, prop,
		base = version.Heroes._base,
		hero = version.Heroes[heroId],
		AbilityIDs = [];
	
	for (prop in base) {
		obj[prop] = base[prop];
	}
	for (prop in hero) {
		obj[prop] = hero[prop];
	}	
	
	return obj;
}

DotaData.getItemProperties = function (itemId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.TargetVersion];
	if (!(itemId in version.Items)) throw "No such id \"" + itemId + "\" in item list";
	var obj = {}, i, prop,
		base = version.Items._base,
		item = version.Items[itemId];
	
	for (prop in base) {
		obj[prop] = base[prop];
	}
	for (prop in item) {
		obj[prop] = item[prop];
	}
	return obj;
}

DotaData.getAbilityProperties = function (abilityId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.TargetVersion];
	//if (!(abilityId in version.Abilities)) throw "No such id \"" + abilityId + "\" in item list";
	// while not all skills are implemented
	if (!(abilityId in version.Abilities)) 
		return DotaData.getAbilityProperties("_base")
		//console.warn("No such id \"" + abilityId + "\" in item list");
	var obj = {}, i, prop,
		skill = version.Abilities[abilityId];
	
	for (prop in skill) {
		obj[prop] = skill[prop];
	}
	return obj;
}

DotaData.getCurrentHeroList = function() {
	return DotaData.Versions[DotaData.NewestVersion].Heroes;
}

DotaData.getCurrentItemList = function() {
	return DotaData.Versions[DotaData.NewestVersion].Items;
}

DotaData.addVersion = function(version, data) {
	DotaData.checkVersionData(data);
	DotaData.Versions[version] = data;
}

DotaData.checkVersionData = function(data) {
	for (var heroId in data.Heroes) {
		var hero = data.Heroes[heroId];
		if (typeof heroId != "string") {
			console.error("Hero "+heroId+" with a non string identifier!");
			delete data.Heroes[heroId];
		}
		if (!hero.Name) console.warn("Hero with ID "+heroId+"Has no name!")
	}
}

DotaData.readableStatStrings = {
	"HealthRegeneration": "HP regeneration",
	"ManaRegeneration": "Mana regeneration",
	"ManaRegenerationPercentage": "Mana regeneration",
	"MovementSpeed": "Movement speed",
	"MovementSpeedPercentage": "Movement speed",
	"VisionDay": "Day vision",
	"VisionNight": "Night vision",
	"AttackSpeed": "Attack speed",
	"MagicalResistance": "Magical resistance"
}

DotaData.statToReadable = function(stat, val) {
	var key = DotaData.readableStatStrings[stat] ? DotaData.readableStatStrings[stat] : stat;
	if (/Percentage$/.test(stat) || stat == "Evasion" || stat == "MagicalResistance")
		val = (val > 0 ? "+" : "" ) + (val * 100).toFixed(0)+"%";
	return { key: key, value: val > 0 ? "+" + val : val };
}

DotaData.numericToRoman = function(number) {
	return ["-", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"][number];
}


