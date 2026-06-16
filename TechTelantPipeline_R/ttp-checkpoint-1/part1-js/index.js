// ============================================================
// PART 1 — JavaScript Basics
//
// How to run your code:
//   Open the index.html file in this folder with Live Server.
//   Your console.log output will appear in the browser's DevTools console.
//   Open DevTools: right-click the page → Inspect → Console tab
//   (or Cmd+Option+J on Mac / Ctrl+Shift+J on Windows)
//
//   Every time you save index.js, Live Server reloads the page
//   and re-runs your code automatically.
//
//   IMPORTANT — switching parts:
//   Each part has its own index.html. When you move to Part 2 or Part 3,
//   stop Live Server and restart it pointing at that part's folder.
//   Running the wrong HTML file means your changes won't show up.
//
// Instructions:
//   - Write your code directly below each prompt
//   - Every task that produces a value must use console.log to show it
//       ex: console.log(yourAnswer)
//   - For EXPLAIN prompts, write your answer as a comment directly below
//       ex: // answer: write your answer here...
// ============================================================

// ------------------------------------------------------------
// SECTION A — Variables & Math
// ------------------------------------------------------------
console.log("[ SECTION A — Variables & Math ]");

// A1.
// Declare a variable using const and assign it the number 100.
// Declare a variable using let and assign it the number 45.
// Log both.
const num = 100;
let age = 45;
console.log(num);
console.log(age);

// A2.
// Using only those two variables, write a single expression that adds them,
// subtracts 20, multiplies by 2, and divides by 5.
// Log the result.
// Note: grouping/ postfix unary + - !  exponentiation ** multiplicative * / % additive +, -
console.log(((num + age - 20) * 2) / 5);

// A3.
// Reassign your let variable to a different number. Log it.
// Now try to reassign your const variable. What happens?
age = 46; // one year older
// num = 101; // error: can't reassign to const variable

// EXPLAIN: What is the difference between let and const?
//          Write your answer as a comment below.
//
/**
 * Answer: let can reassign the value
 *          const we can't reassign the value but we can still mutate the value
 *          - only the binding can't change (meaning the value itself cannot point to a new value.)
 * const numArr = [1, 2, 3];
 * numArr.push(4);
 * console.log(numArr);
 */

// A4.
// Using the % operator, write an expression that tells you
// whether the number 47 is even or odd.
// Log the result and a message that says "even" or "odd".

console.log(47 % 2 === 0 ? "even" : "odd");

// EXPLAIN: What does the % operator return?
//          Why is it useful for checking even/odd?

//          answer: % operator the remainder. It is useful for checking even/odd because when we divide the value with 2
//                  and by checking the remainder (1 or 0) we can tell if the value is even or odd.

// ------------------------------------------------------------
// SECTION B — Strings (reference to string methods: https://www.w3schools.com/jsref/jsref_obj_string.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION B — Strings ]");

// The following string is provided for this section. You may use methods or compute manually.
const rawInput = "   JavaScript is AWESOME   ";

// B1.
// Log the string with all leading and trailing spaces removed (extra spaces in front and end of the text).
console.log(rawInput.trim()); // trim() remove the extra spaces from the begining and end of the string

// B2.
// Log the string converted to all lowercase.
console.log(rawInput.toLowerCase()); // toLowerCase() - return new string(doesn't change the original string) and convert to string to lower case

// B3.
// Log the number of characters in rawInput (including spaces).
console.log(rawInput.length); // length is the property of the string - get the length value of the string

// B4.
// Log whether rawInput contains the word "awesome" (lowercase).
// It should return true.
console.log(rawInput.includes("awesome")); // includes() is a method - take an argument check if the arg(value) is in the string

// B5.
// Log the first 10 characters of rawInput.
for (let i = 0; i < 10; i++) {
  console.log(rawInput[i]);
}
console.log(rawInput.trim().slice(0, 10));

// B6.
// Split rawInput (after trimming it) into an array of individual words.
// Log the resulting array.
const strArr = rawInput.trim().split(" ");
console.log(strArr);

// EXPLAIN: What does .split() do? What argument did you pass it and why?
//
//        answer: split() is a method - take one argument(char or string) - split the string (based on that arg) and return an arry
//        for example if the string = "hello world" and function is split(" ") - is we passed " " as the argument - we will get array of ["hello","world"]
//        the string will be split at " ".

