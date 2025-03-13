let services = {
    "haircut": 60,
    "shave": 80,
    "Washing head": 100
    };
    
services['Breaking glass'] = 20;

function countServicesSum(obj) {
    let sum = 0;
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        sum += obj[key];
      }
    }
    return sum;
  }

let servicesSum = countServicesSum(services);


function findMinMax(obj) {
    let services = Object.values(obj);
    let minPrice = Math.min(...services);
    let maxPrice = Math.max(...services);
  
    return { min: minPrice, max: maxPrice };
  }
  
let result = findMinMax(services);

console.log("Total price:", servicesSum);
console.log("Minimum price:", result.min);
console.log("Maximum price:", result.max);