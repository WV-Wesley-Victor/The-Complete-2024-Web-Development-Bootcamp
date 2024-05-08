var number = 1;

function fibonacciGenerator(n) {
    var sequenceOfNumbers = [];
    for (var i = 0; i < n; i++) {
        if (i === 0) {
            sequenceOfNumbers.push(0);
        } else if (i === 1) {
            sequenceOfNumbers.push(1);
        } else {
            sequenceOfNumbers.push(sequenceOfNumbers[i - 1] + sequenceOfNumbers[i - 2]);
        }
    }
    return sequenceOfNumbers;
}

console.log(fibonacciGenerator(number));
