/* =========================================================
   JAVASCRIPT BASICS NOTES
   =========================================================

   Important vocabulary:

   Variable:
   A named container that stores data.

   Property:
   A value that belongs to something.
   Example:
     fullName.length
   Here, length is a property of the string.

   Method:
   A function that belongs to something.
   Example:
     fullName.toUpperCase()
   Here, toUpperCase() is a method of the string.

   Function / Method Call:
   When you use parentheses (), you are calling or running it.
   Example:
     console.log()
     email.includes("@")

   Argument:
   A value you pass into a function or method.
   Example:
     email.includes("@")
   Here, "@" is the argument.

   Return value:
   The result that comes back from a method or function.
   Example:
     email.includes("@") returns true or false.
========================================================= */

/* =========================================================
   1. VARIABLES
========================================================= */

// let: use when the value can change later
let age = 24;
let year = 2023;

console.log(age);
console.log(year);
console.log(age, year);

// Reassigning a let variable
age = 30;
console.log(age);

// const: use when the value should stay fixed
const point = 233;
// point = 445; // Error: cannot reassign a const variable
console.log(point);

// var: older way to create variables
// Modern JavaScript usually uses let and const instead
var scoreValue = 34;
console.log(scoreValue);

/* =========================================================
   2. DATA TYPES
========================================================= */

/*
  Common JavaScript data types:

  number      - 1, 2, 3.14
  string      - "hello", "Phyo"
  boolean     - true / false
  null        - intentionally empty value
  undefined   - variable declared but not assigned
  object      - complex data: arrays, objects, dates
  symbol      - special unique value, often used with objects
*/

/* =========================================================
   3. STRINGS
========================================================= */

// A string is text inside quotes
console.log("hey you!");

let email = "someone@ymail.com";

// String concatenation means joining strings together
let firstName = "Mike";
let lastName = "Drake";
let fullName = firstName + " " + lastName;

console.log(fullName); // Mike Drake

// Getting characters by index
// Index starts at 0
console.log(fullName[0]); // M

// length is a PROPERTY
// Property means a value that belongs to something
// No parentheses because we are not calling a function
let strLen = fullName.length;
console.log(strLen);

// toUpperCase() is a METHOD
// Method means a function that belongs to something
// Parentheses () means we are calling/running the method
console.log(fullName.toUpperCase());

// toLowerCase() returns a new lowercase string
let result = fullName.toLowerCase();
console.log(result);

// indexOf() is a string method
// It returns the position/index of the first matching character
let index = email.indexOf("@");
console.log(index);

/* =========================================================
   4. COMMON STRING METHODS
========================================================= */

email = "mario@net.com";

// lastIndexOf()
// Finds the last position of a character
// Argument: "a"
// Return value: index number
result = email.lastIndexOf("a");
console.log(result);

// slice(start, end)
// Cuts part of a string
// First argument: where to start
// Second argument: where to stop, but not included
result = email.slice(0, 2);
console.log(result); // ma

// substr(start, length)
// First argument: where to start
// Second argument: how many characters to take
// Note: slice() is more commonly used now
result = email.substr(4, 10);
console.log(result);

// replace(oldValue, newValue)
// Replaces the first matching value only
result = email.replace("m", "w");
console.log(result);

// includes()
// Checks if a string contains specific text
// Returns true or false
result = email.includes("@");
console.log(result); // true

// Important:
// Methods usually do something and return a result.
// Example:
// email.includes("@") returns true or false.
// email.toUpperCase() returns a new uppercase string.

/* =========================================================
   5. NUMBERS AND MATH OPERATORS
========================================================= */

let radius = 10;
const PI = 3.145;

console.log(radius, PI);

/*
  Math operators:

  +   addition
  -   subtraction
  *   multiplication
  /   division
  **  power
  %   remainder / modulus
*/

console.log(10 / 2); // 5

// % gives the remainder
let mathResult = radius % 3;
console.log(mathResult);

// Area of a circle: PI * radius squared
mathResult = PI * radius ** 2;
console.log(mathResult);

/*
  Order of operations:

  B I D M A S

  Brackets
  Indices / powers
  Division
  Multiplication
  Addition
  Subtraction
*/

mathResult = 2 - 4 + 5 * (10 - 3) ** 2;
console.log(mathResult);

// Increment means increase by 1
let count = 2;
count++;
console.log(count);

// Shortcut operators
// count *= 2;  same as count = count * 2
// count /= 2;  same as count = count / 2
// count += 2;  same as count = count + 2
// count -= 2;  same as count = count - 2

// NaN means Not a Number
console.log(5 / "hello"); // NaN
console.log(5 * "hello"); // NaN

result = "the blog has " + count + " likes.";
console.log(result);

/* =========================================================
   6. TEMPLATE STRINGS
========================================================= */

const title = "best reads of 2019";
const author = "Mario";
const likes = 30;