// ------------------------------------------------------------
// SECTION C — Arrays (reference to array methods: https://www.w3schools.com/jsref/jsref_obj_array.asp)
//
// Each task tells you exactly what to use — a loop, a method, or a property.
// Use what is specified. Do not substitute one for another.
// ------------------------------------------------------------
console.log("\n[ SECTION C — Arrays ]");
// In JS - array is dynamic by default [1,3, "string", function () {}, null, undefined];

// The following array is provided for this section.
const scores = [88, 72, 95, 60, 84, 100, 73, 91];

// C1.
// Log the first score. Log the last score.
// Do not hardcode the index for the last one.
console.log(scores[0]); // 88
console.log(scores[scores.length - 1]); // 91

// C2.
// Log the total number of scores we see in the array.
let ttl_scores = 0;
let score_count = 1;
for (let i = 0; i < scores.length; i++) {
  ttl_scores += scores[i];
  score_count++;
}
console.log(ttl_scores); // 663
console.log(score_count); // 9

// C3.
// Use a method to mutate and add the number 78 to the end of the array.
// Log the updated array.
scores.push(78);
console.log(scores); // push() - add value to the arrary at the end

// C4.
// Use a method to log the index of the score 95.
// Log the index.
console.log(scores.indexOf(95)); // indexOf() - check the value if it in the array and if yes - return the index of the array if not return -1

// C5.
// Use a method to log whether the array includes the score 50.
// Log the boolean value.
console.log(scores.includes(50)); // false incluse () - check if the value is in the array or not and return the boolean value

// C6.
// Use a for loop to log each score on its own line.
// Do not modify the original scores array.

for (let i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// C7.
// Use .forEach() to log each score on its own line.
// Do not modify the original scores array.
scores.forEach((score) => console.log(score));

// EXPLAIN: What is the difference between a for loop and forEach?
//          Is one better than the other?
//
/**
 * for loop - we can manually define the starting point and endind point to loop through the array
 * for each - is simple - will start from the beginning - pick each element from array - and loop to the end of the array
 * no function or method is better than another - it all depend on conditons of how we want to use it
 */

// C8.
// Use .filter() to create a new array containing only the scores above 80.
// Log the new result array.
// Do not modify the original scores array.
console.log("filter");
scores.filter((score) => {
  if (score > 80) console.log(score);
}); // filter () - take each element of the array - check the conditon - and return the new arrary with the element that passed the condition

// C9.
// Use .map() to create a new array where every score is multiplied by 2.
// Log the new result array.
// Do not modify the original scores array.
console.log("map");

console.log(scores.map((score) => score * 2));

// map() - iterate through each item - do action on each items and return new array

// EXPLAIN: What does .map() return? What does .filter() return?
//          How are they different?
//
//          answer: both map() and filter() return new array - map - take action(like math actions) and filter do (logical operaton) on each item

// ------------------------------------------------------------
// SECTION D — Objects (reference to object methods: https://www.w3schools.com/jsref/jsref_obj_object.asp)
// ------------------------------------------------------------
console.log("\n[ SECTION D — Objects ]");

// The following object is provided for this section.
const student = {
  name: "Brunson",
  age: 29,
  city: "New York",
  enrolled: true,
};

// D1.
// Log the value of name using dot notation.
// Log the value of city using bracket notation.
console.log(student.name);
// D2.
// Add a new key called grade and set it to "B+".
// Log the updated object.
student.grade = "B+";
console.log(student);

// D3.
// Use a method to log all of the keys in the object.
for (let key in student) {
  console.log(key);
}
console.log(Object.keys(student));

// D4.
// Use a method to log all of the values in the object.
for (let value in student) {
  console.log(student[value]);
}
console.log(Object.values(student));

// D5.
// Using a for...in loop, log each key-value pair in this exact format:
//   name: Jane
//   age: 21
//   (etc.)
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// D6.
// EXPLAIN: What is the difference between dot notation and bracket notation?
//          Give an example of when you would need to use bracket notation
//          instead of dot notation.
//
//          answer: dot notation is useful with a fixed property name
//                  [] notation is used with dynamic keys

// ------------------------------------------------------------
// SECTION E — Arrays of Objects
// ------------------------------------------------------------
console.log("\n[ SECTION E — Arrays of Objects ]");

// The following array is provided for this section.
const roster = [
  { name: "Alex", grade: 92, present: true },
  { name: "Jamie", grade: 74, present: false },
  { name: "Jane", grade: 88, present: true },
  { name: "Riley", grade: 61, present: true },
  { name: "Casey", grade: 95, present: false },
];

// E1.
// Log the name of the third student.
console.log(roster[2].name); // Jane

// E2.
// Using forEach, log the name of every student who is present.
roster.forEach((stu) => {
  if (stu.present) {
    console.log(stu.name);
  }
});

// E3.
// Create a new array containing only the students who passed (grade >= 70).
// Log each passing student's name and grade.
const passingStudents = [];
roster.forEach((stu) => {
  if (stu.grade >= 70) {
    passingStudents.push(stu);
  }
});

console.log(roster.filter((stu) => stu.grade >= 70)); // using filter()

passingStudents.forEach((passStu) =>
  console.log(passStu.name, "\t:", passStu.grade)
);

// E4.
// Create a new array of just the names of all students (no other data).
// Log the result array.
const justNames = [];

roster.forEach((stu) => justNames.push(stu.name));
console.log(justNames);

console.log("Printint out student names using map");
console.log(roster.map((stu) => stu.name));

// E5.
// EXPLAIN: Why would you store objects inside an array?
//          What problem does that structure solve compared to
//          storing everything in separate variables?
//
//          answer: I think because it is easier to visualize, organize and give us more flexiable with looping.

// ------------------------------------------------------------
// SECTION F — Functions
//
// For each task, write the function so that the calls below it produce the shown output.
// ------------------------------------------------------------
console.log("\n[ SECTION F — Functions ]");

// F1.
// Write a function called greet that takes a name as an argument
// and returns a greeting string.
//
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet("Alex")); // → "Hello, Alex!"
console.log(greet("Mike")); // → "Hello, Mike!"

