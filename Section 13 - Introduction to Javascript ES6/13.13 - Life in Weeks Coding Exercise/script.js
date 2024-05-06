function lifeInWeeks(age) {
    var days = 365;
    var weeks = 52;
    var months = 12;
    var yearsOld = 90;
    var daysOfYourAge = days * age;
    var weeksOfYourAge = weeks * age;
    var monthsOfYourAge = months * age;
    var remainingDays = ((yearsOld * days) - daysOfYourAge);
    var remainingWeeks = ((yearsOld * weeks) - weeksOfYourAge);
    var remainingMonths = ((yearsOld * months) - monthsOfYourAge);
    console.log("You have " + remainingDays + " days, " + remainingWeeks + " weeks, and " + remainingMonths + " months left.");
}
lifeInWeeks(18);
