/* 
	Table settings
*/
$(function(){

	function createEmptyList(label) {
		var div = document.createElement("div");
		div.className = "table-settings-list-container";
		document.getElementById("table-settings-base-wrapper").appendChild(div);
		
		var span = document.createElement("span");
		span.innerHTML = label;
		div.appendChild(span);
		
		var ul = document.createElement("ul");
		ul.className = "table-settings-items";
		div.appendChild(ul);
		
		return ul;
	}
	
	var groupLists = {},
		allListItems = {},
		activeItems = [];
	
	for (var group in HeroTable.evaluatorGroups) 
	{
		var array = HeroTable.evaluatorGroups[group];
		groupLists[group] = createEmptyList(group);
		
		for (var i in array) 
		{
			var object = array[i],
				li = document.createElement("li");
			li.textContent = object.fullName;
			li.evaluatorId = object.nameId;
			li.className = "ui-state-default";
			li.homeList = groupLists[group];
			allListItems[object.nameId] = li;
			groupLists[group].appendChild(li);
		}
	}
	
	function populateList() 
	{
		for( var id in allListItems) {
			var item = allListItems[id];
			if (item.parentElement !== item.homeList) {
				item.parentElement.removeChild(item);
				item.homeList.appendChild(item);
			}
		}
		
		for(var i in activeItems) {
			var activeItem = activeItems[i];
			activeItem.parentElement.removeChild(activeItem);
			activeItem.homeList.appendChild(activeItem);
		}
		
		var selector = document.getElementById("table-settings-table-selector"),
			tableRef = HeroTable.tableList[selector.value],
			activeListElement = document.getElementById("table-settings-items-active"),
			activeEvaluators = tableRef.getEvaluators();
		for (i = 0; i < activeEvaluators.length; i++){
			var evaluator = activeEvaluators[i],
				element = allListItems[evaluator];
			element.parentElement.removeChild(element);
			activeListElement.appendChild(element);
			activeItems.push(element);
		}
	}
	
	$("#table-settings").toggle(false);
	$("#table-settings-header-button").on("click", 
		function(){ 
			$("#table-settings").toggle();
		});
	$("#table-settings-close").on("click", 
		function() {
			$("#table-settings").toggle(false);
			populateList();
		});
	$("#table-settings-header-button").one("click",
		function(){
			var picker = document.getElementById("table-settings");
			picker.style.left = "11px"
			picker.style.top = "52px";
			populateList();
		});
	$("#table-settings-header-button").on("dblclick",
		function(){
			var picker = document.getElementById("table-settings");
			picker.style.left = "11px"
			picker.style.top = "52px";
			populateList();
		});
	
	$("#table-settings-items-active").sortable({
		connectWith: "#table-settings-items-bin"
	});
	$(".table-settings-items").sortable({
		connectWith: "#table-settings-items-active"
	});
	$("#table-settings-items-bin").sortable({
		receive: function(e,u){
			var transfer = u.item[0];
			transfer.parentElement.removeChild(transfer);
			transfer.homeList.appendChild(transfer);
		}
	});
	
	$("#table-settings-submit").button();
	$("#table-settings-submit").on("click", function(){
		var selector = document.getElementById("table-settings-table-selector"),
			tableRef = HeroTable.tableList[selector.value],
			list = document.getElementById("table-settings-items-active"),
			listItems = list.childNodes,
			columns = [];
		for (var i = 0; i < listItems.length; i++) {
			columns.push(listItems[i].evaluatorId);
		}
		tableRef.setColumnList(columns);
	});
});


