var weight = 60;
var height = 1.7;

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}
var bmi = bmiCalculator(weight, height);

console.log("Your bmi is " + bmi);
