DotaData = {};
DotaData.Versions = {}
DotaData.NewestVersion = "6.84c";
DotaData.TargetVersion = DotaData.NewestVersion;

// Returns a new instance of complete hero propery data
// heroId (string) - internal hero ID
DotaData.getHeroProperties = function (heroId) {
	var version = DotaData.Versions[DotaData.TargetVersion];
	if (!(heroId in version.Heroes)) throw "No such id \"" + heroId + "\" in hero list";
	var obj = {}, i, prop,
		base = version.Heroes._base,
		hero = version.Heroes[heroId];
	
	for (prop in base) {
		obj[prop] = base[prop];
	}
	for (prop in hero) {
		obj[prop] = hero[prop];
	}
	return obj;
}

DotaData.getCurrentHeroList = function() {
	return DotaData.Versions[DotaData.TargetVersion].Heroes;
}

DotaData.addVersion = function (version, data) {
	this.Versions[version] = data;
}


