console.log('----------------- RECURSION -----------------');

// Recursion: a function that calls ITSELF to solve a smaller version of the same problem.
//
// Every recursive function needs exactly two things:
//   1. Base case  — the simplest input where you can return immediately (no recursion)
//   2. Recursive case — break the problem into something smaller, then call yourself
//
// If you forget the base case, the function calls itself forever → stack overflow.
// Before writing any code, ask: "What is the smallest possible input, and what should I return?"

//----------------------------------------------------
console.log('\n--- Problem 1: sumTo ---');

// Return the sum of all integers from 1 to n (inclusive).
// sumTo(4) → 4 + 3 + 2 + 1 → 10
//
// Before writing code, think:
//   - Base case: what is sumTo(1)? (you already know the answer — just return it)
//   - Recursive case: how does sumTo(n) relate to sumTo(n-1)?
//     If you already had sumTo(n-1), what ONE thing would you add to get sumTo(n)?
function sumTo(n) {
  if (n === 0) {
    return 0
  }

  return n + sumTo(n - 1)
}

console.log(sumTo(1));  // 1
console.log(sumTo(4));  // 10   (1+2+3+4)
console.log(sumTo(5));  // 15
console.log(sumTo(10)); // 55

//----------------------------------------------------
console.log('\n--- Problem 2: power ---');

// Return base raised to the exp power (base^exp).
// Assume exp is a non-negative integer.
// Do NOT use Math.pow() or the ** operator — solve it recursively.
//
// Think:
//   - Base case: what is any number to the power of 0?
//   - Recursive case: how does power(base, exp) relate to power(base, exp - 1)?
//     Hint: 2^4 = 2 * 2^3
function power(base, exp) {
  if (exp === 0) return 1

  return base * power(base, exp - 1)
}

console.log(power(2, 0));  // 1
console.log(power(2, 3));  // 8
console.log(power(3, 4));  // 81
console.log(power(5, 2));  // 25

//----------------------------------------------------
console.log('\n--- Problem 3: reverseString ---');

// Recursively reverse a string.
// reverseString('hello') → 'olleh'
//
// Think about one character at a time:
//   - Base case: what is the reverse of an empty string? Or a single character?
//   - Recursive case: if you reverse everything AFTER the first character,
//     where does the first character go in the final result?
//
// Hint: str[0] gives you the first character.
//       str.slice(1) gives you everything after the first character.
function reverseString(str) {
  if (str.length === 0) return ''

  return str[str.length - 1] + reverseString(str.slice(0, -1))
}

console.log(reverseString(''));        // ''
console.log(reverseString('a'));       // 'a'
console.log(reverseString('hello'));   // 'olleh'
console.log(reverseString('abcde'));   // 'edcba'

//----------------------------------------------------
console.log('\n--- Problem 4: flatten ---');

// Take a nested array (any depth) and return a single flat array.
// Do not use Array.prototype.flat().
//
// flatten([1, [2, 3], [4, [5, 6]]]) → [1, 2, 3, 4, 5, 6]
//
// This is the tricky part: each item is EITHER a number OR another array.
// How do you tell which? → Array.isArray(item)
//
// Think:
//   - For each item in arr:
//       - If it's NOT an array, what do you do with it?
//       - If it IS an array, how do you use recursion on it?
//   - Hint: you can use spread to combine arrays: [...result, ...flattenedSubArray]
//     OR you can use a loop and push items in one by one.
function flatten(arr) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    if (Array.isArray(item)) {
      const nestedResult = flatten(item)
      result.push(...nestedResult)
    } else {
      result.push(item)
    }
  }

  return result
}

console.log(flatten([1, 2, 3]));                    // [1, 2, 3]
console.log(flatten([1, [2, 3], 4]));               // [1, 2, 3, 4]
console.log(flatten([1, [2, [3, [4]]]]));           // [1, 2, 3, 4]
console.log(flatten([[1, 2], [3, 4], [5]]));        // [1, 2, 3, 4, 5]
console.log(flatten([]));                           // []

//----------------------------------------------------
console.log('\n--- Problem 5: countOccurrences ---');

// Count how many times `target` appears in arr, including inside any nested arrays.
// Do not use .flat() — use recursion.
//
// countOccurrences([1, [2, 1], [1, [1, 3]]], 1) → 4
//
// Think:
//   - Base case: what do you return for an empty array?
//   - For each item:
//       - If it's an array → recurse into it and add the count you get back
//       - If it equals target → count it (add 1)
//       - Otherwise → add 0
//
// Hint: how is this structure similar to flatten above?
function countOccurrences(arr, target) {
  let count = 0

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    if (Array.isArray(item)) {
      const nestedCount = countOccurrences(item, target)
      count += nestedCount
    }

    if (item === target) {
      count += 1
    }
  }

  return count
}

console.log(countOccurrences([1, 2, 3], 1));                   // 1
console.log(countOccurrences([1, [2, 1], [1, [1, 3]]], 1));    // 4
console.log(countOccurrences(['a', ['b', 'a'], 'c'], 'a'));     // 2
console.log(countOccurrences([1, 2, 3], 5));                   // 0
console.log(countOccurrences([], 1));                          // 0
