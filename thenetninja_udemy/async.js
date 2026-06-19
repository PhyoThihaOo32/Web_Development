// Async JavaScript

// governs how we perform tasks which take some time to complete(e.g Getting data from a database)
// (start something now finish later)

// Synchronous JavaScript
// JS can run one statement at a time - its very nature - known as single threaded language

// console.log(1);
// console.log(2);

// // async code in action
// setTimeout(() => {
//   console.log("call backfunction fired");
// }, 2000);

// console.log(3);
// console.log(4);

// HTTP Requests - https://jsonplaceholder.typicode.com/

// const getTodos = (resource, callback) => {
//   const request = new XMLHttpRequest(); // create request object

//   request.addEventListener("readystatechange", () => {
//     //   console.log(request, request.readyState);
//     if (request.readyState === 4 && request.status === 200) {
//       const data = JSON.parse(request.responseText);
//       //   console.log(request.responseText);
//       callback(undefined, data);
//     } else if (request.readyState === 4) {
//       //   console.log("could not fetch the data.");
//       callback("could not fetch the data", undefined);
//     }
//   });
//   // setting up the request - state 1
//   //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // first arg is the type of req, second arg is the endpoint
//   request.open("GET", resource);
//   // sending the request - state 2
//   request.send();
// };

// console.log(1);
// console.log(2);

// callback hell - is the callback function getting nested inside again and again
// getTodos("Todos/phyo.json", (err, data) => {
//   //   console.log("call back fired!");
//   //   if (err) {
//   //     console.log(err);
//   //   } else {
//   //     console.log(data);
//   //   }
//   console.log(data);
//   getTodos("Todos/bob.json", (err, data) => {
//     console.log(data);
//     getTodos("Todos/fatjoe.json", (err, data) => {
//       console.log(data);
//     });
//   });
// });

// console.log(3);
// console.log(4);

// XMLHttpRequest: readyState
/**
0	UNSENT	Client has been created. open() not called yet.
1	OPENED	open() has been called.
2	HEADERS_RECEIVED	send() has been called, and headers and status are available.
3	LOADING	Downloading; responseText holds partial data.
4	DONE	The operation is complete.
 */

// response status

/**
 * Http response status codes indicate whether a specific HTTP request has been
 * successfully completed. Responses are grouped in five classes
 * 1- Informational responses (100 – 199)
 * 2- Successful responses (200 – 299)
 * 3- Redirection messages (300 – 399)
 * 4- Client error responses (400 – 499)
 * 5- Server error responses (500 – 599)
 */

// Jason Data - stands for JavaScript Object Notation - it is actually a string which look like javascript object
// JSON.parse - convert the string to javascript array/object

// Callback Hell - means you have callbacks inside callbacks inside callbacks, so the code becomes hard to read and manage.

// Promises Basic

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
//     // fetch something
//     // resolve("some data here!");
//     reject("this is an error");
//   });
// };

// getSomething().then(
//   (data) => {
//     console.log(data);
//   },
//   (err) => {
//     console.log(err);
//   },
// );

// getSomething()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest(); // create request object

//     request.addEventListener("readystatechange", () => {
//       //   console.log(request, request.readyState);
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject("error!");
//       }
//     });

//     // setting up the request - state 1
//     //   request.open("GET", "https://jsonplaceholder.typicode.com/todos/"); // first arg is the type of req, second arg is the endpoint
//     request.open("GET", resource);
//     // sending the request - state 2
//     request.send();
//   });
// };

// getTodos("Todos/phyo.json")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// chaining promises
// getTodos("Todos/phyo.json")
//   .then((data) => {
//     console.log("promise 1 resolved: ", data);
//     return getTodos("Todos/bob.json");
//   })
//   .then((data) => {
//     console.log("promise 2 resolved: ", data);
//     return getTodos("Todos/fatjoe.json");
//   })
//   .then((data) => {
//     console.log("promise 3 resolved: ", data);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// then() - means when the Promise finishes successfully, run this function

// the fetch API - return a Promise
// in fetch api - promise is only rejected when we have network error
/**
 * Fetch chaining means using multiple .then() methods in sequence. The first .then() handles the response, returns res.json(), and the next .then() receives the parsed data. .catch() handles any errors in the chain.
 */
// console.log("fetch()!");
// fetch("Todos/phyo.json")
//   .then((res) => {
//     console.log("resolved", res); // res is the response object
//     return res.json(); // this return a promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((er) => {
//     console.log("rejected", er);
//   });

// async & await

// async - whenever we call the async function that return a promise.
// await - await keyword hold the program(javascript) from assigning the value to the vairable untill the method(fetch()) return a promise

// const getTodos = async () => {
//   const response = await fetch("Todos/phyo.json");
//   //   console.log(response); // response is the object
//   const data = await response.json(); // response.json() eturn a promise and await - wait for the promise to fullfill and get the data from the promise
//   return data;
// };

// console.log(getTodos()); // even though the return is data object - because of async the function actually return a promise

// console.log(1);
// console.log(2);

// getTodos().then((data) => {
//   console.log("resolved: ", data);
// });

// console.log(3);
// console.log(4);

//   fetch("Todos/phyo.json")
//   .then((res) => {
//     console.log("resolved", res); // res is the response object
//     return res.json(); // this return a promise
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((er) => {
//     console.log("rejected", er);
//   });

// throwing and catching errors

const getTodos = async () => {
  const response = await fetch("Todos/phyo.json");
  if (response.status !== 200) {
    throw new Error("cannot fetch the data.");
  }
  const data = await response.json();

  return data;
};

getTodos()
  .then((data) => console.log("resolvedL ", data))
  .catch((error) => console.log("rejected: ", error.message));
