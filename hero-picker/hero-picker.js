$(function(){
	for ( name in DotaData.heroes ) {
		var hero = DotaData.heroes[name]
		if ( hero.Enabled < 1 ) continue;
		var a = document.createElement("button");
		a.setAttribute("type", "button");
		a.setAttribute("data-hero", name);
		a.className = "hero-picker-button mheroicon " + name;
		document.getElementById("hero-picker-"+hero.Team+"-"+ hero.AttributePrimary).appendChild(a);
	}	
	$("#hero-picker").toggle(false);
	
	$("#hero-picker-header-button").on("click", 
		function(){ 
			$("#hero-picker").toggle();
		});
	$("#hero-picker-header-button").one("click",
		function(){
			var picker = document.getElementById("hero-picker");
			picker.style.left = screen.width / 2 - picker.offsetWidth  / 2 + "px"
			picker.style.top = "15vh";
		});
	$("#hero-picker-header-button").on("dblclick",
		function(){
			var picker = document.getElementById("hero-picker");
			picker.style.left = screen.width / 2 - picker.offsetWidth  / 2 + "px";
			picker.style.top = "15vh";
		});
	$("#hero-picker-close").on("click", 
		function() {
			$("#hero-picker").toggle(false);
		});
	$(".hero-picker-button").on("click",
		function() {
			var heroId = this.getAttribute("data-hero");
		 	var selector = document.getElementById("hero-picker-table-selector");
			HeroTable.tableList[selector.value].reference.addHero(heroId);
		});
})