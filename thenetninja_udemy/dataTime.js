const { log } = require("node:console");

// dates & times
const now = new Date(); // date is the object
console.log(now);
// console.log(typeof now); // object

// year, months, day and times
console.log("get full year", now.getFullYear());
console.log("get month", now.getMonth());
console.log("get date", now.getDate());
console.log("get day", now.getDay());
console.log("get hour", now.getHours());
console.log("get minute", now.getMinutes());
console.log("get seconds", now.getSeconds());

// date string
console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// timestamps
const before = new Date("July 3 2026 12:48:00");
console.log("timestamp: ", now.getTime());

const diff = now.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(mins / 60);
const days = Math.round(hours / 24);

console.log("the blog was created at ", days, hours, mins);

// converting timestamp into date object
const timestamp = 1783097724238;
console.log(new Date(timestamp));
