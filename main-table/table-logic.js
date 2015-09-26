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
	this.columnList = ["Delete", "Name", "Portrait", "Level", "Strength", "Agility", "Intelligence", "Damage", "Items" ];
	this._tableSorterCreated = false;
	
	this.createTable();
}

HeroTable.prototype.evaluator = {};
HeroTable.evaluatorGroups = {};

// 
//   Evaluator implementation registering for HeroInstance handling
// 
// ID			(string)    - ID for the handler
// name			(string)    - Readable name
// header		(undefined) - Nothing to display in header cell
//				(string)    - String to display in the header cell
//				(function)  - function(<th>) to process display in header
// type			(string)    - Category of the handler
//				(undefined) - Defaults to "General"
// init			(function)  - function(<td>) to run for initialisation purposes
//				(undefined) - No cell initialisation required
// eval			(function)  - function(<td>) to run on evaluation
//				(undefined) - No re-evaluation function, content is static
// sorter 		(undefined) - Default sorter (<td>.textContent)
//				(true)      - Default sorter (<td>.textContent)
// 				(false)     - Column sorting disabled
//        		(string)    - Sorter id as defined in $.tablesorter.addParser
// description  (string)	- Description for the evaluator
//				(undefined) - do you hate users?
HeroTable.addEvaluator = function(evaluator) {
	if (evaluator.ID in HeroTable.prototype.evaluator) 
		throw "Evaluator \"" + evaluator.ID + "\" already exists!";
	if (!evaluator.init && !evaluator.eval) 
		throw "No handlers (Init or Eval) set!";
	HeroTable.prototype.evaluator[evaluator.ID] = evaluator;
	if (!HeroTable.evaluatorGroups[evaluator.type]) {
		HeroTable.evaluatorGroups[evaluator.type] = [];	
	}
	HeroTable.evaluatorGroups[evaluator.type].push({
		"ID": evaluator.ID,
		"name": evaluator.name, 
		"description": evaluator.description 
	});
}

HeroTable.prototype.getActiveEvaluators = function () {
	return this.columnList;
}

HeroTable.prototype.toString = function () {
	return "[HeroTable " + this._tableId + "]";
}

HeroTable.prototype.createTable = function () {
	if (this._tableElement) 
	{
		this._tableElement.parentElement.removeChild(this._tableElement);
	}
	this._tableElement = document.createElement("table");
	this._wrapperElement.appendChild(this._tableElement);
	this._tableElement.id = this._tableId;
	this._tableElement.className = "hero-table";
	this._tableElement.HeroTableController = this;
	
	var caption = document.createElement("caption");
	caption.textContent = this._tableName;
	this._tableElement.appendChild(caption);
	
	var thead = document.createElement("thead");
	this._tableElement.appendChild(thead);
	var tbody = document.createElement("tbody");
	this._tableElement.appendChild(tbody);
	this._tableElement.body = tbody;
	
	var thr = document.createElement("tr");
	for ( var i in this.columnList ) {
		var col = this.columnList[i];
		var cell = document.createElement("th");
		if (this.evaluator[col].header instanceof Function) {
			this.evaluator[col].header(cell);
			//cell.textContent = 
		}
		else if (typeof this.evaluator[col].header === "string") {
			cell.textContent = this.evaluator[col].header;
		}
		cell.evaluatorId = col;
		thr.appendChild(cell);
	}
	thead.appendChild(thr);
	this._tableSorterCreated = false;
	
	for (i in this.heroList) {
		var hero = this.heroList[i];	
		this.createHeroRow(hero);
	}
}

HeroTable.prototype.setColumnList = function(columns) {
	this.columnList = columns;
	this.createTable();
}

// header settings for tablesorter plugin
HeroTable.prototype.sorterSettings = function () {
	var sorterSetup = {};
	sorterSetup.headers = {};
	
	for (var i in this.columnList ) {
		var col = this.columnList[i];
		var evaluator = this.evaluator[col];
		if (evaluator.sorter !== undefined && evaluator.sorter !== true) {
			sorterSetup.headers[i] = {};
			sorterSetup.headers[i].sorter = evaluator.sorter;
		}
	}
	this.SortingSetup = sorterSetup;
	return sorterSetup;
}

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