// F2.
// Write a function called square that takes a number and returns its square.
//
function square(num) {
  return num * num;
}
console.log(square(4)); // → 16
console.log(square(9)); // → 81
//
// EXPLAIN: What does the return keyword do?
//          What does a function return if you forget to write return?
//
//          answer: return keyword return the value(or the data)/ if forgot it return undefined

// F3.
// Write a function called isEven that takes a number and returns
// true if it is even and false if it is odd.
//
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // → true
console.log(isEven(7)); // → false
console.log(isEven(0)); // → true

// F4.
// Write a function called sum that takes an array of numbers
// and returns the total of all the numbers added together.
// Use a loop inside — do not use a built-in method.
//
function sum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(sum([1, 2, 3, 4, 5])); // → 15
console.log(sum([10, 20, 30])); // → 60
console.log(sum([])); // → 0

// F5.
// Write a function called myForEach that takes an array and a callback function as arguments.
// It should call the callback on every element in the array.
// It should not return anything.
// Do not use the native .forEach() inside your function — use a for loop.
//
function myForEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i]);
  }
}

myForEach([1, 2, 3], function (n) {
  console.log(n);
});
// → 1
// → 2
// → 3
//
// EXPLAIN: What is a callback function?
//          In the example above, what plays the role of the callback?
//
//          answer: a callback function is a function passed into another function as an argument
//          console.log() play the role as a callback function

// F6.
// Write a function called myMap that takes an array and a callback function as arguments.
// It should return a NEW array where each element is the result of
// calling the callback on the original element.
// Do not use the native .map() inside your function — use a for loop.
//

function myMap(arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i]));
  }
  return newArr;
}

console.log(myMap([1, 2, 3], (n) => n * 2)); // → [2, 4, 6]
console.log(myMap([1, 2, 3], (n) => n + 10)); // → [11, 12, 13]

// F7.
// Write a function called myFilter that takes an array and a callback function as arguments.
// It should return a NEW array containing only the elements for which
// the callback returns true.
// Do not use the native .filter() inside your function — use a for loop.
//
function myFilter(arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

console.log(myFilter([1, 2, 3, 4, 5], (n) => n > 3)); // → [4, 5]
console.log(myFilter([10, 25, 30, 45], (n) => n % 2 === 0)); // → [10, 30]
//
// EXPLAIN: What do myMap and myFilter have in common?
//          What is the key difference between what they return?
//          Why do neither of them change the original array?
//
//          answer: myMap and myFiler check each element take action on each element and return new array
//          myMap take action(change each element) and myFilter check the condition for each element
//          Neither of them change the original array - according to the creators' mysterious intent and desire!
