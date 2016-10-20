
/**
 * UI helper library
 */

UIHelper = {}
UIHelper.windowList = document.getElementsByClassName("window");
UIHelper.defaultZ = 100;
UIHelper.topZ = UIHelper.defaultZ;
UIHelper.zIndexHandler = function zIndexHandler(event){
	let windows = UIHelper.windowList;
	for (let i = 0, w=windows[i]; i < windows.length; w = windows[++i])
		if (w.style.zIndex > this.style.zIndex)
			w.style.zIndex--;
	this.style.zIndex = UIHelper.topZ;
}
UIHelper.zIndexFocus = function zIndexFocus(element) {
	let windows = UIHelper.windowList;
	for (let i = 0, w=windows[i]; i < windows.length; w = windows[++i])
		if (w.style.zIndex > element.style.zIndex)
			w.style.zIndex--;
	element.style.zIndex = UIHelper.topZ;
}

UIHelper.versionSelectorTemplate = document.createElement("select")
UIHelper.tableSelectorTemplate = document.createElement("select")
UIHelper.tableSelectorList = document.getElementsByClassName("settings-table-selector")
UIHelper.headerElements = []

// Version selector template setup
{
	let versionIndex = [],
		versionTemplate = UIHelper.versionSelectorTemplate;
	versionTemplate.classList.add("settings-base", "settings-version-selector")
	for (let v in DotaData.Versions)
		versionIndex.push(v)
	versionIndex.sort()
	versionIndex.reverse()
	for (let v of versionIndex) {
		var option = document.createElement("option");
		option.text = v;
		versionTemplate.appendChild(option);
	}

	let tableTemplate = UIHelper.tableSelectorTemplate;
	tableTemplate.classList.add("settings-base", "settings-table-selector")
}

window.addEventListener("DOMContentLoaded", function UIElementInit(event) {
	UIHelper.WindowContainer = document.getElementById("window-list-container");
	UIHelper.pageHeader = document.getElementById("page-header-buttons");
	UIHelper.rebuildWindowZIndex();
});

document.addEventListener("HeroTableCreated", function heroTableCreate(event) {
	if (event.detail == null)
		throw "No detail supplied!";
	const template = UIHelper.tableSelectorTemplate,
		selectList = UIHelper.tableSelectorList;

	let option = document.createElement("option");
	option.label = event.detail.name;
	option.value = event.detail.ID;

	template.appendChild(option.cloneNode());
	for (let element of selectList)
		element.appendChild(option.cloneNode());
});

/**
 * @desc Recreates the css z-index for window elements
 */
UIHelper.rebuildWindowZIndex = function() {
	let windows = UIHelper.windowList;
	for (let i = 0, w=windows[i]; i < windows.length; w = windows[++i])
		w.style.zIndex = UIHelper.defaultZ + i;
	UIHelper.topZ = UIHelper.defaultZ + windows.length - 1;
}

/**
 * Creates an UI window with described options
 */
UIHelper.addWindow = function(options) {
	let win = document.createElement("div");
	win.classList.add("window");
	win.style.zIndex = ++UIHelper.topZ;
	win.style.left = "11px";
	win.style.top = "52px";
	win.style.display = "none";
	win.addEventListener("mousedown", UIHelper.zIndexHandler);
	if (options.windowID)
		win.id = options.windowID;

	let bar = document.createElement("div");
	bar.classList.add("drag-bar");
	bar.textContent = options.title || "New Window";
	win.appendChild(bar);

	let close = document.createElement("div");
	close.classList.add("drag-bar-close");
	close.addEventListener("click", function(e){win.style.display="none"});
	bar.appendChild(close)

	if (options.headerButton !== undefined || options.headerButtonText) {
		let button, inPlace;
		if (options.headerButton instanceof String)
			button = document.getElementById(headerButton), inPlace = true;
		else if (options.headerButton instanceof HTMLButtonElement)
			button = options.headerButton, inPlace = true;
		else
			button = document.createElement("button");

		button.textContent = options.headerButtonText;
		button.onclick = function(){
			UIHelper.zIndexFocus(win);
			win.style.display = win.style.display == "none" ? null : "none";
		};
		button.ondblclick = function(){
			win.style.left="11px";
			win.style.top="52px";
			win.style.display = null;
			UIHelper.zIndexFocus(win);
		};

		if (options.headerButton == true ) {
			let header = UIHelper.pageHeader,
				before = header.children[options.headerButtonPos];
			UIHelper.pageHeader.insertBefore(button, before);
		}
	}

	if (options.populationCallback)
		options.populationCallback(win)

	UIHelper.WindowContainer.appendChild(win)
	$(win).draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document",
	})
	return win
}

