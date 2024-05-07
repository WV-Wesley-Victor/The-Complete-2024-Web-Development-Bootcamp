alert("Welcome to my birthday party");
var name = prompt("Enter your first name so I can see if you are on the guest list");

var guestList = ["Wesley", "Maria", "Michele", "Eveline", "Levi", "Everaldo"];

if (guestList.includes(name)) {
    alert("You are on the list welcome");
} else {
    alert("you are not on the list get out of here");
}
