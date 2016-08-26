
window.addEventListener("DOMContentLoaded", function heroPickerInitializer(e){
	let HeroPickerItemElements = {};
	let window = UIHelper.addWindow({
		title: "Hero picker",
		headerButton: true,
		headerButtonText: "Hero picker",
		headerButtonPos: 1,
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

			let tbody = table.createTBody(),
				body = {};
			for (let team of DotaData.Meta.TeamList) {
				let row = tbody.insertRow();
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
				HeroPickerItemElements[heroId] = button;
			}

			settings.version.onchange = function heroVersionSelectorChange(e) {
				let elements = HeroPickerItemElements,
					herolist = DotaData.getHeroList(settings.version.value);

				for (let herokey in elements)
					if (herokey in herolist)
						elements[herokey].classList.remove("hidden")
					else
						elements[herokey].classList.add("hidden")
			}

			win.appendChild(table);
		},
	});
});
