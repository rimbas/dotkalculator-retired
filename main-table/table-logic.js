/* 
	Table logic class
*/

// HeroTable handler constructor
// tableId - table Id
// wrapperId - element to insert the table into
HeroTable.tableList = {}

function HeroTable(tableName, tableId, wrapperId) {
	HeroTable.tableList[tableId] = {reference: this, displayName: tableName};
	
	this._tableId = tableId;
	this._tableName = tableName;
	this._table = document.createElement("table");
	this._table.id = tableId;
	this._table.className = "hero-table";
	document.getElementById(wrapperId).appendChild(this._table);
	this._table.HeroTableController = this;
	
	var caption = document.createElement("caption");
	caption.textContent = tableName;
	this._table.appendChild(caption);
	
	this._thead = document.createElement("thead");
	this._table.appendChild(this._thead);
	this._tbody = document.createElement("tbody");
	this._table.appendChild(this._tbody);
	
	this.heroList = [];
	this.columnList = ["Delete", "Name", "Label", "Portrait", "Level", "Health", "Mana", "Armor"];
	
	var thr = document.createElement("tr");
	for ( var i in this.columnList ) {
		var col = this.columnList[i];
		var cell = document.createElement("th");
		cell.textContent = this.evaluator[col].displayName;
		cell.evaluatorId = col;
		thr.appendChild(cell);
	}
	this._thead.appendChild(thr);
	this.sorterSettings();
}

HeroTable.prototype.toString = function () {
	return "[HeroTable " + this._tableId + "]";
}


HeroTable.prototype.refreshHero = function (heroInstance) {
	for (var i = 0; i < heroInstance.InstanceRow.childNodes.length; i++) {
		var cell = heroInstance.InstanceRow.childNodes[i],
			evaluatorId = cell.evaluatorId;
		if (!this.evaluator[evaluatorId].static )
		{
			this.evaluator[evaluatorId].cellEvaluator.call(this, cell, heroInstance);
		}
	}
	this.updateSorting();
}

HeroTable.prototype.sorterSettings = function () {
	var sorterSetup = {};
	sorterSetup.headers = {};
	
	for (var i in this.columnList ) {
		var col = this.columnList[i];
		var evaluator = this.evaluator[col];
		if (evaluator.sortingMethod !== true) {
			sorterSetup.headers[i] = {};
			sorterSetup.headers[i].sorter = evaluator.sortingMethod;
		}
	}
	
	this.SortingSetup = sorterSetup;
	return sorterSetup;
}

HeroTable.prototype.evaluator = {};

// 		Cell handler adder
//
// nameID 	   (string)     - internal ID of handler
// fullName (string)        - full name of handler (for usage in selection menus)
// displayName				- display label (for usage in table headers)
// cellEvaluator (function) - html element processor
// sortingMethod 		    - column sorting handling
//			        (false) - disallow column sorting
//                   (true) - uses default sorting method
//			       (string) - uses a defined sorting method
// [static] (boolean)       - should the contents be evaluated only once?
HeroTable.addHandler = function(nameID, fullName, displayName, cellEvaluator, sortingMethod, static) {
	fullName = fullName || nameID;
	if (nameID in HeroTable.prototype.evaluator) 
		throw "Handler \"" + nameID + "\" already exists!";
	if (typeof(fullName) !== "string") 
		throw "Invalid descriptive name!";
	if (typeof(displayName) !== "string") 
		throw "Invalid display name!";
	if (!cellEvaluator instanceof Function)
		throw "Invalid cell evaluator!";
	sortingMethod = sortingMethod != undefined ? sortingMethod : true;
	static = static || false;
	
	var handler = {};
	HeroTable.prototype.evaluator[nameID] = handler;
	handler.nameId = nameID;
	handler.cellEvaluator = cellEvaluator;
	handler.sortingMethod = sortingMethod;
	handler.fullName = fullName;
	handler.displayName = displayName;
	handler.static = static;
}

// Adds a hero to the table and evaluates it
// heroInstance (HeroInstance) - valid HeroInstance object
// heroInstance (string)	   - a heroId string
HeroTable.prototype.addHero = function (heroInstance) {
	if (heroInstance in DotaData.heroes) {
		heroInstance = new HeroInstance(heroInstance);
	}
	else if (!heroInstance instanceof HeroInstance) {
		throw "Invalid parameter:" + heroInstance;
	}
	var pos = this.heroList.push(heroInstance);
	if (this.heroList.length < 2)
		$(this._table).tablesorter(this.sorterSettings());
	
	var row = document.createElement("tr");
	row.HeroInstanceRef = heroInstance;
	for ( var i in this.columnList ) {
		var prop = this.columnList[i],
			cell = document.createElement("td");
		this.evaluator[prop].cellEvaluator.call(this, cell, heroInstance);
		if (this.evaluator[prop].static)
			cell.static = true;
		cell.evaluatorId = prop;
		row.appendChild(cell);
	}
	this._tbody.appendChild(row);
	heroInstance.InstanceRow = row;
	$(this._table).trigger("update");
}

