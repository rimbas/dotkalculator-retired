/*
	Hero instance class
*/

/**
 * @constructor Creates a hero instance
 * @param {String} heroId Internal Dota 2 hero ID.
 * @param {Object=} options Optional arguments.
 * @param {String} options.version Dota 2 version override.
 * @param {Integer} options.level Level override.
 * @param {String} options.label Custom label.
 * @param {String} options.team Assigned team name.
 * @param {boolean} options.dead Hero death status override.
 * @param {Integer} options.gold Gold amount override.
 * @param {object[].<String, number>} options.abilities String indexed skill levels.
 * @param {BuffObject[]} options.buffs Array of buff instances.
 * @param {(ItemObject[]|string[])} options.items Array of string item IDs or ItemObject.
 */
function HeroInstance(heroId, options = {}) {
	if (options.version === undefined)
		options.version = DotaData.NewestVersion;
	this.Meta = { "ID": heroId,
				  "Label": options.label || "",
				  "Team": options.team || undefined,
				  "Dead": options.dead || false,
				  "Gold": Number.parseInt(options.gold) || 625 };
	this.Base = new AttributesObject(heroId, {
		version: options.version,
		level: Math.min(Math.max(options.level, 1), 25)
	})
	this.Base._heroRef = this
	this.Item = {};
	this.Buff = {};
	this.Items = [];
	this.Buffs = [];
	if (Array.isArray(options.items))
		for (let item of options.items)
			if (item instanceof ItemObject)
				this.addItem(item)
			else if (typeof item === "string")
				this.addItem(new ItemObject(item, {version: options.version}))
			else if (item && "Id" in item)
				this.addItem(new ItemObject(item.Id, item));
	this.addAbilities(options.abilities);
	if (Array.isArray(options.buffs))
		for (let buff of options.buffs)
			if (buff instanceof BuffObject)
				this.addBuff(buff)
			else if (typeof buff === "string")
				this.addBuff(new BuffObject(buff, {version: options.version}))
			else if (buff && "Id" in buff)
				this.addBuff(new BuffObject(buff.Id, buff));

	this.LevelChange();
	this.ItemChange();
	this.AbilityChange();
	this.BuffChange();
}

/**
 * Gets the string representation of this instance
 * @returns {string} String representation
 */
HeroInstance.prototype.toString = function HeroToString() {
	return "[HeroInstance "+this.Meta.ID+"]";
}

HeroInstance.prototype.copy = function(teamless) {
	let opts = {
		version: this.Base.Version,
		level: this.Base.Level,
		label: this.Meta.Label,
		team: teamless ? undefined : this.Meta.Team,
		dead: this.Meta.Dead,
		gold: this.Meta.Gold,
	}
	let items = [], abilities = {}, buffs = [];
	for (let i of this.Items)
		items.push(i.serialize())

	for (let a in this.AbilityIds) {
		abilities[a] = this.AbilityIds[a].serialize()
	}
	for (let b of this.Buffs) {
		if (b.Class !== "Aura")
			buffs.push(b.serialize())
	}
	opts.items = items;
	opts.abilities = abilities;
	opts.buffs = buffs;
	let clone = new HeroInstance(this.Meta.ID, opts);
	return clone;
}

/**
 * Adds a data handler
 * @param {object} handler Handler data
 * @param {string} handler.name Name of the handler
 * @param {string[]} handler.binds Other handlers that trigger
 * @param {function} handler.handler Handling function
 */
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

/**
 * Propagates stat change to array IDs
 * @param {string[]} propagationIdList (description)
 */
HeroInstance.prototype.propagateChange = function (propagationIdList) {
	if (!Array.isArray(propagationIdList))
		return;
	if (!propagationIdList.length)
		return;
	var propagation = [];
	for ( var propagationId of propagationIdList ) {
		propagation.concat(this[propagationId].binds);
		this[propagationId]();
	}
	this.propagateChange(propagation);
}

// Convenience function for constructor
HeroInstance.prototype.addAbilities = function(abilityOptions) {
	let test;
	this.Ability = {};
	this.Abilities = [];
	this.AbilityIds = {};

	for (let heroProp in this.Base)
		if (test = /Ability(\d+)/.exec(heroProp)) {
			let props = {version: this.Base.Version}, abilityProps
			if (abilityOptions && abilityOptions[this.Base[heroProp]])
				abilityProps = abilityOptions[this.Base[heroProp]]
			if (typeof abilityProps === "number")
				props.level = abilityProps
			else if (abilityProps instanceof Object)
				for (let key in abilityProps)
					props[key] = abilityProps[key]
			let abilityInstance = new AbilityObject(this.Base[heroProp], props);
			abilityInstance._heroRef = this;
			this.Abilities.splice(parseInt(test[1])-1, 0, abilityInstance)
			this.AbilityIds[this.Base[heroProp]] = abilityInstance;
			abilityInstance.addTeammate(this);
			for (let teammate of this.getTeammates())
				abilityInstance.addTeammate(teammate);
		}
}

