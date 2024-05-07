alert("Welcome to the love calculator");
prompt("Enter your name");
prompt("Enter your crush's name");
var loveCalculator = Math.random() * 100;
loveCalculator = Math.floor(loveCalculator) + 1;
if (loveCalculator > 70) {
    alert("Your love score is " + loveCalculator + "%, indicating genuine love");
} else {
    alert("Your love score is " + loveCalculator + "%");
}
