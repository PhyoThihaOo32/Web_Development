// local storage is our window object

// store data in local storage
localStorage.setItem("name", "mario"); // first arg is the name of the key - second is the value
localStorage.setItem("age", "32"); // gevery item stored in localstorage is string

// get data from ls
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name);
console.log(age);

// update data in local storage
localStorage.setItem("name", "popeye!");
localStorage.age = 45;
name = localStorage.getItem("name");
age = localStorage.getItem("age");
console.log(name);
console.log(age);

// deleting item from local storage
// remove single item
// localStorage.removeItem("name");
// name = localStorage.getItem("name");
// console.log(name);

// remove all items
localStorage.clear();

// Stringifying and Parsing Data
const todos = [
  {
    text: "go to gym",
    isAMust: true,
  },
  {
    text: "buy groceries",
    isAMust: false,
  },
  {
    text: "read a book",
    isAMust: false,
  },
  {
    text: "pay bills",
    isAMust: true,
  },
  {
    text: "call mom",
    isAMust: true,
  },
  {
    text: "finish project",
    isAMust: true,
  },
];

// step take this data and turn it into json string
console.log(JSON.stringify(todos));
localStorage.setItem("todos", JSON.stringify(todos));

// retrieve it and convert it back to array
const stored = localStorage.getItem("todos");
console.log(JSON.parse(stored));
