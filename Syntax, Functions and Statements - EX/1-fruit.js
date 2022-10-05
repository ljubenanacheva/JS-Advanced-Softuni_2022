function solve(fruit,weightGrams,pricePerKg){
let weightKg=weightGrams/1000;
let neededMoney=weightKg*pricePerKg;
console.log(`I need $${neededMoney.toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${fruit}.`);
}

solve('orange', 2500, 1.80);