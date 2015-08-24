$(function(){
	(function(){
		var list = DotaData.getCurrentHeroList();
		for ( name in list ) {
			var hero = list[name];
			if ( hero.Enabled <= 0 ) continue;
			var a = document.createElement("button");
			a.setAttribute("type", "button");
			a.setAttribute("data-hero", name);
			a.setAttribute("title", hero.Name);
			a.className = "hero-picker-button mheroicon " + name;
			document.getElementById("hero-picker-"+hero.Team+"-"+ hero.AttributePrimary).appendChild(a);
		}
	})();
	$("#hero-picker").toggle(false);
	
	$("#hero-picker-header-button").on("click", 
		function(){ 
			$("#hero-picker").toggle();
		});
	$("#hero-picker-header-button").one("click",
		function(){
			var picker = document.getElementById("hero-picker");
			picker.style.left = "11px"
			picker.style.top = "52px";
		});
	$("#hero-picker-header-button").on("dblclick",
		function(){
			var picker = document.getElementById("hero-picker");
			picker.style.left = "11px"
			picker.style.top = "52px";
		});
	$("#hero-picker-close").on("click", 
		function() {
			$("#hero-picker").toggle(false);
		});
	$(".hero-picker-button").on("click",
		function() {
			var heroId = this.getAttribute("data-hero");
		 	var selector = document.getElementById("hero-picker-table-selector");
			HeroTable.tableList[selector.value].addHero(heroId);
		});
})