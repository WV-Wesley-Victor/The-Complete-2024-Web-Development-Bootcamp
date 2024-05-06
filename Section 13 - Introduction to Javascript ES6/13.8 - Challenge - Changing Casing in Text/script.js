var name = prompt("What is your first name?");
var capitalLetter = name.slice(0, 1);
var remainderOfName = name.slice(1, name.length);
alert("Hello " + capitalLetter.toUpperCase() + remainderOfName.toLowerCase());
