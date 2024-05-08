alert("BMI Calculator");

var weight = prompt("How much do you weigh?");
var height = prompt("What is your height?");

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    bmi = bmi.toFixed(2);

    if (bmi < 18.5) {
        var message = "Your BMI is " + bmi + ", so you are underweight.";
        return message;
    }
    if (bmi >= 18.5 && bmi < 24.9) {
        var message = "Your BMI is " + bmi + ", so you have a normal weight.";
        return message;
    }
    if (bmi >= 24.9) {
        var message = "Your BMI is " + bmi + ", so you are overweight.";
        return message;
    }
}
var message = bmiCalculator(weight, height);

alert(message);
