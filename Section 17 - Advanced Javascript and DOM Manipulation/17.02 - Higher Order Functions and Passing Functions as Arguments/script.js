function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2);
}

console.log(calculator(4, 5, addition));
console.log(calculator(5, 4, subtraction));
console.log(calculator(3, 4, multiplication));
console.log(calculator(10, 2, division));
