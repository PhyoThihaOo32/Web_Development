/**
 * ...is the rest operator. It collects all arguments passed into the
 * funtion into an array.
 */

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3));
// nums = [1,2,3];

/**
 * ...spread-> expands an array out into individual values.
 */

const arr1 = [1, 2, 3];
const copy = [...arr1]; // copying the ar1 -> [1,2,3]
const merged = [...arr1, ...copy]; // mergin arrays -> [1,2,3,1,2,3]
// console.log(merged);

const user = { name: "Allan", age: 34 };
const new_user = { ...user, age: 35 };
console.log(user, new_user); // { name: 'Allan', age: 34 } { name: 'Allan', age: 35 }
