/* Main page initialisation */

var MainTable;

$(function(){
	$(".window").draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document"
	})
	MainTable = new HeroTable("main-table");
	MainTable.addHero(new HeroInstance("alchemist"));
	MainTable.addHero("vengefulspirit");
	MainTable.addHero("techies");
	$("#main-table").tablesorter();
})
