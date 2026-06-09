/**
 * JavaScript Part 2 — Functions as First-Class Citizens + Async
 *
 * Topics:
 *  1. The Call Stack
 *  2. Higher-Order Functions (HOF)
 *  3. Callbacks
 *  4. Array Methods (HOF in Practice) — map, filter, find, forEach, reduce
 *  5. Recursion
 *  6. Asynchronous JavaScript — setTimeout, the Event Loop
 */

/** ================
 * THE CALL STACK
 * ================ */

// JavaScript executes code one line at a time (single-threaded).
// The call stack is how JS keeps track of WHERE it is in your program.
//
// Think of it like a stack of plates:
//   - When a function is called, it gets placed ON TOP of the stack.
//   - When a function returns (finishes), it gets removed from the top.
//   - JS always runs whatever is on top of the stack first.
//   - This is called LIFO: Last In, First Out.

function one() {
  console.log("one: start");
  two(); // calls two — two gets pushed ON TOP of the stack
  console.log("one: end"); // only runs AFTER two() fully finishes and is popped off
}

function two() {
  console.log("two: start");
  three(); // calls three — three gets pushed ON TOP of the stack
  console.log("two: end"); // only runs AFTER three() finishes
}

function three() {
  console.log("three: start");
  console.log("three: end"); // three finishes, gets popped off the stack
}

one();
// Output order:
// one: start
// two: start
// three: start
// three: end    ← three() finishes first (it was on top)
// two: end      ← then two() finishes
// one: end      ← then one() finishes

// The call stack in that moment looks like this:
//   | three() |  ← top, currently running
//   | two()   |
//   | one()   |
//   | main    |  ← the global script itself

// When a function errors out, JS prints a "stack trace" — that's just the call stack
// at the moment the error happened, printed top to bottom. Reading stack traces is a skill.

// Stack Overflow: if a function keeps calling itself with no end condition,
// the stack grows until JS crashes it.
// function forever() { forever(); } // ← don't run this — it will crash

/** ==============================
 * HIGHER-ORDER FUNCTIONS (HOF)
 * ============================== */

// In JavaScript, functions are "first-class values."
// That means a function can be:
//   - stored in a variable
//   - passed as an argument to another function
//   - returned from another function
//
// A Higher-Order Function is any function that:
//   (a) accepts another function as an argument, OR
//   (b) returns a function

// Example (a): HOF that accepts a function
function doTwice(fn) {
  fn(); // call the function that was passed in
  fn();
}

function sayHi() {
  console.log("Hi!");
}

doTwice(sayHi); // "Hi!" "Hi!"
// Notice: we pass sayHi WITHOUT parentheses — we're handing the function itself,
// not calling it. doTwice decides when to call it.

// Example (b): HOF that returns a function
function makeMultiplier(factor) {
  // closure happens here! - anything declared within this scope will be remembered

  return function (n) {
    return n * factor;
  };
}

const triple = makeMultiplier(3);
console.log(triple(5)); // 15
console.log(triple(10)); // 30
// makeMultiplier(3) returned a brand new function that "remembers" factor = 3.
// This is called a closure — the inner function closes over the outer variable.

/** ===========
 * CALLBACKS
 * =========== */

// A callback is a function you pass to another function, to be called later.
// The name "callback" just describes the relationship — it gets "called back" by the HOF.

// Real-world analogy: you order food at a restaurant and give them your number.
// They call YOU back when the order is ready — you don't stand at the counter waiting.

// Simple callback example
function processUserInput(name, callback) {
  const formatted = name.trim().toLowerCase();
  callback(formatted); // invoke the callback with the result
}

processUserInput("  TAYLOR  ", function (result) {
  console.log("Processed name:", result); // "processed name: taylor"
});

// Arrow function as callback — same thing, shorter syntax
processUserInput("  MORGAN  ", (result) => {
  console.log("Processed name:", result); // "processed name: morgan"
});

// Callbacks are everywhere in JavaScript:
//   - Array methods (map, filter, forEach) — covered next
//   - Event listeners: element.addEventListener('click', callback)
//   - setTimeout / setInterval — covered at the end
//   - Older API requests (before Promises existed)

