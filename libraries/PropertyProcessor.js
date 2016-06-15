
PropertyProcessor = {};
PropertyProcessor.types = {}
PropertyProcessor.properties = {
	"Evasion": "diminishing",
	"MagicalResistance": "diminishing",
	"ProjectileSpeed": "override",
	"AttackType": "override",
	"HasAghanim": "contains"
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

// calculating sums for almost everything
PropertyProcessor.addType("number",
	function(oldVal, newVal) {
		return oldVal + newVal
});

// evasion, magic resistance
PropertyProcessor.addType("diminishing",
	function(oldVal, newVal) {
		return oldVal + (1 - oldVal) * newVal
})

// used for melee/range overrides
PropertyProcessor.addType("override",
	function(oldVal, newVal) {
		return newVal
})

// Used for Aghanim's check
PropertyProcessor.addType("contains",
	function(oldVal, newVal) {
		return oldVal || newVal
})

