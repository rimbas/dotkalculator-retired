
// Utility library for property calculation in hero stats

PropertyProcessor = {};
PropertyProcessor.types = {}
PropertyProcessor.properties = {
	"Evasion": "Diminishing",
	"MagicalResistance": "Diminishing",
	"ProjectileSpeed": "Override",
	"AttackType": "Override",
	"HasAghanims": "Contains",
	"CooldownReduction": "Diminishing",
	"ManaCostReduction": "Diminishing",
	"Haste": "Higher",
	"Invisible": "Contains",
	"Revealed": "Contains",
	"MovementSpeedUncapped": "Contains",
}

/**
 * Unified function to handle property application
 * @prop {Object} newobj New instance of Item/Ability/Buff
 * @prop {Object} dataobj Data object with template values
 */
PropertyProcessor.applyDataProperties = function applyDataProperties(newobj, dataobj) {
	let deferredNewobj = newobj
	function applyProperty(baseobj, prop, value) {
		if (PropertyProcessor.autoPropertyCheck(prop, value, dataobj)) {
			if (value instanceof Function)
				Object.defineProperty(baseobj, prop, { get: value.bind(deferredNewobj), enumerable: true });
			else if (Array.isArray(value))
				Object.defineProperty(baseobj, prop, {
					get: function propertyArrayWrapper() {
						return value[this.Level - 1];
					},
					enumerable: true
				});
			else
				Object.defineProperty(baseobj, prop, { value: value, enumerable: true, writable: false });
		}
		else {
			Object.defineProperty(baseobj, prop, { value: value, enumerable: true, writable: true });
		}
	}
	let meta = dataobj.Meta || { "Wrap": [] }
	for (let prop in dataobj) {
		let value = dataobj[prop];
		applyProperty(newobj, prop, value)
	}

	if (dataobj.Family && dataobj.Family.Stats)
		for (let fprop in dataobj.Family.Stats)
			applyProperty(newobj.Family.Stats, fprop, dataobj.Family.Stats[fprop])

	if (dataobj.Action && dataobj.Action.Stats)
		for (let aprop in dataobj.Action.Stats)
			applyProperty(newobj.Action.Stats, aprop, dataobj.Action.Stats[aprop])
}

PropertyProcessor.autoPropertyCheck = function(prop, value, dataobj) {
	if (DotaData.Meta.StatAutoProperties.includes(prop))
		return true
	if (DotaData.Meta.TechnicalAutoProperties.includes(prop))
		return true
	if (dataobj.Meta && Array.isArray(dataobj.Meta.Wrap) && dataobj.Meta.Wrap.includes(prop))
		return true
	// Mostly hacks after this line
	if (prop == "Level" && value instanceof Function)
		return true
	return false
}

/**
 * Adds a type handler
 * @param {String} name Name of the type
 * @param {Function} handler Handler that takes <oldValue> <newValue> and returns processed value
 */
PropertyProcessor.addType = function(handlerName, handlerCallback) {
	PropertyProcessor.types[handlerName] = function(oldVal, newVal) {
		return newVal !== undefined ? handlerCallback(oldVal, newVal) : oldVal;
	}
}

/**
 * Add a definition how to handle a property
 */
PropertyProcessor.addProperty = function(propertyName, handlerName) {
	PropertyProcessor.properties[propertyName] = handlerName
}

/**
 * Calculates a new value based on the property name. Defaults to number
 */
PropertyProcessor.calculate = function(propName, oldVal, newVal) {
	if (propName in PropertyProcessor.properties)
		return PropertyProcessor.types[PropertyProcessor.properties[propName]](oldVal, newVal)
	return PropertyProcessor.types["number"](oldVal, newVal)
}

/**
 * Handler for summing things. Default handler.
 */
PropertyProcessor.addType("number",
	function ppNumber(oldVal, newVal) {
		return oldVal + newVal
});

/**
 * Diminishing return percentage calculation
 */
PropertyProcessor.addType("Diminishing",
	function ppDiminishing(oldVal, newVal) {
		return oldVal + (1 - oldVal) * newVal
})

/**
 * Overriding values
 */
PropertyProcessor.addType("Override",
	function ppOverride(oldVal, newVal) {
		return newVal
})

/**
 * Single needed truth detection
 */
PropertyProcessor.addType("Contains",
	function ppContains(oldVal, newVal) {
		return oldVal || !!newVal
})

/**
 * Highest value selection
 */
PropertyProcessor.addType("Higher",
	function ppdHigher(oldVal, newVal) {
		return Math.max(oldVal, newVal)
})


PropertyProcessor.StatTemplate = function statTemplateGenerator(extended) {
	if (extended)
		return {
			Agility: 0,
			Armor: 0,
			AttackRate: 0,
			AttackSpeed: 0,
			AttackType: null,
			Blind: 0,
			CooldownReduction: 0,
			Damage: 0,
			DamageBase: 0,
			DamagePercentage: 0,
			DamageReductionPercentage: 0,
			DamagePure: 0,
			DamageMagical: 0,
			Evasion: 0,
			HasAghanims: null,
			Haste: 0,
			Health: 0,
			HealthPercentage: 0,
			HealthRegeneration: 0,
			Intelligence: 0,
			Invisible: false,
			MagicalResistance: 0,
			Mana: 0,
			ManaCostReduction: 0,
			ManaRegenerationBase: 0,
			ManaRegenerationFlat: 0,
			ManaRegenerationPercentage: 0,
			MovementSpeed: 0,
			MovementSpeedPercentage: 0,
			MovementSpeedUncapped: false,
			ProjectileSpeed: null,
			Range: 0,
			Revealed: false,
			Strength: 0,
			VisionNight: 0,
		}
	return {
		Agility: 0,
		AttackType: null,
		HasAghanims: null,
		Intelligence: 0,
		MovementSpeed: 0,
		ProjectileSpeed: null,
		Strength: 0,
	}
}