
window.addEventListener("DOMContentLoaded", function itemPickerInitializer(e){
	let ItemPickerItemElements = {},
		ItemPickerFilterAliases = {};

	let uiWindow = UIHelper.addWindow({
		title: "Item picker",
		headerButton: true,
		headerButtonText: "Item picker",
		headerButtonPos: 2,
		populationCallback: function itemPickerPopulator(win) {
			let settings = UIHelper.appendSettings(win, {version: true, search: true}),
				itemTable = document.createElement("table");
			itemTable.classList.add("item-picker-table");

			let sectionElements = {};
			let itemTableHead = itemTable.createTHead(),
				itemTableBody = itemTable.createTBody(),
				headRow = itemTableHead.insertRow(),
				bodyRow = itemTableBody.insertRow();

			for (let section of DotaData.Meta.ShopSections) {
				let th = headRow.appendChild(document.createElement("th")),
					image = th.appendChild(document.createElement("img"));
				image.src = "images/shop/shop_"+section.toLowerCase()+".png";
				image.width = image.height = 48;
				image.alt = image.title = section;
				let td = bodyRow.appendChild(document.createElement("td"));
					td.classList.add("drag-item-list")
					sectionElements[section] = td;
			}

			function itemDragStart(e) {
				this.style.opacity = "0.4";
				e.dataTransfer.setData("text/item-id", this.itemId);
				e.dataTransfer.setData("text/item-version", settings.version.value);
				e.dataTransfer.effectAllowed = "copy";
			}

			function itemDragEnd(e) {
				this.style.opacity = null;
			}

			// populates the table with elements and filter lookup list
			let items = DotaData.getCurrentItemList();
			for (let itemKey in items) {
				let item = items[itemKey],
					section = sectionElements[item.Section];
				if (section === undefined)
					continue;

				let img = document.createElement("img"),
					before = section.children[item.SectionIndex];
				img.classList.add("drag-item-image");
				img.src = "images/items/"+itemKey+".png";
				img.draggable = true;
				//img.setAttribute("item-key", itemKey);
				img.alt = img.title = item.Name;
				img.itemId = itemKey;

				img.ondragstart = itemDragStart;
				img.ondragend = itemDragEnd;
				ItemPickerItemElements[itemKey] = img;
				section.insertBefore(img, before);

				// lookup list for search filtering
				ItemPickerFilterAliases[itemKey] = [item.Name]
				if (item.Aliases)
					for (let alias of item.Aliases)
						ItemPickerFilterAliases[itemKey].push(alias)
			}

			win.appendChild(itemTable);

			settings.search.title = "Case insensitive regular expression"
			settings.search.oninput = function itemSearchFilter(e) {
				let elements = ItemPickerItemElements,
					aliases = ItemPickerFilterAliases,
					name = this.value;
				this.classList.remove("error")

				if (name.length > 0) {
					try {
						let pattern = new RegExp(name, "i")
						for (let itemKey in aliases) {
							let aliasList = aliases[itemKey],
								found = false;

							for (let alias of aliasList)
								if (alias.match(pattern))
									found = true;

							let element = elements[itemKey];
							if (found)
								element.classList.remove("filtered")
							else
								element.classList.add("filtered")
						}
					}
					catch (e)
					{
						this.classList.add("error")
					}
				}
				else
					for (let itemKey in elements)
						elements[itemKey].classList.remove("filtered")

			}

			settings.version.onchange = function itemVersionSelectorChange(e) {
				let elements = ItemPickerItemElements,
					itemlist = DotaData.getItemList(settings.version.value);

				for (let itemKey in elements)
					if (itemKey in itemlist)
						elements[itemKey].classList.remove("hidden")
					else
						elements[itemKey].classList.add("hidden")
			}

		}
	});
});