HeroInstance.prototype.delete = function() {
	let Items = this.Items,
		Abilities = this.Abilities,
		Buffs = this.Buffs;
	for (let i = Items.length - 1; i >= 0; i--) {
		let item = Items[i];
		if (item !== undefined)
			item.delete()
	}
	for (let i = Abilities.length - 1; i >= 0; i--) {
		let ability = Abilities[i];
		if (ability !== undefined)
			ability.delete()
	}
	for (let i = Buffs.length - 1; i >= 0; i--) {
		let buff = Buffs[i];
		if (buff !== undefined)
			buff.delete()
	}
}

// Adds an item to the hero
// item        - (ItemInstance)
// forceInsert - circumvents max item limit
// returns -1 if failed
// returns index if success
HeroInstance.prototype.addItem = function (item, forceInsert) {
	if (this.Items.length >= 6 && !forceInsert) {
		return false;
	}
	var index = this.Items.push(item);
	item._heroRef = this;
	item.addTeammate(this);
	if (this.Total)
		this.ItemChange();
	for (var teammate of this.getTeammates())
		item.addTeammate(teammate)
	return index;
}

/** removes item from a hero
* @param item {integer} - removes item at index
* @param item {ItemObject} - removes ItemObject
*/
HeroInstance.prototype.removeItem = function (item) {
	if (Number.isInteger(item)) {
		this.Items[item].delete()
		this.ItemChange();
	}
	else if (item instanceof ItemObject) {
		item.delete()
		this.ItemChange();
	}
}

// adds a buff to hero
// override flag removes existing buff with same ID
// method:
// undefined 	- append the buff
// "override"	- change the existing buff
// "leave"		- leave if buff with same ID already exists
HeroInstance.prototype.addBuff = function (buff, method) {
	if (!(buff instanceof BuffObject))
		throw "Attempting to add invalid buff "+buff;
	else if (method === "override" && this.Total)
		this.removeBuff(buff.ID)
	else if (method === "leave" && this.getBuffIds(buff.ID).length > 0)
		return;

	this.Buffs.push(buff)
	buff._heroRef = this;
	if (this.Total)
		this.BuffChange();
}

HeroInstance.prototype.removeBuff = function(buff) {
	if (typeof buff === "string") {
		let updateFlag = false;
		for (let buffObj of this.Buffs)
			if (buff === buffObj.ID) {
				buffObj.delete()
				updateFlag = true;
			}

		if (this.Total && updateFlag)
			this.BuffChange()
	}
	else if (this.Buffs.includes(buff)) {
		buff.delete()
		if (this.Total)
			this.BuffChange()
		return
	}
}

/**
 * Removes references to StatObject in the hero
 */
HeroInstance.prototype.remove = function(statInstance) {
	if (statInstance._heroRef !== this)
		return
	statInstance._heroRef = undefined
	if (statInstance instanceof ItemObject) {
		this.Items.splice(this.Items.indexOf(statInstance), 1);
		this.ItemChange()
	}
	else if (statInstance instanceof BuffObject && this.Buffs.includes(statInstance)) {
		this.Buffs.splice(this.Buffs.indexOf(statInstance), 1)
		this.BuffChange()
	}
}

HeroInstance.prototype.getBuffIds = function(buffId) {
	var list = [];
	for (var buff of this.Buffs)
		if (buff.ID == buffId)
			list.push(buff);
	return list;
}

// Handles team changes in hero table
HeroInstance.prototype.teamChange = function(newTeammates, removedTeammates) {
	for (var removedTeammate of removedTeammates) {
		for (var item of removedTeammate.Items)
			item.removeTeammate(this)
		for (var ability of removedTeammate.Abilities)
			ability.removeTeammate(this)
	}

	for (var newTeammate of newTeammates) {
		for (var item of newTeammate.Items)
			item.addTeammate(this)
		for (var ability of newTeammate.Abilities)
			ability.addTeammate(this)
	}
}

// Overwritten when hero instance is inserted into a table
HeroInstance.prototype.updateTable = function () {}
HeroInstance.prototype.getTeammates = function () { return []; }