// The key mental model: the HOF controls WHEN the callback runs.
// You write what to do — the HOF decides when.

/** ==================================
 * ARRAY METHODS — HOF IN PRACTICE
 * ==================================
 * These are built-in HOFs on every array.
 * You will use these constantly — especially in React.
 * Learn to reach for these instead of for-loops.
 */

const students = [
  { name: "Alex", grade: 88, passed: true },
  { name: "Jamie", grade: 72, passed: true },
  { name: "Riley", grade: 55, passed: false },
  { name: "Jordan", grade: 95, passed: true },
  { name: "Casey", grade: 61, passed: false },
];

// --- forEach ---
// Runs a callback once for each item. Returns nothing (undefined).
// Use it when you want to DO something with each item but don't need a new array.

console.log("--- forEach ---");
students.forEach((student) => {
  console.log(student.name, "→", student.grade);
});
// Alex → 88, Jamie → 72, etc.

// --- map ---
// Transforms each item and returns a NEW array of the same length.
// Original array is never changed.
// Callback receives (item, index, array) but you usually only need item.

console.log("--- map ---");
const names = students.map((student) => student.name);
console.log(names); // ['Alex', 'Jamie', 'Riley', 'Jordan', 'Casey']

const letterGrades = students.map((student) => {
  if (student.grade >= 90) return "A";
  if (student.grade >= 80) return "B";
  if (student.grade >= 70) return "C";
  return "Below C";
});
console.log(letterGrades); // ['B', 'C', 'Below C', 'A', 'Below C']

// In React you'll use map to render lists:
//   const listItems = students.map(s => <li>{s.name}</li>);

// --- filter ---
// Returns a NEW array containing only the items where the callback returns true.
// Items that return false are excluded. Original array unchanged.

console.log("--- filter ---");
const passingStudents = students.filter((student) => student.passed);
console.log(passingStudents.map((s) => s.name)); // ['Alex', 'Jamie', 'Jordan']

const honorRoll = students.filter((student) => student.grade >= 90);
console.log(honorRoll.map((s) => s.name)); // ['Jordan']

// --- find ---
// Returns the FIRST item where the callback returns true.
// Returns undefined if nothing matches. Stops searching once it finds one.

console.log("--- find ---");
const firstFailing = students.find((student) => !student.passed);
console.log(firstFailing); // { name: 'Riley', grade: 55, passed: false }

// --- Chaining methods ---
// These methods return arrays, so you can chain them together.

const topPasserNames = students
  .filter((s) => s.passed) // keep only those who passed
  .filter((s) => s.grade >= 85) // keep only those with grade ≥ 85
  .map((s) => s.name); // extract names
console.log(topPasserNames); // ['Alex', 'Jordan']

// --- reduce ---
// The most flexible (and trickiest) array method.
// Reduces the entire array down to a SINGLE value.
// Callback receives (accumulator, currentItem) — you control how they combine.
// Second argument to reduce() is the starting value for the accumulator.

console.log("--- reduce ---");
const totalScore = students.reduce((sum, student) => {
  return sum + student.grade;
}, 0); // starting value is 0

console.log(totalScore); // 371
console.log("Average:", totalScore / students.length); // 74.2

// reduce can also build objects or arrays — but start with sum/count use cases.

/** ===========
 * RECURSION
 * =========== */

// Recursion: a function that calls ITSELF as part of its own logic.
// It's another way to repeat work — an alternative to loops.
//
// Every recursive function needs two things:
//   1. Base case  — when to STOP (prevents infinite recursion / stack overflow)
//   2. Recursive case — where the function calls itself, moving toward the base case

// Example 1: Countdown
function countdown(n) {
  if (n <= 0) {
    // BASE CASE: stop here
    console.log("Done!");
    return;
  }
  console.log(n);
  countdown(n - 1); // RECURSIVE CASE: call itself with a smaller value
}

countdown(5);
// 5, 4, 3, 2, 1, Done!

