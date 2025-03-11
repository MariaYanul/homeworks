const prompt = require("prompt-sync")();

let number = prompt("Ввести число - ");
let expon = prompt("Ввести значення степеня - ");
let result = exponent(number, expon);

function exponent(number, expon) {
  let result = 1;
  for (let i = 0; i < expon; i++) {
    result *= number;
  }
  return result;
}

console.log(`${number} в степені ${expon} це: ${result}`);
