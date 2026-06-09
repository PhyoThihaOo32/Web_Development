/**
 * Problem-Solving Formula for JavaScript
 *
 * Before writing a single line of code, work through these questions.
 * Most bugs come from skipping these steps, not from bad syntax.
 */

// ─────────────────────────────────────────
// STEP 1 — Understand the input and output
// ─────────────────────────────────────────
//
//   What am I being given?          → a string? an array? an object? a number?
//   What am I expected to return?   → same type? different type? true/false?
//   What does a concrete example look like?
//
//   Example:
//     wordCount('the cat sat on the cat')
//     input  → string
//     output → object  { the: 2, cat: 2, sat: 1, on: 1 }
//
//   Don't jump straight into the problem if you can't state the input and output in plain english

// ─────────────────────────────────────────
// STEP 2 — What data type(s) am I working with?
// ─────────────────────────────────────────
//
//   Each type has its own toolbox of methods.
//   Know which toolbox you're reaching into.
//
//   STRING  → .split()  .includes()  .indexOf()  .slice()  .toUpperCase()  .trim()  .replace()
//   ARRAY   → .map()  .filter()  .find()  .reduce()  .forEach()  .includes()
//              .push()  .pop()  .shift()  .unshift()  .splice()  .slice()  .join()  .sort()  .reverse()
//   OBJECT  → Object.keys()  Object.values()  Object.entries()  bracket notation  spread { ...obj }
//   NUMBER  → Math.max()  Math.min()  Math.floor()  Math.abs()  % (modulo)

[1, 2, 4].includes(1); // true
Array.isArray();
// ─────────────────────────────────────────
// STEP 3 — What do those methods RETURN?
// ─────────────────────────────────────────
//
//   This is the most common source of bugs.
//   A method's return value is your next piece of data — know its type.
//
//   'hello world'.split(' ')    → ARRAY    ['hello', 'world']
//   ['hello', 'world'].join(' ')→ STRING   'hello world'
//   array.map(fn)               → ARRAY    (same length, transformed values)
//   array.filter(fn)            → ARRAY    (shorter or same length)
//   array.find(fn)              → ITEM     (one element, or undefined)
//   array.reduce(fn, start)     → ANYTHING (whatever you accumulate into)
//   array.includes(val)         → BOOLEAN
//   array.forEach(fn)           → undefined  ← common mistake: forEach returns nothing
//
//   Ask yourself after every method call: "What type is this now?"

// ─────────────────────────────────────────
// STEP 4 — Do I need to convert between types?
// ─────────────────────────────────────────
//
//   Many problems require a "bridge" step — converting one type into another
//   so you can use the right toolbox.
//
//   Common conversions:
//
//     String  → Array    'hello'.split('')        → ['h','e','l','l','o']
//     String  → Array    'a b c'.split(' ')       → ['a', 'b', 'c']
//     Array   → String   ['a','b','c'].join('')    → 'abc'
//     Array   → Object   array.reduce(fn, {})     → { key: value, ... }
//     Array   → Number   array.reduce(fn, 0)      → sum / count
//     Number  → String   String(42)  or  42 + ''  → '42'
//     String  → Number   Number('42')  or  +'42'  → 42
//
//   The palindrome pattern is a classic example:
//     string → split into array → reverse the array → join back to string → compare

// ─────────────────────────────────────────
// STEP 5 — Break the problem into steps
// ─────────────────────────────────────────
//
//   Write your steps as comments FIRST. Code second.
//   If a step is still too big, break it down again.
//
//   Example: mostFrequentChar('mississippi')
//
//     // 1. build a frequency object: { m:1, i:4, s:4, p:2 }
//     // 2. find the key with the highest value
//     // 3. return that key
//
//   Each comment becomes one chunk of code.
//   If you can't write the steps in English, the code won't work either.

console.log();

// ─────────────────────────────────────────
// STEP 6 — Check your assumptions with a small example
// ─────────────────────────────────────────
//
//   Before writing the full solution, test ONE step at a time.
//   console.log() is your best tool — use it aggressively.
//
//   Don't write 10 lines and then test.
//   Write 2 lines, log the result, confirm it's what you expected, then continue.
//
//   Example:
//     const words = 'the cat sat'.split(' ');
//     console.log(words);  // ['the', 'cat', 'sat'] ← confirm before moving on

// ─────────────────────────────────────────
// QUICK REFERENCE — Common patterns
// ─────────────────────────────────────────
//
//   Count character or word frequency → build a frequency object with a loop or reduce
//     const freq = {}
//     for (const char of str) {
//       freq[char] = (freq[char] || 0) + 1
//     }
//
//   Find the max/min in an array of objects → reduce, or sort then grab index 0
//
//   Group items into buckets → reduce into an object, array as each bucket value
//     array.reduce(function(groups, item) {
//       const key = item.someProperty
//       if (!groups[key]) groups[key] = []
//       groups[key].push(item)
//       return groups
//     }, {})
//
//   Reverse a string → split → reverse → join
//     str.split('').reverse().join('')
//
//   Check if something exists → .includes()  .find()  .some()  or check !== undefined
//
//   Remove duplicates → [...new Set(array)]
//
//   Flatten one level → array.flat()   or manually with reduce + concat