// What's happening on the call stack:
//   countdown(5) calls countdown(4)
//   countdown(4) calls countdown(3)
//   countdown(3) calls countdown(2)
//   countdown(2) calls countdown(1)
//   countdown(1) calls countdown(0) → base case, starts returning
//   ... each frame pops off the stack in reverse order

// Example 2: Factorial  (n! = n × (n-1) × ... × 1)
function factorial(n) {
  if (n === 1) return 1; // base case: 1! = 1
  return n * factorial(n - 1); // recursive case
}

console.log(factorial(5)); // 120  →  5 * 4 * 3 * 2 * 1

// Example 3: Sum of a nested array (where loops struggle)
// Recursion shines when the structure is unpredictable — like nested arrays.
function sumNested(arr) {
  let total = 0;
  for (let item of arr) {
    if (Array.isArray(item)) {
      total += sumNested(item); // item is an array → recurse into it
    } else {
      total += item;
    }
  }
  return total;
}

console.log(sumNested([1, [2, 3], [4, [5, 6]]])); // 21

// Rule of thumb: if you find yourself nesting loops to handle unknown depth,
// recursion is probably the cleaner answer.

/** ===========================
 * ASYNCHRONOUS JAVASCRIPT
 * ===========================
 *
 * JS is single-threaded — it can only do ONE thing at a time.
 * But websites need to:
 *   - fetch data from a server (takes time)
 *   - wait for a user to click a button
 *   - run a timer
 * ... without freezing the entire page.
 *
 * The solution: the Event Loop.
 *
 * Three things you need to know:
 *   1. Call Stack     — where your synchronous code runs (covered above)
 *   2. Web APIs       — browser features that handle timers, fetch, DOM events
 *                       (they run OUTSIDE the call stack, in parallel)
 *   3. Callback Queue — when a Web API finishes, it puts its callback here.
 *                       The event loop moves callbacks from this queue to the
 *                       call stack ONLY when the call stack is empty.
 */

// --- setTimeout ---
// Schedules a callback to run after a minimum delay (in milliseconds).
// It does NOT pause your code — execution continues immediately.

console.log("A");

setTimeout(function () {
  console.log("B — I ran after 2 seconds");
}, 2000);

console.log("C");

// Output:
// A
// C
// B — I ran after 2 seconds  ← comes last, even though it's written second

// WHY: setTimeout hands the callback off to the browser's timer Web API.
// The call stack doesn't wait — it runs 'C' immediately.
// After 2 seconds, the browser puts the callback into the Callback Queue.
// The Event Loop sees the stack is empty → moves the callback to the stack → it runs.

// --- The "0ms" trick ---
// Even setTimeout(..., 0) runs AFTER the current synchronous code finishes.
// 0ms doesn't mean "right now" — it means "as soon as the stack is clear."

console.log("1");
setTimeout(() => console.log("2 — async"), 0);
console.log("3");

// Output: 1, 3, 2 — async
// This is a classic interview question. The key: async callbacks always wait
// for the synchronous code to finish, even with a 0ms delay.

// --- Why this matters for you ---
// When you use fetch() to get data from an API, it's asynchronous.
// The data won't exist until the request comes back — you can't use it immediately.
//
// fetch('https://api.example.com/data')    ← starts the request
//   .then(response => response.json())     ← runs WHEN the response arrives
//   .then(data => console.log(data))       ← runs WHEN JSON is parsed
//
// The .then() callbacks work exactly like setTimeout callbacks — they wait
// for the async work to finish, then get added to the queue and run.

// --- setInterval ---
// Runs a callback repeatedly on a fixed interval, until cleared.

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("tick:", count);

  if (count === 3) {
    clearInterval(intervalId); // stop after 3 ticks — always clean up intervals!
    console.log("interval stopped");
  }
}, 1000); // every 1 second

// Output (over 3 seconds):
// tick: 1
// tick: 2
// tick: 3
// interval stopped

/** ===========
 * PUTTING IT ALL TOGETHER
 * ===========
 * A real-world-ish example that uses callbacks, HOFs, and async together.
 * This mirrors what you'll do when fetching data from an API.
 */

