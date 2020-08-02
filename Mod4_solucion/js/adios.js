(function(window) {
	var decirCiao = "Good Bye";
	var funCiao = function (name) {
  		console.log(decirCiao + " " + name);
	}
	
	window.funCiao = funCiao;

})(window);