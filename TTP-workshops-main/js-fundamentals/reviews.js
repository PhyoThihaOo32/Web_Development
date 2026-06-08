/**
 * JavaScript Review — String, Array & Object Problems
 *
 * These problems focus on manipulating data structures using
 * built-in JS methods. Many are multi-step: input comes in as
 * one shape (string, array, object) and the answer requires
 * transforming it into another.
 *
 * you will write the functions
 *
 * Run with: node review.js
 * Or link in an HTML file: <script src="review.js"></script>
 */

// console.log("\n--- Problem 1: anagrams ---");

// --- anagrams(str1, str2) ---
// Two words are anagrams if they contain the exact same letters
// in any order. Case should not matter.
// Hint: sort the letters of each word and compare.

// this function compare the length of two strings(using length function) and return boolean value
function anagrams(str1, str2) {
  const lenstr1 = str1.length;
  const lenstr2 = str2.length;
  if (lenstr1 === lenstr2) return true;
  else return false;
}

console.log(anagrams("cats", "tocs")); // -> false
console.log(anagrams("tax", "taxi")); // -> false
console.log(anagrams("restful", "fluster")); // -> true
console.log(anagrams("elbow", "below")); // -> true

console.log("\n--- Problem 2: mostFrequentChar ---");

// --- mostFrequentChar(str) ---
// Return the character that appears the most times in the string.
// If there's a tie, return whichever appears first.
// Hint: build a frequency object, then find the key with the highest value.

function mostFrequentChar(str) {
  // pick each character from the string and compare with the rest

  let strObj = {};
  for (let i = 0; i < str.length; i++) {
    let times = 0; // occurance in the string
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        times++;
      }
      strObj[str[i]] = times;
    }
  }
  //   console.log(strObj);
  let maxValue = Object.values(strObj)[0];
  //   console.log(firstValue);
  for (let value of Object.values(strObj)) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  const key = Object.keys(strObj).find((k) => strObj[k] === maxValue);
  return key;
}

console.log(mostFrequentChar("bookeeper")); // -> 'e'
console.log(mostFrequentChar("mississippi")); // -> 'i'
console.log(mostFrequentChar("potato")); // -> 'o'

console.log("\n--- Problem 3: longestWord ---");

// --- longestWord(sentence) ---
// Given a sentence string, return the longest word.
// If there's a tie, return the first one.
// Hint: 'split' the sentence into words first.

function longestWord(sentence) {
  let arrWords = sentence.split(" ");

  // empty obj
  const obj = {};
  //   console.log(arrWords);
  // count number of character for each words in the array
  for (let i = 0; i < arrWords.length; i++) {
    let numChar = 0;
    for (let j = 0; j < arrWords[i].length; j++) {
      numChar++;
    }
    obj[arrWords[i]] = numChar;
  }

  let maxValue = Object.values(obj)[0]; // the first value in the obj

  // compare with other value in the objects
  for (let value of Object.values(obj)) {
    if (value > maxValue) {
      maxValue = value;
    }
  }
  // return the key of the maxValue single value
  return Object.keys(obj).find((k) => obj[k] === maxValue);
  // this will return the duplicate keys of the same value
  //   const duplicate = Object.keys(obj).filter((k) => obj[k] === maxValue);
  //   return duplicate;
}

// console.log(longestWord("hello world"));

console.log(longestWord("hello world")); // -> 'hello'
console.log(longestWord("programming is fun")); // -> 'programming'
console.log(longestWord("go do it")); // -> 'go'

console.log("\n--- Problem 4: isPalindrome ---");

// // --- isPalindrome(str) ---
// // A palindrome reads the same forwards and backwards.
// // Ignore spaces, punctuation, and capitalization.
// // Hint: clean the string first (letters and numbers only), then compare
// //       it to its reverse. String has no built-in reverse — arrays do.

function isPalindrome(str) {
  // first clean the str - remove all the space and turn to lower case
  let cleanStr = str.replaceAll(" ", "").toLowerCase().trim();
  //   console.log(cleanStr);
  // create new reverse str
  let reverseStr = "";
  for (let i = cleanStr.length - 1; i >= 0; i--) {
    reverseStr += cleanStr[i];
  }
  //   console.log(reverseStr);
  // compare two string -> return boolean
  return cleanStr === reverseStr ? true : false;
}

console.log(isPalindrome("racecar")); // -> true
console.log(isPalindrome("A man a plan a canal Panama")); // -> true
console.log(isPalindrome("hello")); // -> false
console.log(isPalindrome("Was it a car or a cat I saw")); // -> true

console.log("\n--- Problem 5: capitalize ---");

// --- capitalize(str) ---
// Capitalize the first letter of every word in a string.
// The rest of each word should be lowercase.
// Hint: split into words, transform each one, join back.
function capitalize(str) {
  let strArr = str.split(" ");
  let capArr = [];
  console.log(str);
  for (let i = 0; i < strArr.length; i++) {
    for (let j = 0; j < strArr[i].length; j++) {
      if (j === 0) {
        capArr += strArr[i][j].toUpperCase();
      } else {
        capArr += strArr[i][j];
      }
    }
    capArr += " ";
  }

  return capArr;
}

console.log(capitalize("hello world")); // -> 'Hello World'
console.log(capitalize("the quick brown fox")); // -> 'The Quick Brown Fox'
console.log(capitalize("javaScript IS fun")); // -> 'Javascript Is Fun'

