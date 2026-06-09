console.log('----------------- HIGHER-ORDER FUNCTIONS & CALLBACKS -----------------');

// A higher-order function (HOF) either:
//   (a) accepts a function as an argument, OR
//   (b) returns a function
//
// A callback is the function you PASS IN — the HOF decides when to call it.
// Key rule: pass the function WITHOUT parentheses (no call yet), like: doThing(myFn)
// Adding parentheses calls it immediately: doThing(myFn()) ← wrong, passes the *result*

//----------------------------------------------------
console.log('\n--- Problem 1: applyTwice ---');

// applyTwice takes a function and a value.
// It calls the function on the value, then calls the function on the result.
//
// Think step by step:
//   Step 1: call fn(value)       — what do you get?
//   Step 2: call fn on that result — what do you get?
//
// No loops needed — just two function calls.
function applyTwice(fn, value) {
  const firstResult = fn(value) 
  const secondResult = fn(firstResult)
  return secondResult 
  // simplified version: 
  // return fn(fn(value))
}

const addTen = (n) => n + 10;
const double = (n) => n * 2;

console.log(applyTwice(addTen, 5));  // 25    (5+10=15, 15+10=25)
console.log(applyTwice(double, 3));  // 12    (3*2=6, 6*2=12)
console.log(applyTwice(double, 1));  // 4

//----------------------------------------------------
console.log('\n--- Problem 2: makeMultiplier ---');

// makeMultiplier takes a factor and RETURNS A FUNCTION.
// The returned function takes a number and multiplies it by factor.
//
// Hint: your function body should have a single `return` that returns another function.
// The inner function can "see" factor from the outer scope — that's called a closure.
function makeMultiplier(factor) {




  return function(num) {
    return num * factor
  }
}

const triple = makeMultiplier(3);
const half = makeMultiplier(0.5);

console.log(triple(6));   // 18
console.log(triple(10));  // 30
console.log(half(20));    // 10
console.log(half(7));     // 3.5

//----------------------------------------------------
console.log('\n--- Problem 3: makeGreeting ---');

// makeGreeting takes a greeting word (like "Hello" or "Sup") and returns a function.
// The returned function takes a name and returns a full greeting string.
//
// Hint: how does this relate to makeMultiplier?
//       Both take one thing and return a function that uses that thing later.
function makeGreeting(greeting) {
  return function(name) {
    return `hello, ${name}!`
  }
}

const sayHello = makeGreeting('Hello');
const sayHey = makeGreeting('Hey');

console.log(sayHello('Alex'));   // "Hello, Alex!"
console.log(sayHello('Jamie'));  // "Hello, Jamie!"
console.log(sayHey('Riley'));    // "Hey, Riley!"

//----------------------------------------------------
console.log('\n--- Problem 4: runAll ---');

// runAll takes an array of functions and calls each one with no arguments.
// It doesn't return anything — it just runs them all in order.
//
// Hint: loop through the array. What do you call on each element?
function runAll(fns) {
  for (let i = 0; i < fns.length; i++) {
    const fn = fns[i]
    fn()
  }
}

const list = ['a', 'b', 'c']
for (let i = 0; i < list.length; i++) {
  const letter = list[i]
  console.log(letter)
}



runAll([
  () => console.log('first'),
  () => console.log('second'),
  () => console.log('third'),
]);
// first
// second
// third

//----------------------------------------------------
console.log('\n--- Problem 5: mapWith ---');

// Build your own version of .map() using a loop — call it mapWith.
// It takes an array and a transformation function.
// Return a NEW array where every item has been passed through the function.
// The original array must not be changed.
//
// Hint: start with an empty result array.
//       For each item in arr, push fn(item) into result.
function mapWith(arr, fn) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    const modifedValue = fn(item)
    result.push(modifedValue)
  }

  return result
}

const mul = (n) => n * n
console.log(mapWith([1, 2, 3], mul))        // [1, 4, 9]
// console.log(mapWith(['a', 'b', 'c'], (s) => s.toUpperCase())); // ['A', 'B', 'C']
// console.log(mapWith([], (n) => n + 1));               // []

//----------------------------------------------------
console.log('\n--- Problem 6: filterWith ---');

// Build your own version of .filter() using a loop — call it filterWith.
// It takes an array and a test function.
// Return a NEW array with only the items where fn(item) is truthy.
//
// Hint: same structure as mapWith, but instead of always pushing,
//       only push when the callback returns something truthy.
function filterWith(arr, fn) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]

    const isTruthyResult = fn(item)

    if (isTruthyResult) {
      result.push(item)
    }
  }

  return result
}

console.log(filterWith([1, 2, 3, 4, 5], (n) => n % 2 === 0));  // [2, 4]
console.log(filterWith(['cat', '', 'dog', ''], (s) => s));      // ['cat', 'dog']
console.log(filterWith([10, 20, 5, 30], (n) => n >= 20));       // [20, 30]

//----------------------------------------------------
console.log('\n--- Problem 7: createCounter ---');

// createCounter returns an object with three methods:
//   increment() — adds 1 to the internal count
//   decrement() — subtracts 1
//   getCount()  — returns the current count
//
// The count starts at 0 and should NOT be directly accessible from outside.
// That means count should live INSIDE createCounter as a local variable,
// not as a property on the returned object.
//
// Hint: declare `let count = 0` inside the function body.
//       Return an object whose methods use that variable.
//       This is a closure — the methods "close over" count.
function createCounter() {
  // this is how you create closure

  let count = 0
  
  return {
    increment() {
      count += 1
    },
    decrement() {
      count -= 1
    },
    getCount() {
      return count
    },
  }
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.increment();
counter.decrement();
console.log(counter.getCount()); // 2

const counter2 = createCounter(); // fresh, independent counter
counter2.increment();
console.log(counter2.getCount()); // 1
console.log(counter.getCount());  // 2 — unchanged
