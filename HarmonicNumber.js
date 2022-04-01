const prompt = require('prompt-sync')();
const number = prompt("Enter the value of n : ");
let harmonic = 0;

for (i = 1; i <= number; i++) {
    harmonic += 1 / i;
}
console.log("N-th Harmonic Number : " + harmonic);