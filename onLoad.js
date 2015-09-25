/* Main page initialisation */

var MainTable;

//document.addEventListener("load", 
$(function(e){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document"
	}) 
	MainTable = new HeroTable("Comparison table", "main-table", "main-table-wrapper");
	MainTable.addHero(new HeroInstance("techies", { Level: 1 }));
	MainTable.addHero(new HeroInstance("techies", { Level: 2 }));
	MainTable.addHero(new HeroInstance("techies", { Level: 3 }));
	
	//$("#table-settings").toggle(false);
	$(".table-selector").selectmenu();
})
