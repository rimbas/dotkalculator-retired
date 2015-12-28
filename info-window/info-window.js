$(function(){
	$("#info-window").toggle(false);
	
	$("#info-window-header-button").on("click", 
		function(){ 
			$("#info-window").toggle();
		});
	$("#info-window-header-button").one("click",
		function(){
			var picker = document.getElementById("info-window");
			picker.style.left = "11px"
			picker.style.top = "52px";
		});
	$("#info-window-header-button").on("dblclick",
		function(){
			var picker = document.getElementById("info-window");
			picker.style.left = "11px"
			picker.style.top = "52px";
		});
	$("#info-window-close").on("click", 
		function() {
			$("#info-window").toggle(false);
		});
	
	
	
	
	
})