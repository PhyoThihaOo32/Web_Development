// loops
// for loops

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(`finished!`);

const arr = ["shaun", "mary", "diggie"];

for (let i = 0; i < arr.length; i++) {
  //   console.log(`names: ${arr[i]}`);
  let html = `<div> ${arr[i]} </div>`;
  console.log(html);
}

// while loop
let i = 0;
while (i < arr.length) {
  console.log(`names ${arr[i]}`);
  i++;
}

// do while loop
i = 0;
do {
  console.log(`value of i is : ${i}`);
  i++;
} while (i < 5);

// if statements
const age = 20;
if (age > 20) {
  console.log(`you are over 20 years old.`);
} else {
  console.log(`you are under 20.`);
}

const ninjas = ["ninjaA", "ninjaB", "ninjaC"];

if (ninjas.length > 1) {
  console.log(`that is more than one ninja mate!`);
} else {
  console.log(`you don't have any ninja left.`);
}

const password = "pass@1234";

if (password.length >= 12 && password.includes("@")) {
  console.log(`that is strong password.`);
} else if (
  password.length >= 8 ||
  (password.includes("@") && password.length > 5)
) {
  console.log(`that is fair password.`);
} else {
  console.log("password is weak.");
}

// logical NOT (!)
if (1 /**condition is ture */) {
  // run the code
}

// break and continue
const scores = [20, 30, 40, 0, 50, 60, 70, 80, 90, 99];

for (let i = 0; i < scores.length; i++) {
  console.log(`your scores: ${scores[i]}`);
  if (scores[i] === 0) {
    console.log(`Opps skipping this.`);
    continue;
  }
  if (scores[i] === 90) {
    console.log(`great score!`);
    break;
  }
}

console.log(`rewarded!`);

// swtich statements

const grades = "H";

switch (grades) {
  case "A":
    console.log("Got Pizza");
    break;
  case "B":
    console.log("Got Mango.");
    break;
  case "C":
    console.log("Got Coffee");
    break;
  case "D":
    console.log("Got Hmm... Milk.");
    break;
  case "F":
    console.log("Got Chicken.");
    break;
  default:
    console.log("Got Sushi and Tacos.");
    break;
}

// variable and block scope

number = 30;

if (true) {
  let age = 40; // redefine the age inside the code block
  let name = "phyo";
  console.log(`inside code block: `, age, name);
  if (true) {
    let age = 50;
    console.log(`inside 2nd code block`, age);
    var test = "all Phyo";
  }
}

console.log(`outside code block: `, age, test); // global scope block age - const age
