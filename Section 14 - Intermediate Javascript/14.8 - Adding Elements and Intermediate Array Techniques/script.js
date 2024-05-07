var output = [];
var count = 1;

function fizzBuzz() {
    output.push(output.length + count);
    if (output.length % 3 === 0 && output.length % 5 === 0) {
        output.pop();
        output.push("FizzBuzz");
        return console.log(output);
    } else if (output.length % 3 === 0) {
        output.pop();
        output.push("Fizz");
        return console.log(output);
    } else if (output.length % 5 === 0) {
        output.pop();
        output.push("Buzz");
        return console.log(output);
    } else {
        return console.log(output);
    }
}

fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
fizzBuzz();
