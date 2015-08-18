/* 
	Table logic class
*/

// HeroTable handler constructor
// tableId - table Id
// wrapperId - element to insert the table into
function HeroTable(tableId, wrapperId) {
	this._tableId = tableId;
	this._table = document.createElement("table");
	this._table.id = tableId;
	this._table.className = "hero-table";
	document.getElementById(wrapperId).appendChild(this._table);
	this._table.HeroTableController = this;
	this._thead = document.createElement("thead");
	this._table.appendChild(this._thead);
	this._tbody = document.createElement("tbody");
	this._table.appendChild(this._tbody);
	$(this._table).tablesorter();
	
	// heroInstance container
	this.heroList = [];
	this.columnList = ["Name", "Label", "Portrait", "Level", "Strength", "Health", "Mana", "Armor", "PhysicalResistance"];
	
	var thr = document.createElement("tr");
	for ( var i in this.columnList ) {
		var col = this.columnList[i];
		var td = document.createElement("th");
		//this.eval[col].call(this, td, true);
		td.textContent = this.evaluator[col].displayName;
		//this.evaluator[col].cellEvaluator.call(this, td, true)
		thr.appendChild(td);
	}
	this._thead.appendChild(thr);
}

HeroTable.prototype.toString = function () {
	return "[HeroTable " + this._tableId + "]";
}

HeroTable.prototype.refreshHero = function (heroInstance) {
	console.log(heroInstance);
	kappa = heroInstance.InstanceRow
	//for (var i in heroInstance.InstanceRow.childNodes) {
	for (var i = 0; i < heroInstance.InstanceRow.childNodes.length; i++) {
		var cell = heroInstance.InstanceRow.childNodes[i],
			evaluatorId = cell.evaluatorId;
		if (!this.evaluator[evaluatorId].static )
		{
			this.evaluator[evaluatorId].cellEvaluator.call(this, cell, heroInstance);
		}
	}
}

HeroTable.prototype.refreshRow = function(rowElement) {
	 
}

HeroTable.prototype.eval = {};
HeroTable.prototype.evaluator = {};

// 		Cell handler adder
//
// nameID 	   (string)     - internal ID of handler
// fullName (string)        - full name of handler (for usage in selection menus)
// displayName				- display label (for usage in table headers)
// cellEvaluator (function) - html element processor
// sortingMethod 		    - column sorting handling
//			       ("none") - disallow column sorting
//              ("default") - uses <element>.textContent as sorting value
//			   ("property") - uses <element>.sorterText as sorting value (good for static content)
//   		     (function) - function to extract text from element as created in cellEvaluator
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
	
	var row = document.createElement("tr");
	row.HeroInstanceRef = heroInstance;
	for ( var i in this.columnList ) {
		var prop = this.columnList[i],
			cell = document.createElement("td");
		//this.eval[prop].call(this, cell, heroInstance);
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


HeroTable.addHandler("Name","Name","Name",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.Name;
	}, "default", true);

HeroTable.addHandler("Level", "Level", "LVL",
	function(cell, heroInstance) {
		var input = document.createElement("input");
		input.value = heroInstance.Stats.Level;
		input.style.width = "2.5em";
		//var bound = (function(e,u){"bound", console.log(e, this); this.Level(5)}).bind(hero)
		var change = (function(hero,e,u) {
				//console.log("change", this, hero, e);
				//hero.Level(e.target.value); 
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
	function(cell){
		return cell.childNodes[0].value;
	}, 
	true);
HeroTable.addHandler("Health", "Health", "HP",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusHealthTotal;
	},
	"default")
HeroTable.addHandler("Strength", "Strength", "Str",
	function(cell, heroInstance){
		cell.textContent = Math.floor(heroInstance.Stats.AttributeStrengthTotal);
	},
	"default")
HeroTable.addHandler("Mana", "Mana", "MP",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusManaTotal;
	},
	"default")
HeroTable.addHandler("Armor", "Armor", "ARM",
	function(cell, heroInstance){
		cell.textContent = heroInstance.Stats.StatusArmorTotal;
	},
	"default")
HeroTable.addHandler("Portrait", "Portrait", "",
	function(cell, heroInstance){
		var el = document.createElement("div");
		el.className = "mheroicon " + heroInstance.HeroId;
		cell.appendChild(el);
	},
	"default", true)
HeroTable.addHandler("PhysicalResistance", "Physical Resistance", "P. Res.",
	function(cell, heroInstance){
		cell.textContent = Math.round(heroInstance.Stats.StatusPhysicalResistance*100) + "%";
	},
	"default")
HeroTable.addHandler("Label", "Label", "ARM",
	function(cell, heroInstance){
		var label = document.createElement("input");
		label.value = heroInstance.Stats.Name;
		label.className = "hero-label";
		cell.appendChild(label);
	},
	function(cell){
		return cell.childNodes[0].value;
	}, true)


