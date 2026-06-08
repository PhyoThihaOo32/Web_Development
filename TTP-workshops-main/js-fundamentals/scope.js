console.log("----------------- SCOPE -----------------");

// Returns a function that increments and returns a count each time it's called
function makeCounter() {
  // TODO: write your code here
  /**
   * let count = 1;
   * return function(){
   * console.log(count)
   * count++;
   * }
   */
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = makeCounter();
console.log(counter2()); // 1  ← independent from counter

//----------------------------------------------------
console.log("\n");

// Returns a function that adds x to whatever number is passed in
function makeAdder(x) {
  // TODO: write your code here
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3)); // 8
console.log(add10(3)); // 13
console.log(add5(7)); // 12

//----------------------------------------------------
console.log("\n");

// Predict the output — does var or let behave differently in a loop?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var:", i), 0);
}
// var: ?
// var: ?
// var: ?

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let:", j), 0);
}
// let: ?
// let: ?
// let: ?

//----------------------------------------------------
console.log("\n");

// --- Hoisting Part 1: var vs. function declaration ---
// Predict what each line logs. Write your prediction as a comment, then run to check.
//
// Key concept: JavaScript "hoists" declarations to the top of their scope before
// running. var is hoisted but its value is not — it starts as undefined.
// Function declarations are hoisted with their full body.

console.log(typeof hoisted); // ?
var hoisted = "hello";
console.log(typeof hoisted); // ?

sayHello(); // ?  ← does this work before the function definition?
function sayHello() {
  console.log("hello from sayHello");
}

// greet();  // uncomment — what error do you get and why?
const greet = () => console.log("hello from greet");

//----------------------------------------------------
console.log("\n");

// --- Hoisting Part 2: var declared mid-block ---
// Predict all three logs before running.
// Remember: the declaration is hoisted, but the assignment is not.

console.log(score); // ?
var score = 42;
console.log(score); // ?

//----------------------------------------------------
console.log("\n");

// --- Hoisting Part 3: function declaration vs. function expression ---
// One of these calls succeeds, one throws a ReferenceError or TypeError.
// Predict which is which and explain why in a comment.

runA(); // ?  ← works or throws?

// runB(); // uncomment this line — what error do you get and why?

function runA() {
  console.log("runA called");
}

var runB = function () {
  console.log("runB called");
};

//----------------------------------------------------
console.log("\n");

// --- Hoisting Part 4: variable shadowing inside a function ---
// The inner var color is hoisted to the TOP of printColor().
// Predict all three logs before running — the middle one is the tricky one.

var color = "blue";

function printColor() {
  console.log(color); // ?  ← the inner var is hoisted; what is its value here?
  var color = "red";
  console.log(color); // ?
}

printColor();
console.log(color); // ?  ← what does the outer variable still hold?