// Pretend this function fetches user data from a server.
// We don't have the data yet — we use a callback to say "call me when you do."
function getUserData(userId, onSuccess, onError) {
  setTimeout(() => {
    // Simulate: odd userId = success, even = error
    if (userId % 2 !== 0) {
      onSuccess({ id: userId, name: "Taylor", role: "student" });
    } else {
      onError("User not found");
    }
  }, 1000);
}

getUserData(
  1,
  (user) => {
    console.log("Got user:", user.name);
    // now we could .map() over their courses, .filter() by status, etc.
  },
  (err) => {
    console.log("Error:", err);
  }
);

// This "callback pattern" for async work is the foundation.
// Promises (.then/.catch) and async/await are cleaner syntax for the same idea.

/** =================
 * THE `this` KEYWORD
 * =================
 *
 * `this` refers to the object that is currently executing the function.
 * The tricky part: `this` is NOT set when you write the function —
 * it's determined by HOW the function is called. <<<< IMPORTANT: HOW the function is called!!! >>>>>>
 *
 * Four rules, in order of priority:
 *   1. Method call   → `this` is the object before the dot
 *   2. Regular call  → `this` is the global object (or undefined in strict mode)
 *   3. Arrow function → no own `this` — borrows it from the surrounding scope
 *   4. new keyword   → `this` is the newly created object (covered in Classes)
 */

// Rule 1: Method call — `this` = the object that owns the method
const dog = {
  name: "Biscuit",
  bark() {
    console.log(this.name + " says woof!"); // `this` is `dog`
  },
};
dog.bark(); // "Biscuit says woof!"

// Rule 2: Regular function call — `this` is NOT the object you might expect
const copyBark = dog.bark; // we detached the method from the object
copyBark(); // "undefined says woof!" (or crashes in strict mode)
// The function is the same, but the CALL has no object before the dot.
// `this` lost its binding the moment we separated it from `dog`.

// This is the classic "lost this" bug — very common with callbacks:
const counter = {
  count: 0,
  startBroken() {
    setTimeout(function () {
      // `this` here is NOT `counter` — it's the global object (or undefined)
      // because setTimeout calls the function as a plain function, not as a method
      this.count++; // ← broken
      console.log(this.count); // NaN or error
    }, 500);
  },
};

// Rule 3: Arrow functions — the fix for "lost this"
// Arrow functions do NOT have their own `this`.
// They capture `this` from the scope where they were DEFINED, not where they're called.
const counterFixed = {
  count: 0,
  start() {
    setTimeout(() => {
      // Arrow function: `this` is whatever it was in `start()` — which is `counterFixed`
      this.count++;
      console.log(this.count); // 1 ✅
    }, 500);
  },
};
counterFixed.start();

// Quick mental model:
//   Regular function: "who called me?" → `this` = that caller
//   Arrow function:   "where was I written?" → `this` = that outer scope

/** ===========
 * PROTOTYPES
 * ===========
 *
 * Every object in JavaScript has a hidden link to another object called its prototype.
 * When you access a property that doesn't exist on an object, JS automatically
 * walks UP the prototype chain looking for it.
 *
 * This is how methods like .push(), .map(), and .toUpperCase() exist — they live
 * on the prototype of Array and String, not copied onto every single array/string.
 *
 * You don't usually work with prototypes directly anymore (classes replaced the syntax),
 * but understanding this helps you read error messages and understand JavaScript itself.
 */

// Before classes existed, you built "blueprints" with constructor functions.
// Intentionally written as a constructor function (not a class) to show what classes replaced.

function Animal(name, sound) {
  // `this` here refers to the new object being created (Rule 4 from above)
  this.name = name;
  this.sound = sound;
}

// Methods go on the prototype — NOT inside the constructor.
// If you put them inside the constructor, a new copy is created for every instance.
// On the prototype, ALL instances share one copy.
Animal.prototype.speak = function () {
  console.log(this.name + " says " + this.sound);
};

