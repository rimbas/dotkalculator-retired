/* 
	Table logic class
*/

// HeroTable handler constructor
// tableId - table Id
function HeroTable(wrapperId) {
	//this._tableId = tableId;
	this._table = document.createElement("table");
	this._table.className = "hero-table";
	document.getElementById(wrapperId).appendChild(this._table);
	this._table.HeroTableController = this;
	this._thead = document.createElement("thead");
	this._table.appendChild(this._thead);
	this._tbody = document.createElement("tbody");
	this._table.appendChild(this._tbody);
	$(this._table).tablesorter();
	
	this.heroListProps = {};
	this.heroList = [];
	this.columnList = ["Name", "Portrait", "Level", "Health", "Mana", "Armor", "PhysicalResistance"];
	
	var thr = document.createElement("tr");
	for ( var i in this.columnList ) {
		var prop = this.columnList[i];
		var td = document.createElement("th");
		this.eval[prop].call(this, td, true);
		thr.appendChild(td);
	}
	this._thead.appendChild(thr);
}

HeroTable.prototype.refreshHero = function (heroInstance) {
	for (var i in this.columnList) {
		var prop = this.columnList[i],
			cell = this.heroListProps[heroInstance].children[i];
		if (!cell.static) {
				this.eval[prop].call(this, cell, heroInstance);
		}
	}
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
	for ( var i in this.columnList ) {
		var prop = this.columnList[i],
			td = document.createElement("td");
		this.eval[prop].call(this, td, heroInstance);
		row.appendChild(td);
	}
	this._tbody.appendChild(row);
	this.heroListProps[heroInstance] = row;
	$(this._table).trigger("update");
}

HeroTable.prototype.eval = {}

// evaluation function behavior
// cell    			   - the table cell (td) element
// hero (HeroInstance) - hero object of this row
// hero (true)		   - default value
HeroTable.prototype.eval.Name = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Stats.Name;
	}
	else if ( hero === true ) {
		cell.textContent = "Name";
	}
	cell.static = true;
}
HeroTable.prototype.eval.Level = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		var input = document.createElement("input");
		input.value = hero.Stats.Level;
		input.style.width = "2.5em";
		//var bound = (function(e,u){"bound", console.log(e, this); this.Level(5)}).bind(hero)
		var change = (function(hero,e,u){
				//console.log("change", this, hero, e);
				//hero.Level(e.target.value); 
				hero.Level(u.value); 
				this.refreshHero(hero);
			}).bind(this, hero)
		cell.appendChild(input);
		$(input).spinner({
			min: 1,
			max: 25,
			spin: change
		});
	}
	else if ( hero === true ) {
		cell.textContent = "LVL";
	}
	cell.static = true;
}
HeroTable.prototype.eval.Health = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Stats.StatusHealthTotal;
	}
	else if ( hero === true ) {
		cell.textContent = "HP";	
	}
}	
HeroTable.prototype.eval.Mana = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = hero.Stats.StatusManaTotal;
	}
	else if ( hero === true ) {
		cell.textContent = "MP";	
	}
}
HeroTable.prototype.eval.Armor = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = Math.round(hero.Stats.StatusArmorTotal*10)/10;
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
	cell.static = true
}

HeroTable.prototype.eval.PhysicalResistance = function( cell, hero ) {
	if ( hero instanceof HeroInstance ) {
		cell.textContent = Math.round(hero.Stats.StatusPhysicalResistance*100) + "%";
	}
	else if ( hero === true ) {
		cell.textContent = "P. Res.";	
	}
}



