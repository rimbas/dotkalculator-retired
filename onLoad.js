/* Main page initialisation */

var MainTable;

//document.addEventListener("load", 
$(function(e){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document"
	}) 
	MainTable = new HeroTable("main-table", "main-table-wrapper");
	MainTable.addHero(new HeroInstance("alchemist", 16, []));
	MainTable.addHero("vengefulspirit");
	MainTable.addHero("techies");
	//$("#main-table").addClass("vertical-separators");
	
	$("#table-settings").toggle(false);
})