HeroInstance.addHandler({
	name: "LevelChange",
	binds: [],
	handler: function(lvl){
		/*if (lvl) {
			this.Meta.Level = lvl;
		}
		this.Base.StrengthFloat = this.Raw.StrengthBase + this.Raw.StrengthGain * (this.Meta.Level-1);
		this.Base.Strength = Math.round(this.Base.StrengthFloat);
		this.Base.AgilityFloat = this.Raw.AgilityBase + this.Raw.AgilityGain * (this.Meta.Level-1);
		this.Base.Agility = Math.round(this.Base.AgilityFloat);
		this.Base.IntelligenceFloat = this.Raw.IntelligenceBase + this.Raw.IntelligenceGain * (this.Meta.Level-1);
		this.Base.Intelligence = Math.round(this.Base.IntelligenceFloat);
		this.Base.Armor = this.Raw.Armor + this.Base.Agility * this.Raw.ArmorPerAgility;
		this.Base.Health = this.Raw.Health + this.Base.Strength * this.Raw.HealthPerStrength;
		this.Base.HealthRegeneration = this.Raw.HealthRegeneration + this.Base.Strength * 0.03;
		this.Base.Mana = this.Raw.Mana + this.Base.Intelligence * this.Raw.ManaPerIntelligence;
		this.Base.ManaRegeneration = this.Raw.ManaRegeneration + this.Base.Intelligence * 0.04;
		let primaryStat = 0;
		if ( this.Raw.Type == "Strength" )
			primaryStat = this.Base.Strength;
		else if ( this.Raw.Type == "Agility" )
			primaryStat = this.Base.Agility;
		else if ( this.Raw.Type == "Intelligence" )
			primaryStat = this.Base.Intelligence;
		this.Base.DamageMin = this.Raw.DamageMin + primaryStat;
		this.Base.DamageMax = this.Raw.DamageMax + primaryStat;*/
		return {
			Strength: this.Base.Strength,
			Agility: this.Base.Agility,
			Intelligence: this.Base.Intelligence,
		}
	}
});

HeroInstance.addHandler({
	name: "ItemChange",
	binds: [],
	handler: function() {
		let a = { "Strength": 0, "Agility": 0, "Intelligence": 0,
			"MovementSpeed": 0, "MovementSpeedPercentage": 0,
			"Armor": 0, "MagicalResistance": 0, "Evasion": 0,
			"Health":0, "HealthRegeneration":0, "Mana": 0, "ManaRegenerationFlat": 0,
			"ManaRegenerationPercentage": 0, "Damage": 0, "AttackSpeed": 0,
			"VisionDay": 0, "VisionNight": 0, "Cost": 0, "HasAghanims": null,
			"MagicalAmplification": 0, "CooldownReduction": 0 },
			f = {};
		for (let item of this.Items) {
			if (item.Family) {
				if (!f[item.Family.Name])
					f[item.Family.Name] = item.Family;
				else if (f[item.Family.Name].Level < item.Family.Level)
					f[item.Family.Name] = item.Family;
			}
			for (let prop in a)
				a[prop] = PropertyProcessor.calculate(prop, a[prop], item[prop]);
		}

		for (let familyName in f) {
			let family = f[familyName];
			for (let prop in family.Stats)
				a[prop] = PropertyProcessor.calculate(prop, a[prop], family.Stats[prop]);
		}
		return this.Item = a;
	}
});

// Calculation to sum up base stats
HeroInstance.addHandler({
	name: "AbilityChange",
	binds: ["LevelChange"],
	handler: function() {
		var a = PropertyProcessor.StatTemplate()
		for (var ability of this.Abilities) {
			if (ability.Level < 1)
				continue;
			for (var prop in a)
				a[prop] = PropertyProcessor.calculate(prop, a[prop], ability[prop]);
		}
		return this.Ability = a;
	}
});

HeroInstance.addHandler({
	name: "BuffChange",
	binds: [],
	handler: function() {
		let aggregated = { "Strength": 0, "Agility": 0, "Intelligence": 0, "MovementSpeed": 0,
				"AttackType": null, "ProjectileSpeed": null, "HasAghanims": null };
		for (let buff of this.Buffs)
			for (let prop in aggregated)
				aggregated[prop] = PropertyProcessor.calculate(prop, aggregated[prop], buff[prop]);
		return this.Buff = aggregated;
	}
})

