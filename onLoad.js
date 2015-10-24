/* Main page initialisation */

//document.addEventListener("load", 
$(function(e){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document"
	}) 
	var MainTable = new HeroTable("Comparison table", "main-table", "main-table-wrapper");
	MainTable.addHero(new HeroInstance("pudge", { level: 7, items: [new ItemInstance("tranquil_boots"), new ItemInstance("urn_of_shadows"), new ItemInstance("blink"), new ItemInstance("point_booster")],
												abilities: { "attribute_bonus": {level: 2} }
												}));
	MainTable.addHero(new HeroInstance("pudge", { level: 7, items: [new ItemInstance("arcane_boots"), new ItemInstance("force_staff"), new ItemInstance("urn_of_shadows"), new ItemInstance("ghost")],
												abilities: { "attribute_bonus": {level: 3}, "pudge_flesh_heap": {level: 4, charges: 10}}
												}));
	MainTable.addHero(new HeroInstance("pudge", { level: 7, items: [new ItemInstance("boots"), new ItemInstance("urn_of_shadows"), new ItemInstance("blink"), new ItemInstance("cyclone")] }));
	MainTable.addHero(new HeroInstance("pudge", { level: 7, items: [new ItemInstance("tranquil_boots"), new ItemInstance("urn_of_shadows"), new ItemInstance("force_staff"), new ItemInstance("blade_mail")] }));
	MainTable.addHero(new HeroInstance("pudge", { level: 7, items: [new ItemInstance("armlet_active"), new ItemInstance("talisman_of_evasion"), new ItemInstance("cloak"), new ItemInstance("bloodstone")] }));
	
	document.createVersionSelectors = function (init) {
		optionCollection = [];
		var versionIDs = [];
		for (var ID in DotaData.Versions) {
			versionIDs.push(ID);
		}
		versionIDs.sort();
		for (var sortedID of versionIDs) {
			var option = document.createElement("option");
			option.text = sortedID;
			optionCollection.push(option);
		}
		for (var selector of $(".selector-version").toArray() ) { 
			// purge the selector's children
			while ( selector.firstChild ) { selector.removeChild(selector.firstChild) }
			
			for (var opt of optionCollection) {
				selector.add(opt.cloneNode(true));
			}
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
