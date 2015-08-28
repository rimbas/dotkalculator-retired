/* 
	Table logic class
*/

// HeroTable handler constructor
// tableId - table Id
// wrapperId - element to insert the table into
HeroTable.tableList = {}

function HeroTable(tableName, tableId, wrapperId) {
	HeroTable.tableList[tableId] = this;
	
	this._wrapperElement = document.getElementById(wrapperId);
	this._tableName = tableName;
	this._tableId = tableId;
	this.heroList = [];
	this.columnList = ["Delete", "Name", "Label", "Portrait", "Level", "Health", "Mana", "Armor"];
	this._tableSorterCreated = false;
	
	this.createTable();
}

// 		Cell handler adder
//
// nameID 	   (string)     - internal ID of handler
// fullName (string)        - full name of handler (for usage in selection menus)
// displayName (string)		- display label (for usage in table headers)
// type (string)			- evaluator type
// cellEvaluator (function) - html element processor
// sortingMethod 		    - column sorting handling
//			        (false) - disallow column sorting
//                   (true) - uses default sorting method
//			       (string) - uses a defined sorting method
// [static] (boolean)       - should the contents be evaluated only once?
HeroTable.addHandler = function(nameID, fullName, displayName, type, cellEvaluator, sortingMethod, static) {
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
	if (!HeroTable.evaluatorGroups[type]) {
		HeroTable.evaluatorGroups[type] = [];	
	}
	HeroTable.evaluatorGroups[type].push({"nameId": nameID,"fullName": fullName});
	handler.nameId = nameID;
	handler.cellEvaluator = cellEvaluator;
	handler.sortingMethod = sortingMethod;
	handler.fullName = fullName;
	handler.displayName = displayName;
	handler.static = static;
	handler.type = type;
}

HeroTable.prototype.toString = function () {
	return "[HeroTable " + this._tableId + "]";
}

HeroTable.prototype.createTable = function () {
	if (this._table) 
	{
		this._table.parentElement.removeChild(this._table);
	}
	this._table = document.createElement("table");
	this._wrapperElement.appendChild(this._table);
	this._table.id = this._tableId;
	this._table.className = "hero-table";
	this._table.HeroTableController = this;
	
	var caption = document.createElement("caption");
	caption.textContent = this._tableName;
	this._table.appendChild(caption);
	
	var thead = document.createElement("thead");
	this._table.appendChild(thead);
	var tbody = document.createElement("tbody");
	this._table.appendChild(tbody);
	this._table.body = tbody;
	
	var thr = document.createElement("tr");
	for ( var i in this.columnList ) {
		var col = this.columnList[i];
		var cell = document.createElement("th");
		cell.textContent = this.evaluator[col].displayName;
		cell.evaluatorId = col;
		thr.appendChild(cell);
	}
	thead.appendChild(thr);
	this._tableSorterCreated = false;
	
	//for (var i = 0; i < this.heroList.length; i++) {
	//	this.addHero(this.heroList[i]);	
	//}
	for (i in this.heroList) {
		var hero = this.heroList[i];	
		this.createHeroRow(hero);
	}
}

HeroTable.prototype.setColumnList = function(columns) {
	this.columnList = columns;
	this.createTable();
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

// header settings for tablesorter plugin
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

HeroTable.prototype.getEvaluators = function () {
	return this.columnList;
}

HeroTable.prototype.evaluator = {};
HeroTable.evaluatorGroups = {};

// Adds a hero to the table and evaluates it
// heroInstance (HeroInstance) - valid HeroInstance object
// heroInstance (string)	   - a heroId string
HeroTable.prototype.addHero = function (heroInstance) {
	if (heroInstance in DotaData.getCurrentHeroList()) {
		heroInstance = new HeroInstance(heroInstance);
	}
	else if (!heroInstance instanceof HeroInstance) {
		throw "Invalid parameter:" + heroInstance;
	}
	this.heroList.push(heroInstance);
	this.createHeroRow(heroInstance)
}

HeroTable.prototype.createHeroRow = function (heroInstance) {
	if ( !this._tableSorterCreated )
	{
		$(this._table).tablesorter(this.sorterSettings());	
		this._tableSorterCreated = true;
	}
	
	var row = this._table.body.insertRow(-1);
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

HeroTable.addHandler("Name","Name","Name","General",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.Name;
	});
inputsTest = [];
HeroTable.addHandler("Level", "Level", "LVL","Base",
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
HeroTable.addHandler("Health", "Health", "HP","Derived",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusHealthTotal;
	},
	"number")
HeroTable.addHandler("Strength", "Strength", "Str","Base",
	function(cell, heroInstance){
		cell.textContent = Math.floor(heroInstance.Stats.AttributeStrengthTotal);
	},
	"number")
HeroTable.addHandler("Mana", "Mana", "MP","Derived",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusManaTotal;
	},
	"number")
HeroTable.addHandler("Armor", "Armor", "ARM","Derived",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusArmorTotal;
	},			
	"number")
HeroTable.addHandler("Portrait", "Portrait", "","General",
	function(cell, heroInstance){
		var el = document.createElement("div");
		el.className = "mheroicon " + heroInstance.HeroId;
		cell.appendChild(el);
	cell.sorterText = heroInstance.Stats.Name;
	},
	"propertyText",
	true)
HeroTable.addHandler("PhysicalResistance", "Physical Resistance", "P. Res.","Derived",
	function(cell, heroInstance){
		cell.textContent = Math.round(heroInstance.Stats.StatusPhysicalResistance*100) + "%";
	},
	"percent")
HeroTable.addHandler("Label", "Label", "Label","General",
	function(cell, heroInstance){
		var label = document.createElement("input");
		label.value = heroInstance.Stats.Label || heroInstance.Stats.Name;
		label.className = "hero-label";
		label.onchange = (function(hero){
			hero.Stats.Label = this.value;
			this.updateSorting();
		}).bind(this), heroInstance;
		cell.appendChild(label);
	},
	"firstChildText",
	true)
HeroTable.addHandler("Delete", "Delete", "","General",
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
HeroTable.addHandler("Damage", "Damage", "Dmg", "Derived",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.AttackDamageTotal;
	},
	"number");