console.log("----------------- ARRAYS -----------------");

function first(arr) {
  return arr[0];
}

console.log(first([1, 2, 3])); // 1
console.log(first(["a", "b"])); // "a"
console.log(first([])); // undefined

//----------------------------------------------------
console.log("\n");

function last(arr) {
  return arr[arr.length - 1];
}

console.log(last([1, 2, 3])); // 3
console.log(last(["a", "b"])); // "b"
console.log(last([])); // undefined

//----------------------------------------------------
console.log("\n");

// Use a loop — no array methods yet
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 20, 30])); // 60
console.log(sum([])); // 0

//----------------------------------------------------
console.log("\n");

// Use a loop — no .includes() yet
function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}

console.log(contains([1, 2, 3], 2)); // true
console.log(contains([1, 2, 3], 5)); // false
console.log(contains(["a", "b"], "a")); // true

//----------------------------------------------------
console.log("\n");

// Returns a new array without the element at index — do not mutate the original
function removeAt(arr, index) {
  // solution 1:
  // return [...arr.slice(0, index), ...arr.slice(index + 1)];

  // solution 2:
  // return arr.filter((num, idx) => idx !== index)

  // solution 3:
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i === index) {
      continue;
    }

    result.push(arr[i]);
  }
  return result;
}

const nums = [10, 20, 30];
console.log(removeAt(nums, 1)); // [10, 30]
console.log(nums); // [10, 20, 30]  ← unchanged

//----------------------------------------------------
console.log("\n");

// Returns a single flat array from an array of arrays (one level deep)
// Example: [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]
// Hint: loop through the outer array, then loop through each inner array
function flatten(arrays) {
  const result = [];
  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) {
      result.push(arrays[i][j]);
    }
  }
  return result;
}

console.log(flatten([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flatten([["a", "b"], ["c"]])); // ['a', 'b', 'c']
console.log(flatten([])); // []

//----------------------------------------------------
console.log("\n");

// Given TWO arrays, return a new array containing only elements
// that appear in BOTH arrays (no duplicates in the result).
// Hint: loop through one array and check if each element exists in the other.
//       You can reuse the logic from your contains() function above.
function intersection(arrA, arrB) {
  const result = [];
  for (let i = 0; i < arrA.length; i++) {
    if (contains(arrB, arrA[i])) {
      result.push(arrA[i]);
    }
  }
  return result;
}

console.log(intersection([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(intersection(["a", "b", "c"], ["b", "c", "d"])); // ['b', 'c']
console.log(intersection([1, 2], [3, 4])); // []
