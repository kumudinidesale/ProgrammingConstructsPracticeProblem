//simple function

function addition(num1, num2) {
    let sum = num1 + num2
    return sum;
    }
let result = addition(10, 20) 
console.log("Addition is:", result)

function subtraction(num1, num2) {
    let sub = num1 - num2
    return sub;
    }
let result1 = subtraction(30, 20) 
console.log("Subtraction is:", result1)

function multiplication(num1, num2) {
    let multi = num1 * num2
    return multi;
    }
let result2 = multiplication(30, 20) 
console.log("Multiplication is:", result2)

function division(num1, num2) {
    let div = num1 / num2
    return div;
    }
let result3 = division(30, 20) 
console.log("Division is:", result3)


//arrow function
//with one param
const displayNumber = number => console.log("Number is",number)
displayNumber(60)

//with two param
const substraction1 = (num1, num2) => num1 - num2;
let substractionResult = substraction1(30, 10)
console.log("Substraction is :", substractionResult)

const addition1 = (num1, num2) => num1 + num2;
let additionResult = addition1(30, 10)
console.log("Addition is :", additionResult)

const multiplication1 = (num1, num2) => num1 * num2;
let multiplicationResult = multiplication1(30, 10)
console.log("Multiplication is :", multiplicationResult)

const division1 = (num1, num2) => num1 / num2;
let divisionResult = division1(30, 10)
console.log("Division is :", divisionResult)