// HeroTable handler constructor
// tableId - table Id
function HeroTable(tableId) {
	this.tableId = tableId;
	this.table = document.getElementById(tableId);
	this.thead = document.createElement("thead");
	this.table.appendChild(this.thead);
	this.tbody = document.createElement("tbody");
	this.table.appendChild(this.tbody);
	$(this.table).tablesorter();
	
	this.heroList = [];
	this.columnList = ["Name", "Portrait", "Level", "Health", "Mana", "Armor"];
	
	var thr = document.createElement("tr");
	for ( var i in this.columnList ) {
		var prop = this.columnList[i];
		var td = document.createElement("th")	;
		this.eval[prop].call(this, td, true);
		thr.appendChild(td);
	}
	this.thead.appendChild(thr);
}

// Adds a hero to the table and evaluates it
// heroInstance (HeroInstance) - valid HeroInstance object
// heroInstance (string)	   - a heroId string
HeroTable.prototype.addHero = function (heroInstance) {
	if (heroInstance in DotaData.heroes) {
		heroInstance = new HeroInstance(heroInstance);
	}
	else if (!heroInstance instanceof HeroInstance) {
		throw "invalid parameter:" + heroInstance;
	}
	this.heroList.push(heroInstance);
	
	var row = document.createElement("tr");
	for ( var i in this.columnList ) {
		var el = this.columnList[i],
			td = document.createElement("td");
		this.eval[el].call(this, td, heroInstance);
		row.appendChild(td);
	}
	this.tbody.appendChild(row);
	$(this.table).trigger("update");
}
HeroInstance.prototype.Evaluate = function( columnEnum ) {
	if ( columnEnum in this.eval ) return this.eval[columnEnum].call(this)
}

HeroTable.prototype.eval = {}

// evaluation function behavior
// cell    			   - the table cell (td) element
// hero (HeroInstance) - hero object of this row
// hero (true)		   - default value
HeroTable.prototype.eval.Name = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Name;
	}
	else if ( hero === true ) {
		cell.textContent = "Name";	
	}
}
HeroTable.prototype.eval.Level = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Level;
	}
	else if ( hero === true ) {
		cell.textContent = "LVL";
	}
}
HeroTable.prototype.eval.Health = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Evaluate("Health");
	}
	else if ( hero === true ) {
		cell.textContent = "HP";	
	}
}	
HeroTable.prototype.eval.Mana = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Evaluate("Mana");
	}
	else if ( hero === true ) {
		cell.textContent = "MP";	
	}
}
HeroTable.prototype.eval.Armor = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Evaluate("Armor");
	}
	else if ( hero === true ) {
		cell.textContent = "ARM";	
	}
}
HeroTable.prototype.eval.Portrait = function( cell, hero ) {
	var el = document.createElement("div");
 	if ( hero instanceof HeroInstance ) {
		el.className = "mheroicon " + hero.HeroId;
	}
	else if ( hero === true ) {
		el.className = "mheroicon";
	}
		
	cell.appendChild(el);
}