UIHelper.appendSettings = function(window, options) {
	if (!options) throw "No setting options supplied!";
	let wrapper = document.createElement("div")
	wrapper.classList.add("settings-wrapper")
	if (options.version) {
		let versionLabel = document.createElement("label")
		versionLabel.textContent = "Dota 2 version: ";
		versionLabel.classList.add("settings-label");
		wrapper.appendChild(versionLabel);
		var versionSelector = UIHelper.versionSelectorTemplate.cloneNode(true);
		wrapper.appendChild(versionSelector);
		wrapper.appendChild(document.createElement("br"))
	}
	if (options.table) {
		let versionLabel = document.createElement("label")
		versionLabel.textContent = "Target table: ";
		versionLabel.classList.add("settings-label");
		wrapper.appendChild(versionLabel);
		var tableSelector = UIHelper.tableSelectorTemplate.cloneNode(true);
		wrapper.appendChild(tableSelector);
		wrapper.appendChild(document.createElement("br"))
	}
	window.appendChild(wrapper)
	return {wrapper: wrapper, version: versionSelector, table: tableSelector};
}

/**
 * @desc Creates a display element for Item/Ability/Buff
 */
UIHelper.createDisplayElement = function(object) {
	if (object.displayElement)
		return object.displayElement;

	var div = document.createElement("div");
	object.displayElement = div;
	div.classList.add("item-display");
	if (object instanceof AbilityInstance || object instanceof BuffInstance)
		div.classList.add("ability");
	else if (object instanceof ItemInstance )
		div.classList.add("item");

	if (typeof object.Image == "string")
		div.style.backgroundImage = "url(images/abilities/" + object.Image + ".png)";
	else if (object instanceof ItemInstance)
		div.style.backgroundImage = "url(images/items/" + object.ID + ".png)";
	else
		div.style.backgroundImage = "url(images/abilities/" + object.ID + ".png)";

	if (typeof object.Level === "number") {
		var levelElement = document.createElement("span");
		levelElement.className = "item-display-levels";
		levelElement.textContent = DotaData.numericToRoman(object.Level);
		div.appendChild(levelElement);
		object.levelElement = levelElement;
	}

	if (typeof object.Charges === "number") {
		var chargeElement = document.createElement("span");
		chargeElement.textContent = object.Charges;
		chargeElement.className = "item-display-charges";
		object.chargeElement = chargeElement;
		div.appendChild(chargeElement);
	}

	if (object.Buff) {
		var activateButton = document.createElement("button");
		activateButton.className = "item-display-activate";
		activateButton.onclick = object.activate.bind(object);
		div.appendChild(activateButton);
	}

	if (object instanceof ItemInstance || object instanceof BuffInstance && object.Class != "Aura") {
		var deleteButton = document.createElement("button");
		deleteButton.className = "item-display-delete";
		deleteButton.onclick = object.delete.bind(object);
		div.appendChild(deleteButton);
	}

	div.appendChild(UIHelper.createDetailedTooltip(object));

	if (object.Hidden == true)
			object.displayElement.style.display = "none";

	div.ownerObject = object;

	return div;
}

