(function () {

var nombres = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < nombres.length; i++) {
  var firstLetter = nombres[i].charAt(0).toLowerCase();

  if (firstLetter === 'j') {
    funCiao(nombres[i]);
  }
  else {
    funSaludar(nombres[i]);
  }
}

})();
