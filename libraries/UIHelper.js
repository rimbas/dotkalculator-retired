
/**
 * UI helper library
 */

UIHelper = {}
UIHelper.windowList = document.getElementsByClassName("window");
UIHelper.defaultZ = 100;
UIHelper.topZ = UIHelper.defaultZ;
UIHelper.zIndexHandler = function zIndexHandler(event){
	let windows = UIHelper.windowList;
	for (let i = 0, w=windows[i]; i < windows.length; w = windows[++i])
		if (w.style.zIndex > this.style.zIndex)
			w.style.zIndex--;
	this.style.zIndex = UIHelper.topZ;
}
UIHelper.zIndexFocus = function zIndexFocus(element) {
	let windows = UIHelper.windowList;
	for (let i = 0, w=windows[i]; i < windows.length; w = windows[++i])
		if (w.style.zIndex > element.style.zIndex)
			w.style.zIndex--;
	element.style.zIndex = UIHelper.topZ;
}

UIHelper.versionSelectorTemplate = document.createElement("select")
UIHelper.tableSelectorTemplate = document.createElement("select")
UIHelper.searchInputTemplate = document.createElement("input")
UIHelper.tableSelectorList = document.getElementsByClassName("settings-table-selector")
UIHelper.headerElements = []

// Version selector template setup
{
	let versionIndex = [],
		versionTemplate = UIHelper.versionSelectorTemplate;
	versionTemplate.classList.add("settings-base", "settings-version-selector")
	for (let v in DotaData.Versions)
		versionIndex.push(v)
	versionIndex.sort()
	versionIndex.reverse()
	for (let v of versionIndex) {
		var option = document.createElement("option");
		option.text = v;
		versionTemplate.appendChild(option);
	}

	let tableTemplate = UIHelper.tableSelectorTemplate;
	tableTemplate.classList.add("settings-base", "settings-table-selector")

	let searchInput = UIHelper.searchInputTemplate;
	searchInput.type = "search"
	searchInput.spellcheck = false
	searchInput.classList.add("settings-base", "settings-search-input")
}

window.addEventListener("DOMContentLoaded", function UIElementInit(event) {
	UIHelper.WindowContainer = document.getElementById("window-list-container");
	UIHelper.pageHeader = document.getElementById("page-header-buttons");
	UIHelper.rebuildWindowZIndex();
});

document.addEventListener("HeroTableCreated", function heroTableCreate(event) {
	if (event.detail == null)
		throw "No detail supplied!";
	const template = UIHelper.tableSelectorTemplate,
		selectList = UIHelper.tableSelectorList;

	let option = document.createElement("option");
	option.label = event.detail.name;
	option.value = event.detail.ID;

	template.appendChild(option.cloneNode());
	for (let element of selectList)
		element.appendChild(option.cloneNode());
});

/**
 * @desc Recreates the css z-index for window elements
 */
UIHelper.rebuildWindowZIndex = function() {
	let windows = UIHelper.windowList;
	for (let i = 0, w=windows[i]; i < windows.length; w = windows[++i])
		w.style.zIndex = UIHelper.defaultZ + i;
	UIHelper.topZ = UIHelper.defaultZ + windows.length - 1;
}

/**
 * Creates an UI window with described options
 */
UIHelper.addWindow = function(options) {
	let win = document.createElement("div");
	win.classList.add("window");
	win.style.zIndex = ++UIHelper.topZ;
	win.style.left = "11px";
	win.style.top = "52px";
	win.style.display = "none";
	win.addEventListener("mousedown", UIHelper.zIndexHandler);
	if (options.windowID)
		win.id = options.windowID;

	let bar = document.createElement("div");
	bar.classList.add("drag-bar");
	bar.textContent = options.title || "New Window";
	win.appendChild(bar);

	let close = document.createElement("div");
	close.classList.add("drag-bar-close");
	close.addEventListener("click", function(e){win.style.display="none"});
	bar.appendChild(close)

	if (options.headerButton !== undefined || options.headerButtonText) {
		let button, inPlace;
		if (options.headerButton instanceof String)
			button = document.getElementById(headerButton), inPlace = true;
		else if (options.headerButton instanceof HTMLButtonElement)
			button = options.headerButton, inPlace = true;
		else
			button = document.createElement("button");

		button.textContent = options.headerButtonText;
		button.onclick = function(){
			UIHelper.zIndexFocus(win);
			win.style.display = win.style.display == "none" ? null : "none";
		};
		button.ondblclick = function(){
			win.style.left="11px";
			win.style.top="52px";
			win.style.display = null;
			UIHelper.zIndexFocus(win);
		};

		if (options.headerButton == true ) {
			let header = UIHelper.pageHeader,
				before = header.children[options.headerButtonPos];
			UIHelper.pageHeader.insertBefore(button, before);
		}
	}

	if (options.populationCallback)
		options.populationCallback(win)

	UIHelper.WindowContainer.appendChild(win)
	$(win).draggable({
		handle: ".drag-bar",
		cursor: "grabbed",
		containment: "document",
	})
	return win
}

UIHelper.appendSettings = function(win, options) {
	if (!options) throw "No setting options supplied!";
	let wrapper = document.createElement("div")
	wrapper.classList.add("settings-wrapper")
	if (options.version) {
		let versionLabel = document.createElement("label")
		versionLabel.textContent = "Dota 2 version: ";
		versionLabel.classList.add("settings-label");
		wrapper.appendChild(versionLabel);
		var versionSelector = UIHelper.versionSelectorTemplate.cloneNode(true);
		wrapper.appendChild(versionSelector);
		wrapper.appendChild(document.createElement("br"))
	}
	if (options.table) {
		let tableLabel = document.createElement("label")
		tableLabel.textContent = "Target table: ";
		tableLabel.classList.add("settings-label");
		wrapper.appendChild(tableLabel);
		var tableSelector = UIHelper.tableSelectorTemplate.cloneNode(true);
		wrapper.appendChild(tableSelector);
		wrapper.appendChild(document.createElement("br"))
	}
	if (options.search) {
		let searchLabel = document.createElement("label")
		searchLabel.textContent = "Search: ";
		searchLabel.classList.add("settings-label");
		wrapper.appendChild(searchLabel);
		var searchInput = UIHelper.searchInputTemplate.cloneNode(true);
		wrapper.appendChild(searchInput);
		wrapper.appendChild(document.createElement("br"))
	}
	win.appendChild(wrapper)
	return { wrapper: wrapper, version: versionSelector, table: tableSelector,
		search: searchInput
	};
}

UIHelper.precisionNumber = function(number, precision) {
	return number.toFixed(precision).toString().replace(/\.?0+$/, "")
}
