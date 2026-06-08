console.log('----------------- CLASSES & this -----------------');

// A class is a blueprint for creating objects that share the same shape and behavior.
// `new ClassName(...)` runs the constructor and hands back a fresh instance.
// `this` inside any method refers to THAT specific instance — the one you called it on.
//
// Key things to remember:
//   - constructor() runs automatically when you write `new MyClass(...)`
//   - Own data (state) goes on `this` inside the constructor
//   - Methods defined in the class body are shared across all instances (via the prototype)
//   - `extends` lets one class inherit everything from another
//   - `super(...)` inside a constructor calls the PARENT constructor — required before using `this`

//----------------------------------------------------
console.log('\n--- Problem 1: BankAccount ---');

// Build a BankAccount class.
//
// constructor(owner, initialBalance)
//   - stores owner and balance on the instance
//
// deposit(amount)
//   - adds amount to balance
//   - logs: "Deposited $<amount>. New balance: $<balance>"
//
// withdraw(amount)
//   - if amount > balance, log "Insufficient funds." and do NOT change the balance
//   - otherwise subtract amount from balance
//   - logs: "Withdrew $<amount>. New balance: $<balance>"
//
// getBalance()
//   - returns the current balance (number)
//
// Hint: all of these methods use `this` to access the instance's data.
//       What property name will you give the balance? Make sure you're consistent.

class BankAccount {
  constructor(owner, initialBalance) {
    this.owner = owner
    this.balance = initialBalance
  }

  deposit(amount) {
    this.balance += amount
    console.log(`Deposited $${amount}. New balance: $${this.balance}`)
  }
  
  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds.')
      return
    }

    this.balance -= amount
    console.log(`Withdrew $${amount}. New balance: $${this.balance}`)
  }

  getBalance(amount) {
    return this.balance
  }
}

const account = new BankAccount('Alex', 100);
account.deposit(50);           // "Deposited $50. New balance: $150"
account.withdraw(30);          // "Withdrew $30. New balance: $120"
account.withdraw(200);         // "Insufficient funds."
console.log(account.getBalance()); // 120

//----------------------------------------------------
console.log('\n--- Problem 2: Rectangle ---');

// Build a Rectangle class.
//
// constructor(width, height)
//   - stores width and height
//
// area()
//   - returns width * height
//
// perimeter()
//   - returns 2 * (width + height)
//
// isSquare()
//   - returns true if width === height, false otherwise
//
// Hint: these methods don't need parameters — they read from `this`.

class Rectangle {
  constructor(width, height) {
    this.width = width
    this.height = height
  }

  area() {
    return this.width * this.height
  }

  perimeter() {
    return 2 * (this.width + this.height)
  }

  isSquare() {
    if (this.width === this.height) {
      return true
    }

    return false
  }
}

const r1 = new Rectangle(4, 6);
console.log(r1.area());        // 24
console.log(r1.perimeter());   // 20
console.log(r1.isSquare());    // false

const r2 = new Rectangle(5, 5);
console.log(r2.area());        // 25
console.log(r2.isSquare());    // true

//----------------------------------------------------
console.log('\n--- Problem 3: Animal → Dog (inheritance) ---');

// Step A: Build an Animal class.
//   constructor(name, sound)
//   speak() — logs: "<name> says <sound>!"
//
// Step B: Build a Dog class that extends Animal.
//   constructor(name, breed)
//     - calls super() with name and the sound 'woof'
//     - stores breed on the instance
//   fetch(item)
//     - logs: "<name> fetches the <item>!"
//   speak()  — OVERRIDE the parent version
//     - logs: "<name> barks: WOOF WOOF!" (dogs are enthusiastic)
//
// Hints:
//   - super(name, 'woof') passes name and sound up to Animal's constructor
//   - To call the parent's version of a method inside an override: super.speak()
//     (you don't need to here, but good to know)

class Animal {
  constructor(name, sound) {
    this.name = name
    this.sound = sound
  }

  speak() {
    console.log(`${this.name} says ${this.sound}!`)
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'woof')

    this.name = name
    this.breed = breed
  }

  fetch(item) {
    console.log(`${this.name} fetches the ${item}!`)
  }

  speak() {
    console.log(`${this.name} barks: ${this.sound.toUpperCase()} ${this.sound.toUpperCase()}!`)
  }
}

const genericAnimal = new Animal('Parrot', 'squawk');
genericAnimal.speak(); // "Parrot says squawk!"

const dog = new Dog('Biscuit', 'Golden Retriever');
dog.speak();           // "Biscuit barks: WOOF WOOF!"
dog.fetch('ball');     // "Biscuit fetches the ball!"

// instanceof confirms the relationship
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true — Dog extends Animal

//----------------------------------------------------
console.log('\n--- Problem 4: Stack ---');

// A Stack is a data structure that works like a stack of plates: Last In, First Out.
// Items are always added and removed from the TOP.
//
// Build a Stack class with:
//   push(item)  — add item to the top
//   pop()       — remove and RETURN the top item (return undefined if empty)
//   peek()      — return the top item WITHOUT removing it (return undefined if empty)
//   isEmpty()   — return true if there are no items
//   size()      — return the number of items
//
// Hint: use an array stored on `this` as the internal storage.
//       Which end of the array is the "top"? Pick one and be consistent.

class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new Stack();
console.log(stack.isEmpty()); // true
stack.push('a');
stack.push('b');
stack.push('c');
console.log(stack.size());    // 3
console.log(stack.peek());    // 'c'   ← top, not removed
console.log(stack.pop());     // 'c'   ← removed
console.log(stack.pop());     // 'b'
console.log(stack.size());    // 1
console.log(stack.isEmpty()); // false

//----------------------------------------------------
console.log('\n--- Problem 5: FIX the lost-this bug ---');

// The `this` binding changes depending on HOW a function is called.
// Detaching a method from its object (e.g., storing it in a variable, or passing it
// as a callback) causes `this` to become undefined or the global object.
//
// Read the broken code below. It has a "lost this" bug inside setTimeout.
//
// Your task:
//   1. Run it as-is (uncomment if needed) and observe what's wrong.
//   2. Fix ONLY the setTimeout callback so `this` correctly refers to the Stopwatch instance.
//
// Hint: which kind of function preserves the outer `this` — regular or arrow?

class Stopwatch {
  constructor() {
    this.elapsed = 0;
  }

  start() {
    // BUG: the regular function inside setInterval loses `this`
    // The interval below will NOT correctly update this.elapsed.
    //
    // Fix it by converting the callback to an arrow function.
    // Do not move or rename anything else.
    const id = setInterval(() => {
      this.elapsed++;                         // ← broken: `this` is wrong here
      console.log('elapsed:', this.elapsed);  // will log NaN or crash
      if (this.elapsed >= 3) clearInterval(id);
    }, 500);
  }
}

// Once you fix the bug, this should log:
// elapsed: 1
// elapsed: 2
// elapsed: 3
// (then stop)

const watch = new Stopwatch();
watch.start();