// Creates a row in the table with the HeroInstance attached
HeroTable.prototype.createHeroRow = function (heroInstance) {
	if ( !this._tableSorterCreated )
	{
		$(this._tableElement).tablesorter(this.sorterSettings());	
		this._tableSorterCreated = true;
	}
	
	var row = this._tableElement.body.insertRow(-1);
	row.HeroInstanceRef = heroInstance;
	for ( var i in this.columnList ) {
		var prop = this.columnList[i],
			cell = document.createElement("td");
		
		if (this.evaluator[prop].init) {
			this.evaluator[prop].init.call(this, cell, heroInstance);
		}
		if (this.evaluator[prop].eval) {
			this.evaluator[prop].eval.call(this, cell, heroInstance);
		}
		
		cell.evaluatorId = prop;
		row.appendChild(cell);
	}
	//Object.defineProperty(heroInstance, "InstanceRow", { value: row });
	heroInstance.InstanceRow = row;
	//Object.defineProperty(heroInstance, "InstanceTable", { value: this});
	$(this._tableElement).trigger("update");
}

HeroTable.prototype.removeHero = function (heroInstance) {
	this.heroList.splice(this.heroList.indexOf(heroInstance),1)
	heroInstance.InstanceRow.parentElement.removeChild(heroInstance.InstanceRow);
	$(this._tableElement).trigger("update");
}

// Update cells in the table
HeroTable.prototype.refreshHero = function (heroInstance) {
	for (var i = 0; i < heroInstance.InstanceRow.childNodes.length; i++) {
		var cell = heroInstance.InstanceRow.childNodes[i],
			evaluatorId = cell.evaluatorId;
		if (this.evaluator[evaluatorId].eval )
		{
			this.evaluator[evaluatorId].eval.call(this, cell, heroInstance);
		}
	}
	this.updateSorting();
}

