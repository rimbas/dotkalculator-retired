$(function(){
	
	var baseWrapper = document.getElementById("item-picker-base");
	
	var itemTable = document.createElement("table"),
		itemTableHead = document.createElement("thead"),
		itemTableBody = document.createElement("tbody"),
		itemRow = itemTableBody.insertRow();
	itemTable.appendChild(itemTableHead);
	itemTable.appendChild(itemTableBody);
	baseWrapper.appendChild(itemTable);
	
	var shopSections = [
		"Consumables", "Attributes", "Armaments", "Arcane", "Common", 
		"Support", "Caster", "Weapons", "Armor", "Artifacts", "Secret" ],
		shopSectionElements = {};
	
	
	for (var section of shopSections) {
		var th = document.createElement("th");
		itemTableHead.appendChild(th);
		var img = document.createElement("img");
		img.src = "images/shop/shop_"+section.toLowerCase()+".png";
		th.appendChild(img);
		var td = document.createElement("td");
		td.id = "item-selector-section-"+section;
		td.style.verticalAlign = "top";
		shopSectionElements[section] = td;
		itemRow.appendChild(td);
	}
	
	function populateItemTable () {
		var items = DotaData.getCurrentItemList(),
			sectionPools = {};
		
		for (var itemKey in items) {
			var item = items[itemKey];
			// because V8 doesn't support continue in for..in loops
			if (item.Section in shopSectionElements) {
				if (!sectionPools[item.Section]) {
					sectionPools[item.Section] = [];	
				}
				var img = document.createElement("img"),
					section = sectionPools[item.Section];
				if (Number.isInteger(item.SectionIndex)) {
					img.itemIndex = item.SectionIndex;
				}
				img.src = "images/items/"+itemKey+".png";
				img.width = 48;
				img.style.display = "block";
				
				if (Number.isInteger(img.itemIndex) && !section[img.itemIndex]) {
					section[img.itemIndex] = img;
				}
				else if (Number.isInteger(img.itemIndex) && section[img.itemIndex]) {
					var swap = section[img.itemIndex];
					section[img.itemIndex] = img;
					section.push(swap);
				}
				else {
					section.push(img);
				}
			}
		}
		
		for (var section in sectionPools) {
			var marginSum = 0;
			for (var img of sectionPools[section]) {
				if (img) {
					if (marginSum) {
						img.style.marginTop = marginSum+"px";
						marginSum = 0;
					}
					shopSectionElements[section].appendChild(img);
				}
				else {
					marginSum += 35;
				}
			}
		}
	}
	populateItemTable();
	
	
	//$("#item-picker").toggle(false);
	$("#item-picker")[0].style.top = "52px";
	$("#item-picker")[0].style.left = "11px";
	
	$("#item-picker-header-button").on("click", 
		function(){ 
			$("#item-picker").toggle();
		});
	$("#item-picker-header-button").one("click",
		function(){
			var picker = document.getElementById("item-picker");
			picker.style.left = "11px"
			picker.style.top = "52px";
		});
	$("#item-picker-header-button").on("dblclick",
		function(){
			var picker = document.getElementById("item-picker");
			picker.style.left = "11px"
			picker.style.top = "52px";
		});
	$("#item-picker-close").on("click", 
		function() {
			$("#item-picker").toggle(false);
		});
})