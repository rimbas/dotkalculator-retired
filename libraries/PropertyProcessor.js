
// Utility library for property calculation in hero stats

PropertyProcessor = {};
PropertyProcessor.types = {}
PropertyProcessor.properties = {
	"Evasion": "diminishing",
	"MagicalResistance": "diminishing",
	"ProjectileSpeed": "override",
	"AttackType": "override",
	"HasAghanims": "contains",
	"CooldownReduction": "diminishing",
	"ManaCostReduction": "diminishing",
	"Haste": "higher",
	"Invisible": "contains",
	"Revealed": "contains",
	"MovementSpeedUncapped": "contains",
}

/**
 * Unified function to handle property application
 * @prop {Object} newobj New instance of Item/Ability/Buff
 * @prop {Object} dataobj Data object with template values
 */
PropertyProcessor.applyDataProperties = function applyDataProps(newobj, dataobj) {
	let meta = dataobj.Meta || { "Wrap": [] }
	for (let prop in dataobj) {
		if (prop == "Meta")
			continue;

		let value = dataobj[prop];
		if (PropertyProcessor.autoPropertyCheck(prop, value, dataobj)) {
			if (value instanceof Function)
				Object.defineProperty(newobj, prop, { get: value, enumerable: true });
			else if (Array.isArray(value))
				Object.defineProperty(newobj, prop, {
					get: function propertyArrayWrapper() {
						return value[this.Level - 1];
					},
					enumerable: true
				});
			else
				Object.defineProperty(newobj, prop, { value: value, enumerable: true, writable: false });
		}
		else {
			Object.defineProperty(newobj, prop, { value: value, enumerable: true, writable: true });
		}
	}
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
	function(oldVal, newVal) {
		return oldVal + newVal
});

/**
 * Diminishing return percentage calculation
 */
PropertyProcessor.addType("diminishing",
	function(oldVal, newVal) {
		return oldVal + (1 - oldVal) * newVal
})

/**
 * Overriding values
 */
PropertyProcessor.addType("override",
	function(oldVal, newVal) {
		return newVal
})

/**
 * Single needed truth detection
 */
PropertyProcessor.addType("contains",
	function(oldVal, newVal) {
		return oldVal || !!newVal
})

/**
 * Highest value selection
 */
PropertyProcessor.addType("higher",
	function(oldVal, newVal) {
		return Math.max(oldVal, newVal)
})
