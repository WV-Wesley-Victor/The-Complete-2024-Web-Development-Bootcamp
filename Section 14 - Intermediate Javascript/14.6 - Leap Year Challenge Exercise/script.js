var year = 2000;

function leapYear(year) {
    if (year % 4 === 0 && year % 100 > 0 && year % 400 === 0) {
        var response = "Leap year.";
        return response;
    } else {
        var response = "Not leap year.";
        return response;
    }
}
var response = leapYear(year);

console.log(response);