// object - ItemInstance, AbilityInstance, BuffInstance
UIHelper.createDetailedTooltip = function ( object ) {
	var el = document.createElement("div"),
		h1 = el.appendChild(document.createElement("h1"));
	el.className = "item-tooltip"
	h1.textContent = object.Name || object.ID;

	if (object instanceof ItemInstance || object instanceof BuffInstance) {
		let v = h1.appendChild(document.createElement("div"));
		v.classList.add("label-version");
		v.textContent = "("+object.Version+")";
	}

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
		levelInput.min = typeof object.LevelMin === "number" ? object.LevelMin : 0;
		levelInput.max = object.LevelMax;
		levelInput.type = "number";
		levelInput.className = "mini-spinner";
		levelInput.onchange = (function(e,u){
			object.Level = Number.parseInt(e.target.value);
			if ("Charges" in object && "ChargesMax" in object)
				object.Charges = Math.min(object.Charges, object.ChargesMax);
			object.update()
		})
		el.appendChild(levelInput);

		el.appendChild(document.createElement("br"));
	}

	if ("Charges" in object && !object.emitterRef && !object.LockedCharges) {
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
		chargeInput.min = (typeof object.ChargesMin == "number") ? object.ChargesMin : 0;
		chargeInput.max = (typeof object.ChargesMax == "number") ? object.ChargesMax : 1000;
		chargeInput.type = "number";
		chargeInput.className = "mini-spinner";
		chargeInput.onchange = (function(e,u) {
			object.Charges = Number.parseInt(e.target.value);
			object.update()
		})
		el.appendChild(chargeInput);
		object.chargeInput = chargeInput

		el.appendChild(document.createElement("br"));
	}

	var statOrder = DotaData.Meta.StatAutoProperties;
		statValues = {};

	for (var stat of statOrder)
		if (typeof object[stat] !== "undefined")
			statValues[stat] = object[stat];

	// handler for ItemInstance special stats
	if (object.Family)
		for (var stat in object.Family.Stats)
			statValues[stat] = object.Family.Stats[stat]

	//for (var stat in statValues) {
	for (var stat of statOrder) {
		if (statValues[stat] === undefined)
			continue;
		var readable = DotaData.statToReadable(stat, statValues[stat]),
			valueLabel = el.appendChild(document.createElement("span"));
			valueLabel.className = "item-display-options value";
			object.dynamicElements[stat] = valueLabel;
		if (readable.isPercentage)
			valueLabel.title = (statValues[stat] * object.heroRef.Total[readable.baseName]).toFixed(0);
		if (readable.negativeOverride === undefined && statValues[stat] < 0)
			valueLabel.classList.add("negative");
		else if (readable.negativeOverride && statValues[stat] > 0)
			valueLabel.classList.add("negative");
		valueLabel.textContent = readable.value;
		var spanLabel = document.createElement("span");
			spanLabel.className = "item-display-options label";
			spanLabel.textContent = readable.key;
		el.appendChild(spanLabel);
		el.appendChild(document.createElement("br"));
	}

	if ( typeof object.Cooldown == "number" ) {
		let cooldown = document.createElement("span")
		cooldown.className = "item-display-options cooldown";
		cooldown.textContent = object.Cooldown;
		el.appendChild(cooldown)
		object.cooldownElement = cooldown;
		if (object.Level === 0)
			object.cooldownElement.style.display = "none"
	}

	if ( typeof object.ManaCost == "number" ) {
		let manacost = document.createElement("span")
		manacost.className = "item-display-options manacost";
		manacost.textContent = object.ManaCost;
		el.appendChild(manacost)
		object.manacostElement = manacost;
		if (object.Level === 0)
			object.manacostElement.style.display = "none"
	}

	if ( object.manacostElement || object.cooldownElement ) {
		let breaker = document.createElement("br");
		el.appendChild(breaker);
		if (object.manacostElement == undefined || object.cooldownElement == undefined)
			breaker.classList.add("single-mode")
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
UIHelper.updateDisplayElements = function ( object ) {
	if (!object.displayElement)
		return;
	if ("Hidden" in object)
		if (object.Hidden == true) {
			object.displayElement.style.display = "none"
			return;
		}
		else
			object.displayElement.style.display = ""
	if (object.Image)
		if (object instanceof ItemInstance)
			object.displayElement.style.backgroundImage = "url(images/items/" + object.Image + ".png)";
		else
			object.displayElement.style.backgroundImage = "url(images/abilities/" + object.Image + ".png)";
	if (object.chargeElement)
		object.chargeElement.textContent = object.Charges;
	if (object.chargeInput) {
		object.chargeInput.value = object.Charges;
		if (typeof object.ChargesMin == "number")
			object.chargeInput.min = object.ChargesMin;
		if (typeof object.ChargesMax == "number")
			object.chargeInput.max = object.ChargesMax;
	}

	if (object.levelElement)
		object.levelElement.textContent = DotaData.numericToRoman(object.Level);
	for (var stat in object.dynamicElements) {
		var statValue = stat in object ? object[stat] : object.Family.Stats[stat];
		var readable = DotaData.statToReadable(stat, statValue);
		var dynElement = object.dynamicElements[stat]
		dynElement.textContent = readable.value;
		if (readable.isPercentage)
			dynElement.title = (statValue * object.heroRef.Total[readable.baseName+"Base"]).toFixed(2);
		if (readable.negativeOverride === undefined)
			if (statValue < 0)
				dynElement.classList.add("negative");
			else
				dynElement.classList.remove("negative");
		else if (readable.negativeOverride)
			if (statValue > 0)
				dynElement.classList.add("negative");
			else
				dynElement.classList.remove("negative");
	}
	if (object.cooldownElement)
		if (object.Level === 0)
			object.cooldownElement.style.display = "none"
		else {
			object.cooldownElement.style.display = ""
			object.cooldownElement.textContent = object.Cooldown
		}
	if (object.manacostElement)
		if (object.Level === 0)
			object.manacostElement.style.display = "none"
		else {
			object.manacostElement.style.display = ""
			object.manacostElement.textContent = object.ManaCost
		}
}