HeroInstance.addHandler({
	name: "PreTotalChange",
	binds: ["LevelChange", "ItemChange", "AbilityChange", "BuffChange"],
	handler: function() {
		let aggregated = {};
		aggregated.StrengthBonus = this.Item.Strength + this.Ability.Strength + this.Buff.Strength;
		aggregated.Strength = this.Base.Strength + aggregated.StrengthBonus;
		aggregated.AgilityBonus = this.Item.Agility + this.Ability.Agility + this.Buff.Agility;
		aggregated.AgilityFloat = this.Base.AgilityFloat + aggregated.AgilityBonus;
		aggregated.Agility = this.Base.Agility + aggregated.AgilityBonus;
		aggregated.IntelligenceBonus = this.Item.Intelligence + this.Ability.Intelligence + this.Buff.Intelligence;
		aggregated.Intelligence = this.Base.Intelligence + aggregated.IntelligenceBonus;
		aggregated.MovementSpeedBase = this.Base.MovementSpeed + this.Item.MovementSpeed + this.Ability.MovementSpeed + this.Buff.MovementSpeed;
		aggregated.HasAghanims = this.Buff.HasAghanims || this.Item.HasAghanims || false;
		aggregated.AttackType = this.Ability.AttackType || this.Buff.AttackType || this.Base.AttackType;
		return this.Total = aggregated;
	}
})

HeroInstance.addHandler({
	name: "PostItemChange",
	binds: ["PreTotalChange"],
	handler: function() {
		let a = { "Range": 0 };
		for (let buff of this.Items)
			for (let prop in a)
				a[prop] = PropertyProcessor.calculate(prop, a[prop], buff[prop]);

		this.Item.Range = a.Range;
		return this.Item
	}
});

HeroInstance.addHandler({
	name: "PostAbilityChange",
	binds: ["PreTotalChange"],
	handler: function() {
		let aggregated = PropertyProcessor.StatTemplate(true);
		for (let ability of this.Abilities) {
			if (ability.Level < 1)
				continue;
			for (let prop in aggregated)
				aggregated[prop] = PropertyProcessor.calculate(prop, aggregated[prop], ability[prop]);
		}
		return this.Ability = aggregated
	}
});


HeroInstance.addHandler({
	name: "PostBuffChange",
	binds: ["PreTotalChange"],
	handler: function() {
		let aggregated = PropertyProcessor.StatTemplate(true);
			f = {};
		for (let buff of this.Buffs) {
			if (buff.Family)
				if (!f[buff.Family.Name])
					f[buff.Family.Name] = buff.Family;
				else if (f[buff.Family.Name].Level < buff.Family.Level)
					f[buff.Family.Name] = buff.Family;
			for (let prop in aggregated)
				aggregated[prop] = PropertyProcessor.calculate(prop, aggregated[prop], buff[prop]);
		}
		for (let familyName in f) {
			let family = f[familyName];
			for (let prop in family.Stats)
				aggregated[prop] = PropertyProcessor.calculate(prop, aggregated[prop], family.Stats[prop]);
		}
		return this.Buff = aggregated
	}
})

