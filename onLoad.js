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
			new ItemInstance("dragon_lance"),
			new ItemInstance("mask_of_madness")
		], 
		abilities: {
			"drow_ranger_frost_arrows": 4,
			"drow_ranger_wave_of_silence": 4,
			"drow_ranger_trueshot": 4, 
			"drow_ranger_marksmanship": 3, 
			"attribute_bonus": 1
		},
		team: "Magic"
	}));
	MainTable.addHero(new HeroInstance("ursa", {
		level: 13,
		team: "Magic",
		abilities: {
			"ursa_overpower": 4,
			"ursa_fury_swipes": 4,
			"ursa_enrage": 2
		},
		items: [
			new ItemInstance("vladmir"),
			new ItemInstance("phase_boots"),
			new ItemInstance("skadi"),
			new ItemInstance("basher"),
			new ItemInstance("black_king_bar")
		]
	}));
	MainTable.addHero(new HeroInstance("alchemist", {
		level: 25,
		abilities: { 
			"alchemist_acid_spray": 4, 
			"alchemist_unstable_concoction": 4,
			"alchemist_goblins_greed": 4,
			"alchemist_chemical_rage": 3 ,
			"attribute_bonus": 10
		},
		buffs: [ 
			new BuffInstance("alchemist_chemical_rage_buff", { level: 3 }),
			new BuffInstance("moon_shard_buff")
		],
		items: [
			new ItemInstance("assault"),
			new ItemInstance("travel_boots_2"),
			new ItemInstance("abyssal_blade"),
			new ItemInstance("mjollnir"),
			new ItemInstance("heart"),
			new ItemInstance("moon_shard")
		],
		team: "Ghost"
	}))
	MainTable.addHero(new HeroInstance("crystal_maiden", {
		team: "Ghost",
		level: 25,
		abilities: {
			crystal_maiden_brilliance_aura: 4,
			crystal_maiden_crystal_nova: 4,
			crystal_maiden_frostbite: 4,
			crystal_maiden_freezing_field: 3,
			attribute_bonus: 10
		},
		items: [
			new ItemInstance("blink"),
			new ItemInstance("guardian_greaves"),
			new ItemInstance("sheepstick"),
			new ItemInstance("glimmer_cape"),
			new ItemInstance("force_staff"),
			new ItemInstance("cyclone"),
			new ItemInstance("ward_observer", { charges: 99 })
		],
		buffs: [
			new BuffInstance("ultimate_scepter_buff")
		]
	}))
	
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