const cat = new Animal("Luna", "meow");
const lion = new Animal("Simba", "roar");

cat.speak(); // "Luna says meow"
lion.speak(); // "Simba says roar"

// cat and lion each have their own `name` and `sound` (own properties),
// but they SHARE the same `speak` function via the prototype.
console.log(cat.hasOwnProperty("name")); // true  — lives on cat itself
console.log(cat.hasOwnProperty("speak")); // false — lives on Animal.prototype

// The prototype chain for cat:
//   cat → Animal.prototype → Object.prototype → null

/** ========
 * CLASSES
 * ========
 *
 * ES6 (2015) introduced class syntax. It is NOT a new system —
 * it's cleaner syntax for the exact same prototype mechanism above.
 * Under the hood, a class IS a constructor function + prototype assignments.
 *
 * typeof Animal === 'function'  ← classes are functions in disguise
 *
 * Use classes when you need multiple objects that share the same shape and behavior.
 */

class Person {
  // constructor runs automatically when you call `new Person(...)`
  constructor(name, age) {
    this.name = name; // own property on every instance
    this.age = age;
  }

  // Methods are automatically placed on Person.prototype — one shared copy
  greet() {
    return `Hi, I'm ${this.name} and I'm ${this.age} years old.`;
  }

  birthday() {
    this.age++;
    console.log(`Happy birthday, ${this.name}! Now ${this.age}.`);
  }
}

const p1 = new Person("Alex", 20);
const p2 = new Person("Jamie", 22);

console.log(p1.greet()); // "Hi, I'm Alex and I'm 20 years old."
p1.birthday(); // "Happy birthday, Alex! Now 21."

// Each instance has its own data, shared behavior
console.log(p1.name); // "Alex"
console.log(p2.name); // "Jamie"
console.log(p1.greet === p2.greet); // true — same function on the prototype

// --- Inheritance with extends ---
// A subclass inherits all properties and methods of its parent.
// Use `extends` to create the relationship, `super()` to call the parent constructor.

class Student extends Person {
  constructor(name, age, major) {
    super(name, age); // MUST call super() first — sets up the Person part
    this.major = major;
  }

  // Can add new methods
  study() {
    console.log(`${this.name} is studying ${this.major}.`);
  }

  // Can OVERRIDE a parent method
  greet() {
    return `${super.greet()} I'm studying ${this.major}.`;
  }
}

const s1 = new Student("Riley", 19, "Computer Science");
console.log(s1.greet()); // "Hi, I'm Riley and I'm 19 years old. I'm studying Computer Science."
s1.study(); // "Riley is studying Computer Science."
s1.birthday(); // "Happy birthday, Riley! Now 20." — inherited from Person

// The prototype chain for s1:
//   s1 → Student.prototype → Person.prototype → Object.prototype → null

// --- Prototype vs Class: the honest comparison ---
//
//   Prototype syntax (old)            Class syntax (modern)
//   ─────────────────────────────     ──────────────────────────────
//   function Animal(n, s) {           class Animal {
//     this.name = n;                    constructor(n, s) {
//     this.sound = s;                     this.name = n;
//   }                                     this.sound = s;
//   Animal.prototype.speak = ...        }
//                                       speak() { ... }
//                                     }
//
//   Same result. Class is just easier to read and write.
//   You'll still encounter prototype syntax in older codebases and Stack Overflow answers.

// --- `this` inside classes ---
// The same rules apply. The most common issue: passing a method as a callback.

class Timer {
  constructor() {
    this.seconds = 0;
  }

  tick() {
    this.seconds++;
    console.log("seconds:", this.seconds);
  }

  startBroken() {
    // `this.tick` detached from `this` — `this` will be wrong inside tick
    setInterval(this.tick, 1000); // ← broken
  }

  startFixed() {
    // Arrow function preserves `this` from the class instance
    setInterval(() => this.tick(), 1000); // ✅
  }
}

// In React class components (older style), you'll see this fixed with:
//   this.tick = this.tick.bind(this); in the constructor
// But modern React uses function components + hooks, so you rarely hit this anymore.
