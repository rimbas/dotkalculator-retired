
// Utility library for property calculation in hero stats

PropertyProcessor = {};
PropertyProcessor.types = {}
PropertyProcessor.properties = {
	"Evasion": "diminishing",
	"MagicalResistance": "diminishing",
	"ProjectileSpeed": "override",
	"AttackType": "override",
	"HasAghanims": "contains"
}

/**
 * Unified function to handle property application
 */
PropertyProcessor.applyDataProperties = function applyDataProps(newobj, dataobj) {
	for (let prop in dataobj) {
		let value = dataobj[prop];
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
			Object.defineProperty(newobj, prop, { value: value, enumerable: true, writable: true });
	}
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