HeroTable.prototype.removeHero = function (heroInstance) {
	this.heroList.splice(this.heroList.indexOf(heroInstance),1)
	heroInstance.InstanceRow.parentElement.removeChild(heroInstance.InstanceRow);
	$(this._table).trigger("update");
}

HeroTable.prototype.updateSorting = function () {
	$(this._table).trigger("update");
}

/*--------------------------------------------------
		Handler definitions
--------------------------------------------------*/

$.tablesorter.addParser({
	id: "firstChildNumeric",
	is: function(s){
		return false;
	},
	format: function(s, table, cell) {
		return cell.childNodes[0].value || cell.childNodes[0].textContent;
	},
	type: "numeric"
});
$.tablesorter.addParser({
	id: "firstChildFirstChildNumeric",
	is: function(s){
		return false;
	},
	format: function(s, table, cell) {
		return cell.childNodes[0].childNodes[0].value || cell.childNodes[0].childNodes[0].textContent;
	},
	type: "numeric"
});
$.tablesorter.addParser({
	id: "firstChildText",
	is: function(s){
		return false;
	},
	format: function(s, table, cell) {
		return cell.childNodes[0].value || cell.childNodes[0].textContent;
	},
	type: "text"
});
$.tablesorter.addParser({
	id: "firstChildFirstChildText",
	is: function(s){
		return false;
	},
	format: function(s, table, cell) {
		return cell.childNodes[0].childNodes[0].value || cell.childNodes[0].childNodes[0].textContent;
	},
	type: "text"
});
$.tablesorter.addParser({
	id: "propertyText",
	is: function(s){
		return false;
	},
	format: function(s, table, cell) {
		return cell.sorterText;
	},
	type: "text"
});
$.tablesorter.addParser({
	id: "propertyNumeric",
	is: function(s){
		return false;
	},
	format: function(s, table, cell) {
		return cell.sorterText;
	},
	type: "numeric"
});

HeroTable.addHandler("Name","Name","Name",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.Name;
	});

HeroTable.addHandler("Level", "Level", "LVL",
	function(cell, heroInstance) {
		var input = document.createElement("input");
		input.value = heroInstance.Stats.Level;
		input.style.width = "2.5em";
		var change = (function(hero,e,u) {
				hero.Level(u.value); 
				this.refreshHero(hero);
			}).bind(this, heroInstance)
		cell.appendChild(input);
		$(input).spinner({
			min: 1,
			max: 25,
			spin: change
		});
	},
	"firstChildFirstChildNumeric",
	true);
HeroTable.addHandler("Health", "Health", "HP",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusHealthTotal;
	},
	"number")
HeroTable.addHandler("Strength", "Strength", "Str",
	function(cell, heroInstance){
		cell.textContent = Math.floor(heroInstance.Stats.AttributeStrengthTotal);
	},
	"number")
HeroTable.addHandler("Mana", "Mana", "MP",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusManaTotal;
	},
	"number")
HeroTable.addHandler("Armor", "Armor", "ARM",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusArmorTotal;
	},			
	"number")
HeroTable.addHandler("Portrait", "Portrait", "",
	function(cell, heroInstance){
		var el = document.createElement("div");
		el.className = "mheroicon " + heroInstance.HeroId;
		cell.appendChild(el);
	cell.sorterText = heroInstance.Stats.Name;
	},
	"propertyText",
	true)
HeroTable.addHandler("PhysicalResistance", "Physical Resistance", "P. Res.",
	function(cell, heroInstance){
		cell.textContent = Math.round(heroInstance.Stats.StatusPhysicalResistance*100) + "%";
	},
	"percent")
HeroTable.addHandler("Label", "Label", "Label",
	function(cell, heroInstance){
		var label = document.createElement("input");
		label.value = heroInstance.Stats.Name;
		label.className = "hero-label";
		label.onchange = (function(){
			this.updateSorting();
		}).bind(this);
		cell.appendChild(label);
	},
	"firstChildText",
	true)
HeroTable.addHandler("Delete", "Delete", "",
	function(cell, heroInstance){
		var button = document.createElement("button");
		button.className = "delete-button";
		cell.appendChild(button);
		button.HeroInstanceRef = heroInstance;
		button.TableInstanceRef = this;
		button.onclick = function(){
			this.TableInstanceRef.removeHero(this.HeroInstanceRef);
		};
	},
	false,
	true);
