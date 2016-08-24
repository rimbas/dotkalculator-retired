$(function(){
	{
		var list = DotaData.getCurrentHeroList();
		for ( var name in list ) {
			var hero = list[name];
			if ( hero.Enabled <= 0 ) continue;
			var a = document.createElement("button");
			a.setAttribute("type", "button");
			a.setAttribute("data-hero", name);
			a.setAttribute("title", hero.Name);
			a.classList.add("hero-picker-button", "mheroicon", name);
			document.getElementById("hero-picker-"+hero.Team+"-"+hero.Type).appendChild(a);
		}
	}

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
	}).on("dblclick",
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
			var heroId = this.getAttribute("data-hero"),
				selector = document.getElementById("hero-picker-table-selector"),
				versionSelector = document.getElementById("hero-picker-version-selector"),
				heroInstance = new HeroInstance(heroId, {version: versionSelector.value});
			HeroTable.getTableById(selector.value).addHero(heroInstance);
		});
})

window.addEventListener("DOMContentLoaded", function(e){
	let window = UIHelper.addWindow({
		title: "Hero picker",
		headerButton: "Hero picker",
		headerButtonPlace: 1,
		populationCallback: function heroPickerPopulator(win) {
			let settings = UIHelper.appendSettings(win, {version: true, table: true});
			let table = document.createElement("table")
			table.classList.add("hero-picker-table")

			let thead = table.createTHead();
			let theadrow = thead.insertRow()
			for (var type of DotaData.Meta.TypeList) {
				let th = theadrow.appendChild(document.createElement("th")),
					image = th.appendChild(document.createElement("img"));
					text = th.appendChild(document.createTextNode(" "+type));
				image.src = "images/icon_"+type.toLowerCase()+".png";
			}

			let body = {}
			for (let team of DotaData.Meta.TeamList) {
				let row = table.insertRow();
				body[team] = {}
				for (let type of DotaData.Meta.TypeList)
					body[team][type] = row.insertCell()
			}

			var heroDataObject = DotaData.getCurrentHeroList(),
				heroList = Object.keys(heroDataObject).sort(function heroNameSorter(a,b){
					if (heroDataObject[a].Name < heroDataObject[b].Name)
						return -1;
					if (heroDataObject[a].Name > heroDataObject[b].Name)
						return 1;
					return 0
				});
			for (let heroId of heroList) {
				var hero = heroDataObject[heroId];
				if ( hero.Enabled <= 0 )
					continue;

				let button = body[hero.Team][hero.Type].appendChild(document.createElement("button"));
				button.classList.add("hero-picker-button", "mheroicon", heroId);
				button.setAttribute("title", hero.Name);
				button.onclick = function heroAddButton() {
					let hero = new HeroInstance(heroId, {
						version: settings.version.value,
					})
					HeroTable.getTableById(settings.table.value).addHero(hero);
				}
			}

			win.appendChild(table);
		}
	});
	//let list = DotaData.getCurrentHeroList();

});