HeroInstance.addHandler({
	name: "TotalChange",
	binds: ["LevelChange", "PostAbilityChange", "PostBuffChange", "PostItemChange"],
	handler: function() {
		// EUGH, there has to be a better way
		let aggregated = this.Total;
		aggregated.MovementSpeedPercentage = this.Item.MovementSpeedPercentage +	this.Ability.MovementSpeedPercentage + this.Buff.MovementSpeedPercentage;
		let movementSpeed = Math.max(aggregated.MovementSpeedBase * (1 + aggregated.MovementSpeedPercentage), 100);
		movementSpeed = this.Ability.MovementSpeedUncapped ? movementSpeed : Math.min(movementSpeed, 522)
		aggregated.Haste = this.Buff.Haste;
		aggregated.MovementSpeed = Math.max(this.Buff.Haste, movementSpeed);
		aggregated.ArmorBase =	this.Base.ArmorBase +
								aggregated.AgilityFloat * this.Base.ArmorPerAgility
		aggregated.ArmorBonus = this.Item.Armor +
								this.Ability.Armor +
								this.Buff.Armor;
		aggregated.Armor = aggregated.ArmorBase + aggregated.ArmorBonus;
		aggregated.Evasion = this.Item.Evasion + (1-this.Item.Evasion) * this.Ability.Evasion;
		aggregated.Evasion = aggregated.Evasion + (1-aggregated.Evasion) * this.Buff.Evasion;
		let magicalResistance = this.Base.MagicalResistance + (1 - this.Base.MagicalResistance) * this.Item.MagicalResistance;
		magicalResistance += (1 - magicalResistance) * this.Ability.MagicalResistance;
		aggregated.MagicalResistance = (1 - magicalResistance) * this.Buff.MagicalResistance;
		aggregated.HealthBase = this.Base.HealthBase +
								aggregated.Strength * this.Base.HealthPerStrength +
								this.Item.Health +
								this.Ability.Health +
								this.Buff.Health;
		aggregated.Health = aggregated.HealthBase * (1 + this.Buff.HealthPercentage);
		aggregated.HealthRegenerationFlat = this.Base.HealthRegenerationBase +
											aggregated.Strength * this.Base.HealthRegenerationPerStrength +
											this.Item.HealthRegeneration +
											this.Ability.HealthRegeneration +
											this.Buff.HealthRegeneration;
		aggregated.HealthRegeneration = aggregated.HealthRegenerationFlat
		aggregated.Mana	=	this.Base.ManaBase +
							aggregated.Intelligence * this.Base.ManaPerIntelligence +
							this.Ability.Mana +
							this.Buff.Mana +
							this.Item.Mana;
		aggregated.ManaRegenerationBase = 	this.Base.ManaRegenerationBase +
											aggregated.Intelligence * this.Base.ManaRegenerationPerIntelligence +
											this.Item.ManaRegenerationBase +
											this.Ability.ManaRegenerationBase +
											this.Buff.ManaRegenerationBase;
		aggregated.ManaRegenerationPercentage =	this.Item.ManaRegenerationPercentage +
												this.Ability.ManaRegenerationPercentage +
												this.Buff.ManaRegenerationPercentage;
		aggregated.ManaRegenerationFlat =	this.Item.ManaRegenerationFlat +
											this.Ability.ManaRegenerationFlat +
											this.Buff.ManaRegenerationFlat;
		aggregated.ManaRegeneration =	aggregated.ManaRegenerationBase * (1 + aggregated.ManaRegenerationPercentage) +
										aggregated.ManaRegenerationFlat;
		aggregated.DamageBaseMin =	this.Base.DamageMin +
									aggregated[this.Base.Type] +
									this.Ability.DamageBase +
									this.Buff.DamageBase;
		aggregated.DamageBaseMax =	this.Base.DamageMax +
									aggregated[this.Base.Type] +
									this.Ability.DamageBase +
									this.Buff.DamageBase;
		aggregated.DamageBase = Math.floor((aggregated.DamageBaseMin + aggregated.DamageBaseMax) / 2);
		aggregated.DamageBonus =	this.Item.Damage +
									this.Ability.Damage +
									this.Buff.Damage +
									Math.trunc(aggregated.DamageBase * this.Buff.DamagePercentage);
		aggregated.DamageTotal =	aggregated.DamageBase +
									aggregated.DamageBonus;
		aggregated.DamageBonus = Math.trunc(aggregated.DamageBonus + this.Buff.DamageReductionPercentage * aggregated.DamageTotal);
		aggregated.Damage = aggregated.DamageBase + aggregated.DamageBonus;
		aggregated.AttackRate = this.Base.AttackRate +
								this.Ability.AttackRate +
								this.Buff.AttackRate;
		aggregated.AttackSpeed = Math.max(Math.min(100 +
													aggregated.Agility +
													this.Item.AttackSpeed +
													this.Ability.AttackSpeed +
													this.Buff.AttackSpeed, 600), 20);
		aggregated.Range =	this.Base.Range +
							this.Ability.Range +
							this.Item.Range +
							this.Buff.Range;
		aggregated.VisionDay = this.Base.VisionDaytime;
		aggregated.VisionNight =	this.Base.VisionNighttime +
									this.Ability.VisionNight +
									this.Item.VisionNight +
									this.Buff.VisionNight;
		aggregated.Cost = this.Item.Cost;
		aggregated.ProjectileSpeed = this.Buff.ProjectileSpeed || this.Base.ProjectileSpeed;
		aggregated.MagicalAmplification =	this.Base.Intelligence * this.Base.MagicalAmpPerIntelligence +
											this.Item.MagicalAmplification;
		let cooldownReduction = 1 - this.Buff.CooldownReduction
		aggregated.CooldownReduction = cooldownReduction - cooldownReduction * this.Item.CooldownReduction;
		aggregated.ManaCostReduction = this.Buff.ManaCostReduction;
		aggregated.Revealed = this.Buff.Revealed;
		aggregated.Invisible = this.Buff.Invisible || this.Ability.Invisible;

		this.Total = aggregated;
	}
});

HeroInstance.addHandler({
	name: "PostTotalUpdate",
	binds: ["TotalChange"],
	handler: function() {
		this.updateTable();
		for (var item of this.Items)
			item.updateDisplay()
		for (var ability of this.Abilities) {
			if (ability.UpdateExternals)
				ability.updateEmittedBuffs()
			ability.updateDisplay()
		}
		for (var buff of this.Buffs)
			buff.updateDisplay()
	}
});







