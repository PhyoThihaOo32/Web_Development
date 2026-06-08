/**
 * JavaScript Foundations Demo
 */

/** ==========
 * DATA TYPES
 * ========== */

// Primitives — the basic building blocks of all data in JavaScript
const str = "hello"; // String
const num = 42; // Number
const dec = 3.14; // Number (no separate float type)
const bool = true; // Boolean
let nothing = null; // null — intentional absence of value
let notAssigned; // undefined — declared but never assigned

// typeof tells you the type at runtime
console.log(typeof str); // "string"
console.log(typeof num); // "number"
console.log(typeof bool); // "boolean"
console.log(typeof notAssigned); // "undefined"
console.log(typeof nothing); // "object" ← famous JS quirk, null is not really an object

// null vs undefined in practice
let user = null; // we know user exists, but has no value yet
let score; // we haven't set this at all
console.log(user); // null
console.log(score); // undefined

/** =============
 * VARIABLES
 * ============= */

// Three ways to declare — prefer const, use let when you need to reassign, avoid var
const personName = "Alex"; // block-scoped, cannot reassign
// personName = "fido dido";
// console.log(personName); // error
let age = 25; // block-scoped, can reassign
// var city = 'New York';  // function-scoped — avoid this

age = 26; // ✅ let allows reassignment
// personName = "Sam";    // ❌ TypeError: Assignment to constant variable

// const doesn't mean the value is frozen — it means the binding can't change
const myNums = [1, 2, 3];
myNums.push(4); // ✅ works — we're mutating the array, not reassigning myNums
// myNums = [5, 6]; // ❌ TypeError

console.log(personName, age); // "Alex" 26
console.log(myNums); // [1, 2, 3, 4]

/** ================
 * TYPE COERCION
 * ================ */

// JS automatically converts types — this trips people up
console.log(2 + 2); // 4     (number + number)
console.log("2" + 2); // "22"  (+ with a string → concatenation)
console.log(2 + "2"); // "22"
console.log("2" - 2); // 0     (- forces string → number)
console.log("6" / "2"); // 3     (both coerced to numbers)

// == vs === — always use ===
console.log(0 == false); // true  (coercion — dangerous, avoid ==)
console.log(0 === false); // false (strict: different types)
console.log("" == false); // true  (coercion)
console.log("" === false); // false

// Six falsy values — everything else is truthy
// 0, "", null, undefined, NaN, false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(null)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)); // false

// Truthy surprises
console.log(Boolean("0")); // true  — non-empty string
console.log(Boolean([])); // true  — empty array
console.log(Boolean({})); // true  — empty object

/** ==============
 * CONDITIONALS
 * ============== */

const examScore = 82;

if (examScore >= 90) {
  console.log("Grade: A");
} else if (examScore >= 80) {
  console.log("Grade: B"); // this runs
} else if (examScore >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: Below C");
}

// Ternary — shorthand for a simple if/else
// template - condition ? run if truthy : run if falsy
const result = examScore >= 70 ? "Pass" : "Fail";
console.log(result); // "Pass"

// Truthy/falsy in conditionals
let username = "";
if (username) {
  console.log("Welcome,", username);
} else {
  console.log("No username provided"); // runs — empty string is falsy
}

/** ===========
 * FUNCTIONS
 * =========== */

// 1. Function Declaration — hoisted, can call it before it's defined in the file
console.log(greet("Taylor")); // "Hello, Taylor!" - this works becuase function is hoisted
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Taylor")); // "Hello, Taylor!"

// 2. Function Expression — stored in a variable, not hoisted - can only call this function after it has been declared
const double = function (n) {
  return n * 2;
};
console.log(double(5)); // 10

// 3. Arrow Function — shorter syntax (ES6)
const square = (n) => n * n; // single expression → implicit return if a one liner
const add = (a, b) => a + b;
console.log(square(4)); // 16
console.log(add(3, 7)); // 10

// Functions can call other functions
function first() {
  console.log("i am first");
  third();
  return "i am a champ!";
}

function second(fn) {
  console.log("i am second");
  fn("working!"); // console.log("working!")
}

function third() {
  console.log("i am third");
}

first(); // logs "i am first", then "i am third"
second(console.log); // logs "i am second", then "working!"
console.log(third()); // logs "i am third", then undefined (no return value)

// Default parameters
function greetUser(name = "stranger") {
  return `Hey, ${name}!`;
}
console.log(greetUser()); // "Hey, stranger!"
console.log(greetUser("Morgan")); // "Hey, Morgan!"

/** =========
 * OBJECTS
 * ========= */

// An object groups related data and behavior under one name
const person = {
  firstName: "Jamie",
  lastName: "Rivera",
  age: 28,
  isStudent: true,
};

// Two ways to access properties
console.log(person.firstName); // dot notation
console.log(person["lastName"]); // bracket notation — useful with dynamic keys

// Add, update, and delete properties
person.email = "jamie@example.com"; // add
person.age = 29; // update
delete person.isStudent; // remove
console.log(person);

// Objects can hold methods — they're basically functions stored as properties
const calculator = {
  value: 0,
  add(n) {
    this.value += n;
  },
  reset() {
    this.value = 0;
  },
};

calculator.add(5);
calculator.add(3);
console.log(calculator.value); // 8

// Nested objects
const student = {
  name: "Riley",
  address: {
    city: "Brooklyn",
    zip: "11201",
  },
};
console.log(student.address.city); // "Brooklyn"

// Looping through an object's keys and values
const car = {
  make: "Toyota",
  model: "Camry",
  year: 2022,
};

for (let key in car) {
  console.log(key + ":", car[key]);
  // make: Toyota
  // model: Camry
  // year: 2022
}

// Destructuring — pull out properties into variables
const { firstName, lastName } = person;
console.log(firstName, lastName); // "Jamie" "Rivera"

/** ========
 * ARRAYS
 * ======== */

// An ordered list of values — index starts at 0
//                   0         1          2
const fruits = ["apple", "banana", "cherry"];

// Access by index
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "cherry"
console.log(fruits[3]); // undefined
console.log(fruits.length); // 3

// Common mutation methods
fruits.push("mango"); // add to end
fruits.pop(); // remove from end
fruits.unshift("kiwi"); // add to front
fruits.shift(); // remove from front
console.log(fruits); // ["apple", "banana", "cherry"]

// includes and find
console.log(fruits.includes("banana")); // true
console.log(fruits.find((f) => f.length > 6)); // "banana"

// Spread — copy or merge arrays without mutating the original
const moreFruits = [...fruits, "grape", "lime"];
console.log(moreFruits);

/** ========
 * LOOPS
 * ======== */

// for loop — classic, gives you full control over the index
for (let i = 0; i < 3; i++) {
  console.log("count:", i); // 0, 1, 2
}

// for...of — clean way to loop through arrays (values only)
for (let fruit of fruits) {
  console.log(fruit);
}

// for...in — loops through object keys (also works on arrays, but use for...of for arrays)
for (let key in car) {
  console.log(key); // make, model, year
}

// while loop — runs as long as condition is true
let counter = 0;
while (counter < 3) {
  console.log("while:", counter);
  counter++;
}
