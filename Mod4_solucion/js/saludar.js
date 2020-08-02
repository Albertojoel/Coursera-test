(function(window) {
	var decirHola = "Hello";
	var funSaludar = function (name) {
		console.log(decirHola + " " + name);
	}

	window.funSaludar = funSaludar;

})(window);