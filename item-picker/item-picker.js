$(function(){
	
	$("#item-picker").toggle(false);
	
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