HeroTable.prototype.updateSorting = function () {
	$(this._tableElement).trigger("update");
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
// Uses element's property "sortingProperty" to sort as text
$.tablesorter.addParser({
	id: "propertyText",
	is: function(s){ return false; },
	format: function(s, table, cell) {
		return cell.sortingProperty;
	},
	type: "text"
});
// Uses element's property "sortingProperty" to sort as text
$.tablesorter.addParser({
	id: "propertyNumeric",
	is: function(s){ return false; },
	format: function(s, table, cell) {
		return cell.sortingProperty;
	},
	type: "numeric"
});

HeroTable.addEvaluator({
	ID:"Name",
	name: "Name",
	header: "Name",
	type: "General",
	description: "Displays hero name",
	init: function(cell, heroInstance){
		cell.textContent = heroInstance.Raw.Name;
	}
});

HeroTable.addEvaluator({
	ID: "Level",
	name: "Level",
	header: "Level",
	type: "Base",
	description: "Displays hero level",
	init: function(cell, heroInstance) {
		var input = document.createElement("input");
		input.value = heroInstance.Meta.Level;
		input.style.width = "2.5em";
		var change = (function(hero,e,u) {
				hero.LevelChange(e.target.value);
				this.refreshHero(hero);
			}).bind(this, heroInstance);
		cell.appendChild(input);
		$(input).spinner({
			min: 1,
			max: 25,
			stop: change
		});
	},
	sorter: "firstChildFirstChildNumeric"
});

HeroTable.addEvaluator({
	ID: "Health", 
	name: "Health",
	header: "HP",
	type: "Derived",
	description: "Displays hero health",
	eval: function(cell, heroInstance){
		cell.textContent = heroInstance.Total.Health;
	},
	sorter: "number"
});

HeroTable.addEvaluator({
	ID: "Strength", 
	name: "Strength", 
	header: "Str",
	type: "Base",
	description: "Displays hero strength points",
	eval: function(cell, heroInstance){
	var bonus = Math.floor(heroInstance.Total.StrengthBonus)
		cell.textContent = Math.floor(heroInstance.Base.Strength) + (bonus === 0 ? "" : "+" + bonus);
	},
	sorter: "number"
});

HeroTable.addEvaluator({
	ID: "Agility", 
	name: "Agility", 
	header: "Agi",
	type: "Base",
	description: "Displays hero agility points",
	eval: function(cell, heroInstance){
	var bonus = Math.floor(heroInstance.Total.AgilityBonus)
		cell.textContent = Math.floor(heroInstance.Base.Agility) + (bonus === 0 ? "" : "+" + bonus);
	},
	sorter: "number"
});

HeroTable.addEvaluator({
	ID: "Intelligence", 
	name: "Intelligence", 
	header: "Int",
	type: "Base",
	description: "Displays hero intelligence points",
	eval: function(cell, heroInstance){
	var bonus = Math.floor(heroInstance.Total.IntelligenceBonus)
		cell.textContent = Math.floor(heroInstance.Base.Intelligence) + (bonus === 0 ? "" : "+" + bonus);
	},
	sorter: "number"
});

HeroTable.addEvaluator({
	ID: "Mana", 
	name: "Mana", 
	header: "MP",
	type: "Derived",
	description: "Displays hero mana",
	eval: function(cell, heroInstance){
		cell.textContent = heroInstance.Total.Mana;
	},
	sorter: "number"
});

HeroTable.addEvaluator({
	ID: "Armor", 
	name: "Armor", 
	header: "⛨",
	type: "Derived", //unicode shenanigans
	description: "Displays hero armor",
	eval: function(cell, heroInstance){
		//cell.textContent = Math.round(heroInstance.Total.Armor * 10)/10;
		cell.textContent = heroInstance.Total.Armor;
	},			
	sorter: "number"
});

HeroTable.addEvaluator({
	ID: "Portrait",
	name: "Portrait", 
	type: "General",
	description: "Displays hero strength portrait",
	init: function(cell, heroInstance){
		var el = document.createElement("div");
		el.className = "mheroicon " + heroInstance.Meta.ID;
		cell.appendChild(el);
		cell.sortertingProperty = heroInstance.Raw.Name;
	},
	sorter: "propertyText"
});

HeroTable.addEvaluator({
	ID: "Label", 
	name: "Label", 
	header: "Label",
	type: "General",
	description: "Displays and editable label",
	init: function(cell, heroInstance){
		var label = document.createElement("input");
		label.value = heroInstance.Meta.Label;
		label.className = "hero-label";
		label.onchange = (function(hero){
			hero.Meta.Label = this.value;
			this.updateSorting();
		}).bind(this), heroInstance;
		cell.appendChild(label);
	},
	sorter: "firstChildText"
});

HeroTable.addEvaluator({
	ID: "Delete",
	name: "Delete",
	type: "General",
	description: "Adds a way to remove hero",
	init: function(cell, heroInstance){
		var button = document.createElement("button");
		button.className = "delete-button";
		cell.appendChild(button);
		button.HeroInstanceRef = heroInstance;
		button.TableInstanceRef = this;
		button.onclick = function(){
			this.TableInstanceRef.removeHero(this.HeroInstanceRef);
		};
	},
	sorter: false
});

HeroTable.addEvaluator({
	ID: "Damage",
	name: "Damage",
	header: "Dmg",
	type: "Derived",
	description: "Displays hero attack damage",
	eval: function(cell, hero){
	var bonus = hero.Total.DamageBonus;
		cell.textContent = hero.Total.DamageBase + (bonus === 0 ? "" : "+" + bonus);
	},
	sorter: "number"
});

HeroTable.addEvaluator({
	ID: "Items", 
	name: "Items", 
	header: "Items", 
	type: "General",
	description: "Displays hero items",
	init: function(cell, hero) {
		cell.innerHTML = '<div class="item-container"></div>';
	},
	sorter: false
});

