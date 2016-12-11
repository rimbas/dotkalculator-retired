/* Main page initialisation */

//document.addEventListener("load",
window.addEventListener("DOMContentLoaded", function(e){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document",
	})
	MainTable = new HeroTable("Comparison table", "main-table", document.getElementById("main-table-wrapper"));
	MainTable.addHero(new HeroInstance("drow_ranger", {
		level: 16,
		items: [
			new ItemObject("greater_crit"),
			new ItemObject("butterfly"),
			new ItemObject("power_treads_agility"),
			new ItemObject("sange_and_yasha"),
			new ItemObject("dragon_lance"),
			new ItemObject("mask_of_madness")
		],
		abilities: {
			"drow_ranger_frost_arrows": 4,
			"drow_ranger_wave_of_silence": 4,
			"drow_ranger_trueshot": 4,
			"drow_ranger_marksmanship": 3,
			"attribute_bonus": 1
		},
		team: "Radiant"
	}));
	MainTable.addHero(new HeroInstance("ursa", {
		level: 13,
		team: "Radiant",
		abilities: {
			"ursa_overpower": 4,
			"ursa_fury_swipes": 4,
			"ursa_enrage": 2
		},
		items: [
			new ItemObject("vladmir"),
			new ItemObject("phase_boots"),
			new ItemObject("skadi"),
			new ItemObject("blink"),
			new ItemObject("black_king_bar"),
			new ItemObject("monkey_king_bar")
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
			new BuffObject("alchemist_chemical_rage_buff", { level: 3 }),
			new BuffObject("moon_shard_buff")
		],
		items: [
			new ItemObject("assault"),
			new ItemObject("travel_boots_2"),
			new ItemObject("abyssal_blade"),
			new ItemObject("mjollnir"),
			new ItemObject("heart"),
			new ItemObject("moon_shard")
		],
		team: "Dire"
	}))
	MainTable.addHero(new HeroInstance("crystal_maiden", {
		team: "Dire",
		level: 25,
		abilities: {
			crystal_maiden_brilliance_aura: 4,
			crystal_maiden_crystal_nova: 4,
			crystal_maiden_frostbite: 4,
			crystal_maiden_freezing_field: 3,
			attribute_bonus: 10
		},
		items: [
			new ItemObject("blink"),
			new ItemObject("guardian_greaves"),
			new ItemObject("sheepstick"),
			new ItemObject("glimmer_cape"),
			new ItemObject("force_staff"),
			new ItemObject("cyclone")
		],
		buffs: [
			new BuffObject("ultimate_scepter_buff")
		]
	}))
	MainTable.addHero(new HeroInstance("lina", {
		level: 16,
		abilities: {
			lina_dragon_slave: 4,
			lina_light_strike_array: 4,
			lina_fiery_soul: {level: 4, charges: 3},
			lina_laguna_blade: 3,
			attribute_bonus: 1
		},
		items: [
			new ItemObject("octarine_core"),
			new ItemObject("cyclone"),
			new ItemObject("blink"),
			new ItemObject("greater_crit"),
			new ItemObject("travel_boots"),
			new ItemObject("hand_of_midas"),
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

window.createAllHeroes = function(team) {
	MainTable.removeAllHeroes()
	let list = DotaData.getCurrentHeroList()
	for (let heroId in list) {
		let settings = {};
		if (team)
			settings.team = team;
		if (list[heroId].Enabled > 0)
			MainTable.addHero(new HeroInstance(heroId, settings));
	}
}
