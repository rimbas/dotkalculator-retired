/* Main page initialisation */

//document.addEventListener("load", 
$(function(e){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document"
	}) 
	MainTable = new HeroTable("Comparison table", "main-table", "main-table-wrapper");
	MainTable.addHero(new HeroInstance("drow_ranger", {
		level: 16, 
		items: [
			new ItemInstance("ring_of_aquila"), 
			new ItemInstance("butterfly"), 
			new ItemInstance("power_treads_agility"),
			new ItemInstance("sange_and_yasha"),
			new ItemInstance("mask_of_madness")
		], 
		abilities: {
			"drow_ranger_frost_arrows": 4,
			"drow_ranger_trueshot": 4, 
			"drow_ranger_marksmanship": 3, 
			"attribute_bonus": 1
		},
		team: "Magic"
	}));
	MainTable.addHero(new HeroInstance("drow_ranger", {
		abilities: {"drow_ranger_trueshot": 1},
		items: [
			new ItemInstance("wraith_band"),
			new ItemInstance("tango")
		]
	}));
	MainTable.addHero(new HeroInstance("sniper", {
		level: 11,
		items: [
			new ItemInstance("ring_of_aquila"),
			new ItemInstance("dragon_lance"),
			new ItemInstance("phase_boots"),
		],
		abilities: {
			"sniper_headshot": 4,
			"sniper_take_aim": 4,
			"sniper_assassinate": 2,
			"attribute_bonus": 1
		}
	}))
	MainTable.addHero(new HeroInstance("rubick", {
		abilities: {"rubick_null_field": 3},
		team: "Magic"
	}));
	MainTable.addHero(new HeroInstance("sven", {
		abilities: {"sven_gods_strength": 3},
		team: "Magic"
	}));
	MainTable.addHero(new HeroInstance("terrorblade", {
		abilities: {"terrorblade_metamorphosis": 3},
		team: "Magic"
	}));
	MainTable.addHero(new HeroInstance("terrorblade", {
		abilities: {"terrorblade_metamorphosis": 3},
		team: "Magic"
	}));
	
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
