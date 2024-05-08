alert("Welcome to the love calculator");
prompt("Enter your name");
prompt("Enter your crush's name");

var loveCalculator = Math.random() * 100;
loveCalculator = Math.floor(loveCalculator) + 1;

if (loveCalculator > 70) {
    alert("Your love score is " + loveCalculator + "%, indicating genuine love");
}
if (loveCalculator > 30 && loveCalculator <= 70) {
    alert("Your love score is " + loveCalculator + "%");
}
if (loveCalculator <= 30) {
    alert("Your love score is " + loveCalculator + "%, you go together like oil and water");
}
