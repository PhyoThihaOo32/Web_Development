// functions are objects

/**
 * A function expression means storing a function inside a variable.
 */
let speak = function () {
  console.log("Good Day.");
};

greet();
speak();

/**
 * Hoisting means JavaScript moves declarations to the top before running the code.
 * hoisting work with function declaration not with function expression
 */

/**
 * A function declaration is the normal way to create a named function.
 */
function greet() {
  console.log("hello there!");
}

/**
 * arrow function expression
 */
const saySomething = () => {
  console.log("say something.");
};

//arguments, parameter

speak = function (name = "pepito", time = "morning") {
  console.log(`good ${time} ${name}`);
};

speak();

// return values, arrow function

// const calcArea = function (radius) {
//   return 3.14 * radius ** 2;
// };

const calcArea = (radius) => 3.14 * radius ** 2;

console.log("area :", calcArea(2.5));

// const greetAgain = function () {
//   return `Hello again`;
// };

const greetAgain = () => "Hello Again";
console.log(greetAgain());

// const bill = function (product, tax) {
//   let total = 0;
//   for (let i = 0; i < product.length; i++) {
//     total += product[i] + product[i] * tax;
//   }
//   return total;
// };

const bill = (product, tax) => {
  let total = 0;
  for (let i = 0; i < product.length; i++) {
    total += product[i] + product[i] * tax;
  }
  return total;
};

console.log(bill([5, 19, 10], 0.2));

// function vs method

let greeting = () => `Hi there.`;
console.log(greeting());

// methods
let name = "phyo";
result = name.toUpperCase();

console.log(result);

// for each methods and callbacks
const myFunc = (callbackFunc) => {
  // do something
  let value = 50;
  callbackFunc(value);
};

// myFunc(function (value) {
//   console.log(value);
// });

myFunc((value) => console.log(value));

let people = ["mario", "luigi", "ryu", "shaun", "chun-li"];

// forEach is a method which iterate over the array
// people.forEach(function (person) {
//   console.log(`hello ${person}`);
// });

const logPerson = (person, index) => {
  console.log(`${index} hello ${person}`);
};

// people.forEach((people, index) => console.log(`${index} hello ${people}`));

people.forEach(logPerson);
