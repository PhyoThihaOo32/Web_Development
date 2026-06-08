console.log('----------------- TYPES -----------------');

// Returns a string describing the type — handles the null and array edge cases
function getType(value) {
  // TODO: write your code here
}

console.log(getType(42)); // "number"
console.log(getType('hello')); // "string"
console.log(getType(true)); // "boolean"
console.log(getType(undefined)); // "undefined"
console.log(getType(null)); // "null"       ← typeof null === "object"!
console.log(getType([])); // "array"      ← typeof [] === "object"!
console.log(getType({})); // "object"
console.log(getType(() => {})); // "function"

//----------------------------------------------------
console.log('\n');

// Returns true only if value is a number and not NaN
function isNumber(value) {
  // TODO: write your code here
}

console.log(isNumber(5)); // true
console.log(isNumber(NaN)); // false  ← typeof NaN === "number"!
console.log(isNumber('5')); // false
console.log(isNumber(Infinity)); // true

//----------------------------------------------------
console.log('\n');

// Predict true or false before running each line, then explain why in a comment
console.log(Boolean(0)); // ?
console.log(Boolean('')); // ?
console.log(Boolean(null)); // ?
console.log(Boolean(undefined)); // ?
console.log(Boolean(NaN)); // ?
console.log(Boolean(false)); // ?
console.log(Boolean('0')); // ?  ← may surprise you
console.log(Boolean([])); // ?  ← may surprise you
console.log(Boolean({})); // ?  ← may surprise you

//----------------------------------------------------
console.log('\n');

// Predict the output, then add a comment explaining why
console.log(1 == '1'); // ?
console.log(1 === '1'); // ?
console.log(null == undefined); // ?
console.log(null === undefined); // ?
console.log(0 == false); // ?
console.log('' == false); // ?
