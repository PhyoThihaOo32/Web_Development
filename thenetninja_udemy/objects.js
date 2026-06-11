// objects in real life have properties and things they can do

// const blogs = [
//   { title: "spicy tomatoes and fighting cats", likes: 30 },
//   { title: "little finger childhood adventures", likes: 50 },
// ];

// console.log(blogs);

// creating object literals
let user = {
  name: "crystal",
  age: 32,
  email: "crystal@ninja.com",
  location: "berlin",
  //   blogs: ["spicy tomatoes", "from east to west"],
  // object arrays
  blogs: [
    { title: "spicy tomatoes and fighting cats", likes: 30 },
    { title: "little finger childhood adventures", likes: 50 },
  ],

  // adding methods
  login: function () {
    console.log("the user logged in.");
  },
  // short-hands version
  logout() {
    console.log("the user logged out.");
  },

  // this keyword - is a context object
  logBlogs() {
    // console.log(this.blogs);
    console.log(`this user has written the following blogs`);
    this.blogs.forEach((blog) => {
      console.log(blog.title, " ", blog.likes);
    });
    /**
     * when we use the arrow function, this will not point to the current object
     * it will still point to the global window object
     */
    // logBlogs: () => {
    //     console.log(this);
    // }
  },
};

console.log(user.name);

user.age = 35; // change the value

console.log(user.age);
console.log(user["email"]);
user.name = "Jackie";
console.log(user);

const key = "career";
user[key] = "writer";

console.log(user);

console.log(typeof user);
user.login();

console.log(typeof user.logout);

user.logBlogs();
// console.log(this); - global this is the window object

// math objects
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;
console.log(Math.round(area)); // round the number to nearest integers
console.log(Math.floor(area)); // cut the decimal
console.log(Math.ceil(area)); // round up
console.log(Math.trunc(area));

// random numbers
const random = Math.random();
console.log(random); // between 0 and 1
console.log(Math.round(random * 100));

// primitive and reference types
/**
 * primitive types      reference types
 * -numbers             -objects literal
 * -strings             -arrays
 * -booleans            -functions
 * -null                -dates
 * -undefined           -all other objects
 * -symbols
 *
 * -stored in stack     -stored in heap
 * -can access quick    -a bit slow to access
 * -but limited space   -more space
 */

let scoreOne = 50;
let scoreTwo = scoreOne;

console.log(`scoreOne : ${scoreOne}, scoreTwo ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne : ${scoreOne}, scoreTwo ${scoreTwo}`);

// reference values
const userOne = { name: "toto", age: 23 };
const userTwo = userOne;

console.log(userOne, userTwo);
userOne.name = "kilometer";

console.log(userOne, userTwo);