console.log("\n--- Problem 6: reverseWords ---");

// --- reverseWords(sentence) ---
// Reverse the ORDER of words in a sentence (not the letters).
// Hint: split, reverse the array, join methods
function reverseWords(sentence) {
  let senArr = sentence.split(" ");
  let newArr = [];

  // iterate the array from the end
  for (let i = senArr.length - 1; i >= 0; i--) {
    for (let j = 0; j < senArr[i].length; j++) {
      newArr += senArr[i][j];
    }
    newArr += " ";
  }
  return newArr;
}

// reverseWords("hello world");

console.log(reverseWords("hello world")); // -> 'world hello'
console.log(reverseWords("the quick brown fox")); // -> 'fox brown quick the'
console.log(reverseWords("one")); // -> 'one'

console.log("\n--- Problem 7: countVowels ---");

// --- countVowels(str) ---
// Return how many vowels (a, e, i, o, u) are in the string.
// Case should not matter.
// Hint: loop through characters and check if each is a vowel.
function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("hello")); // -> 2
console.log(countVowels("why")); // -> 0
console.log(countVowels("education")); // -> 5
console.log(countVowels("JavaScript")); // -> 3

console.log("\n--- Problem 8: removeDuplicates ---");

// --- removeDuplicates(arr) ---
// Return a new array with duplicate values removed.
// Preserve the original order (keep the FIRST occurrence of each value).
// Hint: a Set only holds unique values and respects insertion order.

function removeDuplicates(arr) {
  let set = new Set();
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    set.add(arr[i]);
  }

  const ite = set.values();
  for (let value of ite) {
    newArr.push(value);
  }

  return newArr;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5])); // -> [1, 2, 3, 4, 5]
console.log(removeDuplicates(["a", "b", "a", "c", "b"])); // -> ['a', 'b', 'c']
console.log(removeDuplicates([true, false, true, true, false])); // -> [true, false]

console.log("\n--- Problem 9: chunk ---");

// --- chunk(arr, size) ---
// Split an array into groups of `size`.
// The last group may be smaller if the array doesn't divide evenly.
// Hint: loop through the array in steps of `size`, slice out each group.
function chunk(arr, size) {
  // let row = Math.ceil(arr.length / size);
  // let col = Math.ceil(arr.length / row);
  let newArr = [];

  for (let i = 0; i < arr.length; i = i + size) {
    newArr.push(arr.slice(i, size + i));
  }
  return newArr;
}

// chunk([1, 2, 3, 4, 5, 6], 2);
// chunk([1, 2, 3, 4, 5], 2);
// chunk(["a", "b", "c"], 1);

console.log(chunk([1, 2, 3, 4, 5, 6], 3)); // -> [[1, 2], [3, 4], [5, 6]]
console.log(chunk([1, 2, 3, 4, 5], 2)); // -> [[1, 2], [3, 4], [5]]
console.log(chunk(["a", "b", "c"], 1)); // -> [['a'], ['b'], ['c']]

// console.log("\n--- Problem 10: wordCount ---");

// // --- wordCount(sentence) ---
// // Return an object where each key is a word and the value is how
// // many times that word appears in the sentence. Case insensitive.
// // This is a string → object transformation.
// // Hint: split into words, then build a frequency object with reduce (or a loop).

// console.log(wordCount("the cat sat on the mat"));
// // -> { the: 2, cat: 1, sat: 1, on: 1, mat: 1 }

// console.log(wordCount("to be or not to be"));
// // -> { to: 2, be: 2, or: 1, not: 1 }

// console.log("\n--- Problem 11: intersection ---");

// // --- intersection(arr1, arr2) ---
// // Return a new array containing only the values that appear in BOTH arrays.
// // No duplicates in the result.
// // Hint: filter one array, keeping only items that are included in the other.

// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6])); // -> [3, 4]
// console.log(intersection(["a", "b", "c"], ["b", "c", "d"])); // -> ['b', 'c']
// console.log(intersection([1, 2, 3], [4, 5, 6])); // -> []

// console.log("\n--- Problem 12: groupBy ---");

// // --- groupBy(arr, key) ---
// // Given an array of objects and a key, return an object that groups the
// // items by the value at that key. This is an array → object transformation.
// // Hint: use reduce — the accumulator starts as {}, and each item gets
// //       pushed into the array at the right key.

// const people = [
//   { name: "Alice", city: "NYC" },
//   { name: "Bob", city: "LA" },
//   { name: "Carol", city: "NYC" },
//   { name: "Dan", city: "LA" },
//   { name: "Eve", city: "NYC" },
// ];

// console.log(groupBy(people, "city"));
// // -> {
// //      NYC: [{ name: 'Alice', ... }, { name: 'Carol', ... }, { name: 'Eve', ... }],
// //      LA:  [{ name: 'Bob', ... }, { name: 'Dan', ... }]
// //    }

// console.log("\n--- Problem 13: rotate ---");

// // --- rotate(arr, n) ---
// // Rotate the array to the right by n positions.
// // Elements shifted off the end wrap around to the front.
// // Hint: use slice to cut the array into two pieces, then swap them.

// console.log(rotate([1, 2, 3, 4, 5], 2)); // -> [4, 5, 1, 2, 3]
// console.log(rotate([1, 2, 3, 4, 5], 1)); // -> [5, 1, 2, 3, 4]
// console.log(rotate(["a", "b", "c"], 4)); // -> ['c', 'a', 'b']  (wraps around)
