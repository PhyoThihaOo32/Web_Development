console.log('----------------- MIXED CHALLENGES -----------------');

// These problems combine multiple JS concepts you've practiced so far.
// Each one is a step up in difficulty — read the comments carefully before writing code.
// The console.log calls at the bottom of each problem are your test cases.

//----------------------------------------------------
console.log('\n');

// Challenge 1: Filter an array of objects
//
// You have a list of student objects. Each looks like: { name: '...', score: 0–100 }
// Return a new array containing only the students who passed (score >= 70).
// The original array must not be mutated.
//
// Hint: loop through the array, check each student's score, and push passing
//       students into a new result array.
function getPassingStudents(students) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 70) result.push(students[i]);
  }
  return result;
}

const classRoster = [
  { name: 'Ada', score: 92 },
  { name: 'Bob', score: 65 },
  { name: 'Carl', score: 71 },
  { name: 'Dana', score: 58 },
  { name: 'Eve', score: 80 },
];

console.log(getPassingStudents(classRoster));
// [ { name: 'Ada', score: 92 }, { name: 'Carl', score: 71 }, { name: 'Eve', score: 80 } ]

//----------------------------------------------------
console.log('\n');

// Challenge 2: Pluck a field from each object
//
// Given an array of objects and a key name, return an array of just the values
// for that key from each object.
//
// pluck([{ name: 'Ada', age: 30 }, { name: 'Grace', age: 45 }], 'name')
//   → ['Ada', 'Grace']
//
// Hint: loop through the array. Access each item's value with item[key] —
//       bracket notation lets you use a variable as the key.
function pluck(arr, key) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i][key]);
  }
  return result;
}

const people = [
  { name: 'Ada', age: 30 },
  { name: 'Grace', age: 45 },
  { name: 'Alan', age: 25 },
];

console.log(pluck(people, 'name')); // ['Ada', 'Grace', 'Alan']
console.log(pluck(people, 'age'));  // [30, 45, 25]

//----------------------------------------------------
console.log('\n');

// Challenge 3: Nested update without mutation
//
// Each student has a nested grades object. Return a NEW student with the math
// grade updated. The original — including the nested grades object — must be unchanged.
//
// student looks like: { name: 'Ada', grades: { math: 85, english: 90 } }
//
// Hint: you need to spread TWO levels to avoid mutating the nested object:
//   { ...student, grades: { ...student.grades, math: newGrade } }
function updateMathGrade(student, newGrade) {
  return { ...student, grades: { ...student.grades, math: newGrade } };
}

const studentA = { name: 'Ada', grades: { math: 85, english: 90 } };
const updatedA = updateMathGrade(studentA, 95);

console.log('New math grade    :', updatedA.grades.math);  // 95  ← updated
console.log('Original math     :', studentA.grades.math);  // 85  ← unchanged
console.log('English unchanged :', updatedA.grades.english); // 90
console.log('Same object?      :', updatedA === studentA); // false

//----------------------------------------------------
console.log('\n');

// Challenge 4: Merge two arrays of objects by id
//
// You have two arrays. Both contain objects with an 'id' field.
// Merge them so that each result item combines both objects that share the same id.
//
// arrA = [{ id: 1, name: 'Ada' }, { id: 2, name: 'Bob' }]
// arrB = [{ id: 1, score: 90  }, { id: 2, score: 75  }]
// result → [{ id: 1, name: 'Ada', score: 90 }, { id: 2, name: 'Bob', score: 75 }]
//
// Hint: loop through arrA. For each item, loop through arrB to find the item
//       with the matching id. Then combine both with spread: { ...itemA, ...matchB }
function mergeById(arrA, arrB) {
  const result = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      if (arrA[i].id === arrB[j].id) {
        result.push({ ...arrA[i], ...arrB[j] });
        break;
      }
    }
  }
  return result;
}

const names = [
  { id: 1, name: 'Ada' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Carl' },
];
const scores = [
  { id: 2, score: 75 },
  { id: 3, score: 88 },
  { id: 1, score: 90 },
];

console.log(mergeById(names, scores));
// [
//   { id: 1, name: 'Ada', score: 90 },
//   { id: 2, name: 'Bob', score: 75 },
//   { id: 3, name: 'Carl', score: 88 }
// ]

//----------------------------------------------------
console.log('\n');

// Challenge 5: Group items by a property
//
// Given an array of objects and a key name, return an object that groups items
// by their value for that key.
//
// groupBy([{ type: 'cat' }, { type: 'dog' }, { type: 'cat' }], 'type')
//   → { cat: [{type:'cat'},{type:'cat'}], dog: [{type:'dog'}] }
//
// Hint: start with an empty result object {}.
//       For each item, check if result[item[key]] already exists.
//       If not, initialize it to an empty array [].
//       Then push the item into that array.
function groupBy(arr, key) {
  const result = {};
  for (let i = 0; i < arr.length; i++) {
    const groupKey = arr[i][key];
    if (!result[groupKey]) result[groupKey] = [];
    result[groupKey].push(arr[i]);
  }
  return result;
}

const animals = [
  { name: 'cat', type: 'mammal' },
  { name: 'dog', type: 'mammal' },
  { name: 'eagle', type: 'bird' },
  { name: 'parrot', type: 'bird' },
  { name: 'salmon', type: 'fish' },
];

console.log(groupBy(animals, 'type'));
// {
//   mammal: [ { name: 'cat', type: 'mammal' }, { name: 'dog', type: 'mammal' } ],
//   bird:   [ { name: 'eagle', type: 'bird' }, { name: 'parrot', type: 'bird' } ],
//   fish:   [ { name: 'salmon', type: 'fish' } ]
// }

//----------------------------------------------------
console.log('\n');

// Challenge 6: Closure — build a stateful accumulator
//
// makeAccumulator() should return an OBJECT with two methods:
//   - add(n)      → adds n to an internal running total
//   - getTotal()  → returns the current total
//
// Each call to makeAccumulator() creates its own independent total.
// The total is not accessible from outside — it lives in closure scope.
//
// Hint: declare 'let total = 0' inside makeAccumulator, then return an object
//       with add and getTotal functions that both reference that same total.
function makeAccumulator() {
  let total = 0;
  return {
    add(n) { total += n; },
    getTotal() { return total; }
  };
}

const acc = makeAccumulator();
acc.add(10);
acc.add(5);
acc.add(20);
console.log(acc.getTotal()); // 35

const acc2 = makeAccumulator();
acc2.add(3);
console.log(acc2.getTotal()); // 3  ← independent from acc

//----------------------------------------------------
console.log('\n');

// Challenge 7: Flatten then filter
//
// You have an array of arrays of numbers. Return a single flat array containing
// only the numbers strictly greater than the given threshold.
// This combines flattening (nested loops) with filtering (conditional push).
//
// Hint: solve it in two steps — flatten first, then filter. Or combine both
//       into one loop if you're feeling confident.
function flattenAndFilter(arrays, threshold) {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      if (arrays[i][j] > threshold) result.push(arrays[i][j]);
    }
  }
  return result;
}

console.log(flattenAndFilter([[1, 15], [8, 20], [3, 11]], 10)); // [15, 20, 11]
console.log(flattenAndFilter([[5, 5], [5]], 10));               // []
console.log(flattenAndFilter([[1, 2, 3], [4, 5]], 2));          // [3, 4, 5]
