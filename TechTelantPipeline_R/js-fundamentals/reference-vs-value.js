console.log('----------------- REFERENCE VS VALUE -----------------');

// Predict what logs, then explain why in a comment
let x = 5;
let y = x;
y = 99;

console.log(x); // 5  — primitives are copied by value; y got its own copy, so changing y doesn't affect x
console.log(y); // 99

//----------------------------------------------------
console.log('\n');

// Predict what logs, then explain why in a comment
const obj1 = { score: 10 };
const obj2 = obj1;
obj2.score = 99;

console.log(obj1.score); // 99  — obj2 = obj1 copies the reference, not the object; both variables point to the same object
console.log(obj2.score); // 99
console.log(obj1 === obj2); // true  — same reference in memory, not just equal values

//----------------------------------------------------
console.log('\n');

// Returns a copy of obj — the original must not change
function safeCopy(obj) {
  return { ...obj };
}

const original = { name: 'Ada', score: 92 };
const copy = safeCopy(original);
copy.score = 100;

console.log(original.score); // 92
console.log(copy.score); // 100
console.log(original === copy); // false

//----------------------------------------------------
console.log('\n');

// Returns a NEW student object with the new tag appended to the tags array.
// The original student — including its tags array — must be completely unchanged.
//
// student looks like: { name: 'Lin', tags: ['css'] }
// addTag(student, 'mentor') should return: { name: 'Lin', tags: ['css', 'mentor'] }
//
// Hint: you need to copy BOTH the outer object AND the inner array:
//   { ...student, tags: [...student.tags, tag] }
//   Spreading the array creates a new array — so the original is untouched.
function addTag(student, tag) {
  return { ...student, tags: [...student.tags, tag] };
}

const student = { name: 'Lin', tags: ['css'] };
const updated = addTag(student, 'mentor');

console.log('New object tags :', updated.tags); // ['css', 'mentor']  ← tag added
console.log('Original tags   :', student.tags); // ['css']            ← must be unchanged!
console.log('Same object?    :', updated === student); // false

//----------------------------------------------------
console.log('\n');

// Returns a NEW student object with the score updated to newScore.
// The original student must remain unchanged.
//
// student looks like: { name: 'Ada', score: 92 }
// updateScore(student, 97) should return: { name: 'Ada', score: 97 }
//
// Hint: spread the student, then override just the score:
//   { ...student, score: newScore }
//   Properties listed after the spread win — so score gets the new value.
function updateScore(student, newScore) {
  return { ...student, score: newScore };
}

const ada = { name: 'Ada', score: 92 };
const promoted = updateScore(ada, 97);

console.log('New score  :', promoted.score); // 97  ← updated
console.log('Original   :', ada.score);      // 92  ← must be unchanged!
console.log('Same object?', promoted === ada); // false
