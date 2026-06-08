console.log("----------------- TYPES -----------------");

// Returns a string describing the type — handles the null and array edge cases
function getType(value) {
  return typeof value;
}

console.log(getType(42)); // "number"
console.log(getType("hello")); // "string"
console.log(getType(true)); // "boolean"
console.log(getType(undefined)); // "undefined"
console.log(getType(null)); // "null"       ← typeof null === "object"!
console.log(getType([])); // "array"      ← typeof [] === "object"!
console.log(getType({})); // "object"
console.log(getType(() => {})); // "function"

//----------------------------------------------------
console.log("\n");

// Returns true only if value is a number and not NaN
function isNumber(value) {
  // TODO: write your code here
  return getType(value) !== "number" ? false : true;
}

console.log(isNumber(5)); // true
console.log(isNumber(NaN)); // false  ← typeof NaN === "number"!
console.log(isNumber("5")); // false
console.log(isNumber(Infinity)); // true

// //----------------------------------------------------
// console.log("\n");

// Predict true or false before running each line, then explain why in a comment
console.log(Boolean(0)); // 0
console.log(Boolean("")); // 0
console.log(Boolean(null)); // 0
console.log(Boolean(undefined)); // 0
console.log(Boolean(NaN)); // 0
console.log(Boolean(false)); // 0
console.log(Boolean("0")); // ?  ← 1
console.log(Boolean([])); // ?  ← 1
console.log(Boolean({})); // ?  ← 1

// //----------------------------------------------------
// console.log("\n");

// // Predict the output, then add a comment explaining why
// console.log(1 == "1"); // ?
// console.log(1 === "1"); // ?
// console.log(null == undefined); // ?
// console.log(null === undefined); // ?
// console.log(0 == false); // ?
// console.log("" == false); // ?
