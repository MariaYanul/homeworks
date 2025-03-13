let min = 100;
let max = 1000;

let randomInRange = Math.floor(Math.random() * (max - min)) + min;

function countNumbersInRange(min, max) {
    if (typeof min !== 'number' || typeof max !== 'number') {
      return "Invalid input: min and max must be numbers.";
    }
  
    if (min > max) {
      return "Invalid input: min cannot be greater than max.";
    }
    
    return max - min + 1;
  }

let count = countNumbersInRange(min, max);

function countEvenOdd(min, max) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = min; i <= max; i++) {
      if (i % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return { even: evenCount, odd: oddCount } 
  }

  let quantityOfEvenAndOddNum = countEvenOdd(min, max);
  let percentageEven = (quantityOfEvenAndOddNum.even / count * 100).toFixed(1);
  let percentageOdd = (quantityOfEvenAndOddNum.odd / count * 100).toFixed(1);

console.log (`-----------------------------------------------------------------`);
console.log (`The random number is - ${randomInRange}`);
console.log (`-----------------------------------------------------------------`);
console.log (`The number of integers in the range [${min}, ${max}] is: ${count}`);
console.log (`-----------------------------------------------------------------`);
console.log (`The range has ${quantityOfEvenAndOddNum.even} of even numbers and ${quantityOfEvenAndOddNum.odd} of odd numbers`);
console.log (`-----------------------------------------------------------------`);
console.log (`Percentage of even numbers is ${percentageEven}%, percentage of odd numbers is ${percentageOdd}%`);
console.log (`-----------------------------------------------------------------`);
