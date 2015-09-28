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

DotaData.getSkillProperties = function (skillId, versionOverride) {
	if (versionOverride && !versionOverride in DotaData.Versions) throw "No such version \""+versionOverride+"\"";
	var version = DotaData.Versions[versionOverride || DotaData.TargetVersion];
	//if (!(skillId in version.Skills)) throw "No such id \"" + skillId + "\" in item list";
	// while not all skills are implemented
	if (!(skillId in version.Skills)) Console.warn("No such id \"" + skillId + "\" in item list");
	var obj = {}, i, prop,
		skill = version.Skills[skillId];
	
	for (prop in skill) {
		obj[prop] = skill[prop];
	}
	return obj;
}

DotaData.getCurrentHeroList = function() {
	return DotaData.Versions[DotaData.NewestVersion].Heroes;
}

DotaData.addVersion = function (version, data) {
	DotaData.Versions[version] = data;
}


