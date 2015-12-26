// HTML element helper functions

ElementHelper = {};

// object - ItemInstance, AbilityInstance, BuffInstance
ElementHelper.createDetailedTooltip = function ( object ) {
	var el = document.createElement("div"),
		h1 = document.createElement("h1");
	el.className = "item-tooltip"
	h1.textContent = object.Name || object.ID;
	el.appendChild(h1);
	
	if ("Level" in object && !object.emitterRef && !object.LockedLevel) {
		var levelLabel = document.createElement("span");
		levelLabel.textContent = "Level:";
		levelLabel.style.textAlign = "right";
		//levelLabel.style.padding = "3px";
		levelLabel.style.width = "50px";
		el.appendChild(levelLabel);

		var levelInput = document.createElement("input");
		levelInput.style.width = "3em";
		levelInput.value = object.Level;
		levelInput.min = 0;
		levelInput.max = object.LevelMax;
		levelInput.type = "number";
		levelInput.className = "mini-spinner";
		levelInput.onchange = (function(e,u){
			object.Level = Number.parseInt(e.target.value);
			object.update()
		})
		el.appendChild(levelInput);

		el.appendChild(document.createElement("br"));
	}
	
	if ("Charges" in object && !object.LockedCharges) {
		var chargeLabel = document.createElement("span");
		if (object.ChargesSemantic)
			chargeLabel.textContent = object.ChargesSemantic.toString() + ":";
		else if (object instanceof AbilityInstance || object instanceof BuffInstance)
			chargeLabel.textContent = "Stacks:";
		else
			chargeLabel.textContent = "Charges:";
		chargeLabel.style.textAlign = "right";
		chargeLabel.style.width = "50px";
		el.appendChild(chargeLabel);
		
		var chargeInput = document.createElement("input");
		chargeInput.style.width = "3em";
		chargeInput.value = object.Charges;
		chargeInput.min = 0;
		chargeInput.max = object.ChargesMax || 1000;
		chargeInput.type = "number";
		chargeInput.className = "mini-spinner";
		chargeInput.onchange = (function(e,u) {
			object.Charges = Number.parseInt(e.target.value);
			object.update()
		})
		el.appendChild(chargeInput);
		
		el.appendChild(document.createElement("br"));
	}
	
	var statOrder = ["Strength", "Agility", "Intelligence", "Health", "Mana",
		"HealthRegeneration", "ManaRegenerationPercentage", "ManaRegenerationFlat",
		"Damage", "AttackSpeed", "MovementSpeed", "MovementSpeedPercentage",
		"MagicalResistance", "Evasion", "Armor", "AttackRate"], 
		statValues = {};
	
	for (var stat of statOrder)
		if (typeof object[stat] !== "undefined")
			statValues[stat] = object[stat];
	
	// handler for ItemInstance special stats
	if (object.Family)
		for (var stat in object.Family.Stats)
			statValues[stat] = object.Family.Stats[stat]
	
	for (var stat in statValues) {
		var readable = DotaData.statToReadable(stat, statValues[stat]),
			valueLabel = document.createElement("span");
			valueLabel.className = "item-display-options value";
			object.dynamicElements[stat] = valueLabel;
		if (readable.isPercentage)
			valueLabel.title = (statValues[stat] * object.heroRef.Total[readable.baseName]).toFixed(0);
		if (statValues[stat] < 0) valueLabel.classList.add("negative");
			valueLabel.textContent = readable.value;
		el.appendChild(valueLabel);
		var spanLabel = document.createElement("span");
			spanLabel.className = "item-display-options label";
			spanLabel.textContent = readable.key;
		el.appendChild(spanLabel);
		el.appendChild(document.createElement("br"));
	}
	
	if ( object.Warning ) {
		var warning = document.createElement("span")
		warning.className = "item-display-options warning"
		warning.textContent = object.Warning;
		el.appendChild(warning)
		el.appendChild(document.createElement("br"));
	}
	
	if ( object.Lore ) {
		var lore = document.createElement("span")
		lore.className = "item-display-options lore"
		lore.textContent = object.Lore
		el.appendChild(lore)
		el.appendChild(document.createElement("br"));
	}
	
	return el;
}

// Updates the HTML elements
ElementHelper.updateDisplayElements = function ( object ) {
	if (!object.displayElement)
		return;
	if (object.chargeElement)
		object.chargeElement.textContent = object.Charges;
	if (object.levelElement)
		object.levelElement.textContent = DotaData.numericToRoman(object.Level);
	for (var stat in object.dynamicElements) {
		var statValue = stat in object ? object[stat] : object.Family.Stats[stat];
		var readable = DotaData.statToReadable(stat, statValue);
		object.dynamicElements[stat].textContent = readable.value;
		if (readable.isPercentage)
			object.dynamicElements[stat].title = (statValue * object.heroRef.Total[readable.baseName+"Base"]).toFixed(2);
	}
}




