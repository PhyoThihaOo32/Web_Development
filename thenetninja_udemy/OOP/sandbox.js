// // const userOne = {
// //   username: "ryu",
// //   email: "ryu@netninja.com",
// //   login() {
// //     console.log("the user logged in");
// //   },
// //   logout() {
// //     console.log("ther user logged out");
// //   },
// // };

// // const userTwo = {
// //   username: "John",
// //   email: "john@netninja.com",
// //   login() {
// //     console.log("the user logged in");
// //   },
// //   logout() {
// //     console.log("ther user logged out");
// //   },
// // };

// // console.log(userOne.email, userOne.username);
// // userOne.login();
// // console.log(userTwo.email, userTwo.username);
// // userTwo.login();

// class User {
//   constructor(username, email) {
//     // set up properties
//     this.username = username;
//     this.email = email;
//     this.score = 0;
//   }

//   login() {
//     console.log(`${this.username} just logged in`);
//     return this;
//   }
//   logout() {
//     console.log(`${this.username} just logged out`);
//     return this;
//   }
//   incScore() {
//     this.score++;
//     console.log(`${this.username} has a score of ${this.score}`);
//     return this;
//   }
// }

// // the new keywords
// // 1 - it creates a new empty object {}
// // 2 - it binds the value of 'this' to the new empty object
// // 3 - it calls the constructor function to 'build' the object

// const userOne = new User("phyo", "phot@gmaii.com");
// const userTwo = new User("Pepito", "pepito@catmail.com");

// console.log(userOne);
// console.log(userTwo);
// userOne.login();
// userTwo.login();
// userOne.logout();
// userTwo.logout();

// userOne.incScore();
// userOne.login().incScore().logout();

// // when method/function not explictly return anything - js by default return undefined

// // CLASS INHERITANCES
// class Admin extends User {
//   constructor(username, email, title) {
//     // when we call super inside the constructor- it look for the parent class - and look inside the parent constructor
//     super(username, email);
//     this.title = title;
//   }
//   deleteUser(users, userToDelete) {
//     return users.filter((user) => user.username !== userToDelete.username);
//   }
// }

// const userThree = new Admin("shun", "shun@gmail.com", "black-belt-manager");
// let users = [userOne, userTwo, userThree];
// console.log(users);
// users = userThree.deleteUser(users, userOne);
// console.log(users);
// console.log(userThree);

// CONSTRUCTOR UNDER HOOD // PROTOTYPE

/**
 * every object in javascript has a prototype
 * prototypes contain all the methods for that object type
 * when we create an object the properties of the object are stored directly under the object
 * but the methods are in prototypes - meaning every diff obj has diff properties but same methods
 *
 * __proto__ property of the obj point to that object's prototypes
 */

function User(username, email) {
  this.username = username;
  this.email = email;

  //   this.login = function () {
  //     console.log(`${this.username} has successfully logged in.`);
  //   };
}

User.prototype.login = function () {
  console.log(`${this.username} has successfully logged in.`);
  return this;
};

User.prototype.logout = function () {
  console.log(`${this.username} has successfully logged out.`);
  return this;
};

const userOne = new User("mario", "mario@gmail.com");
const userTwo = new User("popeye", "popeye@gmail.com");

console.log(userOne, userTwo);
userOne.login();
console.log(User.prototype);
console.log(userOne.prototype);
userTwo.login().logout();

function Admin(username, email, title) {
  User.call(this, username, email);
  this.title = this.title;
}

// inheritence prototype
Admin.prototype = Object.create(User.prototype);
// adding new method
Admin.prototype.deleterUser = function () {
  // delete a user
};

const userThree = new Admin("daughtry", "d@email.com", "loud-mouth-singer");
