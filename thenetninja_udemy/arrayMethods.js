const scores = [10, 30, 15, 25, 50, 40, 5];

// filter - iterate the array - take each element - check the condition and return boolean
// non destructive - does not change the original array

// const newScores = scores.filter((score) => {
//   //return true or false
//   return score > 20;
// });

// console.log(scores);
// console.log(newScores);

const users = [
  { name: "dyke", premium: true },
  { name: "niki", premium: false },
  { name: "pepito", premium: true },
  { name: "trump", premium: true },
];

const premium_user = users.filter((user) => user.premium);

console.log(premium_user);

// map method
// iterate each element - update(perform arithematic operation) on each element - push the new value in new array
// not destrutive - does not the change the original array

const prices = [10, 30, 15, 25, 90, 40, 51];

const salePrices = prices.map((price) => price / 2);

console.log(prices);
console.log(salePrices);

const products = [
  { name: "gold star", price: 20 },
  { name: "tomatoes", price: 10 },
  { name: "spicy shrimp", price: 40 },
  { name: "naughty beans", price: 80 },
  { name: "long life noodles", price: 5 },
];

const saleProducts = products.map((product) => {
  if (product.price > 30) {
    return { name: product.name, price: product.price / 2 };
  } else {
    return product;
  }
});

console.log(saleProducts);

// reduce methods

const result = scores.reduce((acc, curr) => {
  if (curr > 50) {
    acc++;
  }
  return acc;
}, 0);

const scores_obj = [
  { player: "nintendo", score: 79 },
  { player: "lukewarm", score: 90 },
  { player: "popeyes", score: 99 },
  { player: "rhae", score: 100 },
  { player: "popeyes", score: 45 },
  { player: "nintendo", score: 79 },
  { player: "lukewarm", score: 92 },
  { player: "popeyes", score: 99 },
  { player: "rhae", score: 100 },
  { player: "popeyes", score: 35 },
];

const popeyes_scores = scores_obj.reduce((acc, curr) => {
  if (curr.player === "popeyes") {
    acc += curr.score;
  }
  return acc;
}, 0);

console.log(popeyes_scores);

//find method - iterate the array - check the condtion(find the element based on the condition) - if true - return the element

const numbers = [10, 50, 0, 40, 60, 80, 19, 100];

const number = numbers.find((num) => {
  return num > 50;
});

console.log(number);

const cities = ["new york", "yangon", "paris", "tokyo"];
const myCity = cities.find((city) => {
  const regex = /^y\w+n$/;
  return city.match(regex);
});

console.log(myCity);

// sort and reverse method
// change the original array
const names = ["bobo", "apollo", "uranus", "zeus"];

names.sort(); // sort alphabetically
names.reverse(); // reverse the array

names.sort((a, b) => b - a);

console.log(names);

const money = [100, 299, 390, 400, 500];
console.log(money.sort());

const players = [
  { name: "mario", score: 20 },
  { name: "linus", score: 40 },
  { name: "pepito", score: 100 },
  { name: "bunny", score: 98 },
  { name: "rain", score: 78 },
];

players.sort((a, b) => {
  if (a.score > b.score) return -1;
  else if (b.score > a.score) return 1;
  else return 0;
});

//players.sort((a,b)=> b.score - a.score);

// chaining array methods
const my_products = [
  { name: "gold star", price: 30 },
  { name: "tomatoes", price: 10 },
  { name: "spicy shrimp", price: 40 },
  { name: "naughty beans", price: 80 },
  { name: "long life noodles", price: 5 },
  { name: "chocolate bar", price: 15 },
];

// const filtered = my_products.filter((product) => product.price > 20);
// const promos = filtered.map((product) => {
//   return `this ${product.name} is ${product.price / 2} pounds`;
// });

const promos = my_products
  .filter((product) => product.price > 20)
  .map((product) => `this ${product.name} is ${product.price / 2} pounds`);

console.log(promos);
