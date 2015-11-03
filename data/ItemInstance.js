
// ItemInstance
// Helper object for HeroInstance
function ItemInstance(itemId, properties) {
	properties = properties || {};
	var item = DotaData.getItemProperties(itemId, properties.Version);
	
	Object.defineProperty(this, "ID", {value: itemId});
	Object.defineProperty(this, "displayElement", {writable: true});
	Object.defineProperty(this, "chargeElement", {writable: true});
	Object.defineProperty(this, "dynamicElements", {writable: true, value: {}});
	Object.defineProperty(this, "boundDelete", {writable: true});
	Object.defineProperty(this, "boundUpdate", {writable: true});
	Object.defineProperty(this, "heroRef", {writable: true});
	
	for (var prop in item) {
		var value = item[prop];
		if (value instanceof Function) {
			Object.defineProperty(this, prop, {
				get: value,
				enumerable: true
			});
		}
		else {
			this[prop] = value;	
		}
	}
	if (properties.charges && this.Charges) {
		this.Charges = properties.charges;	
	}
}

// Cloning method
ItemInstance.prototype.clone = function () {
	var props = { version: this.Version };
	if (this.Charges) props.charges = this.Charges;
	return new ItemInstance(this.ID, props);
}

ItemInstance.prototype.delete = function () {
	if (this.displayElement)
		this.displayElement.parentElement.removeChild(this.displayElement);
	if (this.boundDelete)
		this.boundDelete();
}

// Checks if all elements of array are valid ItemInstance objects
ItemInstance.isValidArray = function( itemInstanceArray ) {
	if (!Array.isArray(itemInstanceArray))
		throw itemInstanceArray+" is not a valid array";
	for (var item of itemInstanceArray) 
		if (!item instanceof ItemInstance) 
			throw "Object " + item + " is not an ItemInstance object";
	return itemInstanceArray;
}

ItemInstance.prototype.toString = function () {
	return "[ItemInstance "+this.ID+"]";
}

// creates and returns an element to display in the item container 
ItemInstance.prototype.createDisplayElement = function() {
	if (this.displayElement)
		return this.displayElement;
	
	var div = document.createElement("div");
	div.className = "item-display";
	div.style.backgroundImage = "url(images/items/" + this.ID + ".png)";
	
	if (typeof this.Charges === "number") {
		var chargeElement = document.createElement("span");
		chargeElement.textContent = this.Charges;
		chargeElement.className = "item-display-charges";
		this.chargeElement = chargeElement;
		div.appendChild(chargeElement);
	}
	var deleteButton = document.createElement("button");
		deleteButton.className = "item-display-delete";
		deleteButton.onclick = this.delete.bind(this);
		div.appendChild(deleteButton);
	
	var hidden = document.createElement("div");
		hidden.className = "item-display-options";

	this.populateOptionElement(hidden);
	div.appendChild(hidden);
	
	this.displayElement = div;
	return div;
}

ItemInstance.prototype.populateOptionElement = function(el) {
	var h1 = document.createElement("h1");
		h1.textContent = this.Name;
	el.appendChild(h1);
	
	// why did it have to turn out like this
	if ("Charges" in this) {
		var chargeLabel = document.createElement("span");
		chargeLabel.textContent = "Charges:";
		chargeLabel.style.textAlign = "right";
		chargeLabel.style.padding = "3px";
		chargeLabel.style.width = "50px";
		el.appendChild(chargeLabel);
		
		var chargeInput = document.createElement("input");
		chargeInput.style.width = "3em";
		chargeInput.value = this.Charges;
		chargeInput.min = 0;
		chargeInput.max = this.ChargesMax || 1000;
		chargeInput.type = "number";
		chargeInput.className = "mini-spinner";
		chargeInput.onchange = (function(e,u){
			this.Charges = e.target.value;
			this.updateDisplayElement();
			this.boundUpdate();
		}).bind(this);
		el.appendChild(chargeInput);
		
		el.appendChild(document.createElement("br"));
	}
	
	var statOrder = ["Strength", "Agility", "Intelligence", "Health", "Mana",
		"HealthRegeneration", "ManaRegenerationPercentage", "ManaRegeneration",
		"Damage", "AttackSpeed", "MovementSpeed", "MovementSpeedPercentage",
		"MagicalResistance", "Evasion", "Armor"], valuePool = {};
		
	for (var i = 0, stat; i <= statOrder.length; stat=statOrder[i++]) {
		if (!this[stat] && (!this.Family || !this.Family.Stats[stat]))
			continue;
		
		if (this.Family && this.Family.Stats[stat])
			valuePool[stat] = this.Family.Stats[stat];
		else
			valuePool[stat] = this[stat];
	}
	
	for (var stat in valuePool) {
		var propDesc = Object.getOwnPropertyDescriptor(this, stat),
			readable = DotaData.statToReadable(stat, valuePool[stat]),
			valueLabel = document.createElement("span");
			valueLabel.className = "item-display-options value";
		if (readable.isPercentage)
			valueLabel.title = (valuePool[stat] * this.heroRef.Total[readable.baseName+"Base"]).toFixed(2);
		if (valuePool[stat] < 0) valueLabel.classList.add("negative");
			valueLabel.textContent = readable.value;
		el.appendChild(valueLabel);
		var spanLabel = document.createElement("span");
			spanLabel.className = "item-display-options label";
			spanLabel.textContent = readable.key;
		if (propDesc && propDesc.get) {
			spanLabel.classList.add("dynamic");
			this.dynamicElements[stat] = valueLabel;
		}
		el.appendChild(spanLabel);
		el.appendChild(document.createElement("br"));
	}
}

ItemInstance.prototype.updateDisplayElement = function () {
	if (!this.displayElement)
		return;
	if (this.chargeElement)
		this.chargeElement.textContent = this.Charges;	
	for (var stat in this.dynamicElements) {
		var readable = DotaData.statToReadable(stat, this[stat]);
		this.dynamicElements[stat].textContent = readable.value;
		if (readable.isPercentage)
			this.dynamicElements[stat].title = (this[stat] * this.heroRef.Total[readable.baseName+"Base"]).toFixed(2);
	}	
}
