let count = 1;

function foo() {
  for (let count = 0; count <= 5; count++) {
    if (count === 2) {
      continue;
    }
    if (count === 4) {
      break;
    }
    console.log(count);
  }
  return;
}

foo();

//------------------------------------------------------

let age = 200;

const user = {
  name: "Phyo",
  age: age,
  info() {
    console.log(`Hi my name is ${this.name} and age ${24} year old.`);
  },
};

user.info();
console.log(user.age);

//--------------------------------------------------------------------

const room = {
  num: 451,
};

console.log(room);

function run(distance, fn) {
  console.log(`running for ${distance} miles.`);
  fn();
}

function eat() {
  console.log("eating...");
}

function dosomething(name, distance, fn1, fn2) {
  console.log(`name is ${name}`);
  fn1(distance, fn2);
}

dosomething("phyo", 100, run, eat);

function makeCoffee() {
  setTimeout(() => console.log("making coffee"), 2000);
}

const numbers = [1, 2, 3, 4, 5];

numbers.forEach((ele, index, arr) => {
  console.log(ele);
  console.log(index);
  console.log(arr);
});

function triple(ele, index, arr) {
  arr[index] = ele * 3;
}

function display(numbers) {
  numbers.forEach((n) => {
    console.log(n);
  });
}

numbers.forEach(triple);
display(numbers);
