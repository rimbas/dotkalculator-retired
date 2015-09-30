/* Main page initialisation */

//document.addEventListener("load", 
$(function(e){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document"
	}) 
	var MainTable = new HeroTable("Comparison table", "main-table", "main-table-wrapper");
	for (var i = 1; i < 12; i++) {
		MainTable.addHero(new HeroInstance("obsidian_destroyer", { level: i }));
	}
	
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
