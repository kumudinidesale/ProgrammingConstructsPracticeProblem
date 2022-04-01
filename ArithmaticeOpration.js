const prompt = require('prompt-sync')();
console.log("Enter 2 numbers to perform arithmetic operations")
const num1 = prompt("Enter First Number : ");
const num2 = prompt("Enter Second Number : ");

let result1 = num1 + num2;
console.log(result1);

let result2 = num1 - num2;
console.log(result2);

let result3 = num1 / num2;
console.log(result3);

let result4 = num1 * num2;
console.log(result4);