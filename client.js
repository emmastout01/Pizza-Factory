let log = 'sourced!!'
console.log(`script is ${log}`);

const BASE_PRICE = 10.99;
const TOPPING_PRICE = 0.99;
const TAX = 0.07;

//Constructs a Pizza object 
let Pizza = function(...ingredients) {
    this.numberOfToppings = 0;
    for (let i = 0; i<ingredients.length; i++) {
        this.numberOfToppings ++;
    }
    console.log(`ingredients: ${ingredients}`);
    console.log(`numberOfToppings: ${this.numberOfToppings}`);
}

var newPizza = new Pizza('peppers', 'olives');
var anotherPizza = new Pizza('tomatoes');
var yetAnotherPizza = new Pizza('garlic', 'cheese');
console.log('new pizza', newPizza);

let addPizza = (...pizzasToAdd) => {
    console.log(pizzasToAdd);
    let costOfPizza = pizzasToAdd.length * BASE_PRICE;
    console.log('cost of pizza', costOfPizza);
    let costOfToppings = 0;
    for (let i = 0; i<pizzasToAdd.length; i++) {
        costOfToppings += pizzasToAdd[i].numberOfToppings * TOPPING_PRICE;
    }
    console.log('cost of toppings', costOfToppings);
    let totalCost = (costOfPizza + costOfToppings) * (1+TAX);
    console.log('total cost', totalCost)
    return totalCost;
}

let processOrder = (costOfOrder) => {
    let revenue = 0;
    revenue += costOfOrder;
    console.log('revenue:', revenue);
    return revenue;
}

console.log('logging the whole function', processOrder(addPizza(newPizza, anotherPizza, yetAnotherPizza)));