// Old way: string concatenation
result =
  "The blog called " + title + " by " + author + " has " + likes + " likes.";

console.log(result);

// Modern way: template string
// Use backticks ` `
// Use ${} to insert variables
let templateString = `The blog called "${title}" by ${author} has ${likes} likes.`;
console.log(templateString);

// Creating HTML templates
let html = `<h2>${title}</h2>`;
console.log(html);

/* =========================================================
   7. ARRAYS
========================================================= */

// An array stores multiple values in one variable
let ninjas = ["gio", "pio", "dio"];

// Array index starts at 0
console.log("third ninja is:", ninjas[2]);

// Change an array element
ninjas[2] = "yolo";
console.log(`third ninja is now ${ninjas[2]}`);

let ages = [20, 22, 23, 24];
console.log(ages[2]);

// Arrays can store different data types
// But usually, it is better to keep the same type together
let random = ["krist", "homer", 30, 21.99];
console.log(random);

/* =========================================================
   8. ARRAY PROPERTIES AND METHODS
========================================================= */

// length is an ARRAY PROPERTY
// It tells us how many elements are in the array
console.log(`length of ninjas array: ${ninjas.length}`);

// join()
// Array method
// Joins array elements into one string
// Argument: separator
result = ninjas.join(" - ");
console.log(result);

// indexOf()
// Array method
// Finds the index position of an element
result = ninjas.indexOf("gio");
console.log(result);

// concat()
// Array method
// Joins two arrays together
// Returns a NEW array
result = ninjas.concat([
  "bob-cat",
  "time-square-pizza-finder",
  "hysteria maggie",
]);

console.log(result);

// push()
// Array method
// Adds a new element to the end of the original array
// Returns the new length of the array
result = ninjas.push("final boss");

console.log(ninjas);
console.log(result);

// pop()
// Array method
// Removes the last element from the original array
// Returns the removed element
result = ninjas.pop();

console.log(ninjas);
console.log(result);

/* =========================================================
   9. NULL AND UNDEFINED
========================================================= */

// null means intentionally empty
let myAge = null;

console.log(myAge); // null
console.log(myAge + 3); // 3 because null acts like 0 in math
console.log(`age is ${myAge}`);

// undefined means no value has been assigned yet
let city;
console.log(city); // undefined

/* =========================================================
   10. BOOLEANS AND COMPARISONS
========================================================= */

// Boolean values are true or false
console.log(true, false, "true", "false");

// Some methods return booleans
email = "luigi@mail.com";
let names = ["pop", "hop", "job"];

// includes()
// Checks if an array contains a value
// Returns true or false
result = names.includes("pop");
console.log(result); // true

// includes() can also check if a string contains text
console.log(email.includes("@")); // true

// Comparison operators
age = 25;

console.log(age == 25); // true
console.log(age == 30); // false
console.log(age != 35); // true
console.log(age > 20); // true
console.log(age < 20); // false
console.log(age <= 25); // true
console.log(age >= 25); // true

let myName = "phyo";

console.log(myName == "phyo"); // true
console.log(myName == "Phyo"); // false

// Strings are compared alphabetically
console.log(myName > "qhyo"); // false
console.log(myName < "qhyo"); // true

// Lowercase letters are greater than uppercase letters in JavaScript comparison
console.log(myName > "Phyo"); // true

/* =========================================================
   11. LOOSE VS STRICT COMPARISON
========================================================= */

age = 25;

// Loose comparison
// == checks value only
// JavaScript may convert the type automatically
console.log("loose comparison");
console.log(age == "25"); // true
console.log(age != "25"); // false

// Strict comparison
// === checks value AND type
// This is usually better to use
console.log("strict comparison");
console.log(age === 25); // true
console.log(age === "25"); // false

console.log(age !== 25); // false
console.log(age !== "25"); // true

/* =========================================================
   12. TYPE CONVERSION
========================================================= */

// Convert string to number
let score = "100";

console.log(score + 1); // "1001" because score is a string

score = Number(score);
console.log(score + 12); // 112

console.log(typeof score); // number

// Converting invalid string to number gives NaN
result = Number("hello");
console.log(result); // NaN

// Convert number to string
let num = 150;
num = String(num);

console.log(num, typeof num); // string

// Convert to boolean
result = Boolean(NaN);

console.log(result, typeof result); // false boolean

/* =========================================================
   QUICK REVIEW
========================================================= */

/*
  Property:
    A value that belongs to an object, string, or array.
    Example:
      fullName.length
      ninjas.length

  Method:
    A function that belongs to an object, string, or array.
    Example:
      fullName.toUpperCase()
      email.includes("@")
      ninjas.push("final boss")

  Argument:
    A value passed into a method or function.
    Example:
      email.includes("@")
      "@" is the argument.

  Return value:
    The result given back by a method or function.
    Example:
      email.includes("@") returns true.
      ninjas.pop() returns the removed element.

  Parentheses:
    If you see (), it usually means a function or method is being called.
*/
