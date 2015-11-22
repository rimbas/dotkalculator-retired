/* Main page initialisation */

//document.addEventListener("load", 
$(function(e){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document"
	}) 
	var MainTable = new HeroTable("Comparison table", "main-table", "main-table-wrapper");
//	MainTable.addHero(new HeroInstance("pudge", { level: 7, 
//												items: [new ItemInstance("tranquil_boots"), new ItemInstance("urn_of_shadows"), new ItemInstance("blink"), new ItemInstance("magic_wand")],
//												abilities: { "attribute_bonus": {level: 2} }
//												}));
//	MainTable.addHero(new HeroInstance("pudge", { level: 7, items: [new ItemInstance("armlet_active"), new ItemInstance("talisman_of_evasion"), new ItemInstance("cloak"), new ItemInstance("bloodstone")] }));
//	MainTable.addHero(new HeroInstance("drow_ranger", {level: 17, abilities: {"drow_ranger_trueshot": {level: 4}, "drow_ranger_marksmanship": {level: 3}, "attribute_bonus": {level: 1} },
//													   items: [new ItemInstance("power_treads_agility"), new ItemInstance("sange_and_yasha"), new ItemInstance("wraith_band"), /*new ItemInstance("ring_of_aquila"),*/ new ItemInstance("butterfly"), new ItemInstance("greater_crit")]}));
//	MainTable.addHero(new HeroInstance("drow_ranger", {level: 17, abilities: {"drow_ranger_trueshot": {level: 4}, "drow_ranger_marksmanship": {level: 3}, "attribute_bonus": {level: 0} },
//													   items: [new ItemInstance("power_treads_agility"), new ItemInstance("sange_and_yasha"), new ItemInstance("wraith_band"), /*new ItemInstance("ring_of_aquila"),*/ new ItemInstance("butterfly"), new ItemInstance("greater_crit")]}));
//	MainTable.addHero(new HeroInstance("drow_ranger", {level: 25, abilities: {"drow_ranger_trueshot": {level: 4}, "drow_ranger_marksmanship": {level: 3}, "attribute_bonus": {level: 10} },
//													   items: [new ItemInstance("eagle"), new ItemInstance("slippers")]}));
	MainTable.addHero(new HeroInstance("pudge"))
	
	
	document.createVersionSelectors = function (init) {
		optionCollection = [];
		var versionIDs = [];
		for (var ID in DotaData.Versions)
			versionIDs.push(ID);
		versionIDs.sort();
		for (var sortedID of versionIDs) {
			var option = document.createElement("option");
			option.text = sortedID;
			optionCollection.push(option);
		}
		for (var selector of $(".selector-version").toArray() ) { 
			// purge the selector's children
			while ( selector.firstChild ) 
				selector.removeChild(selector.firstChild);
			for (var opt of optionCollection)
				selector.add(opt.cloneNode(true));
			selector.selectedIndex = versionIDs.indexOf(DotaData.TargetVersion);
		}
		if (!init) {
			$( ".selector-version" ).selectmenu( "refresh" );
		}
	}
	document.createVersionSelectors(true);
	
	document.createTableSelectors = function (init) {
		optionCollection = [];
		for (var tableDef of HeroTable.getTables()) {
			var option = document.createElement("option");
			option.text = tableDef.name;
			option.value = tableDef.ID;
			optionCollection.push(option);
		}
		
		for (var selector of $(".selector-table").toArray() ) { 
			// purge the selector's children
			while ( selector.firstChild ) { selector.removeChild(selector.firstChild) }
			for (var opt of optionCollection) {
				selector.add(opt.cloneNode(true));
			}
		}
		if (!init) {
			$( ".selector-table" ).selectmenu( "refresh" );
		}
	}
	document.createTableSelectors(true);
	
	$(".selector-version").selectmenu({width: 300});
	$(".selector-table").selectmenu({width: 300});
})
