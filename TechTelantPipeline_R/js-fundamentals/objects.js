console.log("----------------- OBJECTS -----------------");

function getFullName(person) {
  return person.firstName + " " + person.lastName;
}

console.log(getFullName({ firstName: "Ada", lastName: "Lovelace" })); // "Ada Lovelace"
console.log(getFullName({ firstName: "Grace", lastName: "Hopper" })); // "Grace Hopper"

//----------------------------------------------------
console.log("\n");

function isAdult(person) {
  return person.age >= 18;
}

console.log(isAdult({ name: "Alice", age: 20 })); // true
console.log(isAdult({ name: "Bob", age: 17 })); // false
console.log(isAdult({ name: "Sam", age: 18 })); // true

//----------------------------------------------------
console.log("\n");

function introduce(person) {
  return `Hi, I'm ${person.name} — ${person.role} at ${person.company}.`;
}

console.log(introduce({ name: "Ada", role: "engineer", company: "ACME" }));
// "Hi, I'm Ada — engineer at ACME."

console.log(introduce({ name: "Grace", role: "architect", company: "IBM" }));
// "Hi, I'm Grace — architect at IBM."

//----------------------------------------------------
console.log("\n");

function countProperties(obj) {
  return Object.keys(obj).length;
}

console.log(countProperties({ a: 1, b: 2, c: 3 })); // 3
console.log(countProperties({})); // 0
console.log(countProperties({ name: "Ada" })); // 1

//----------------------------------------------------
console.log("\n");

// Returns a new object containing only the specified keys
function pick(obj, keys) {
  const result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = obj[keys[i]];
  }
  return result;
}

console.log(pick({ name: "Ada", age: 30, role: "dev" }, ["name", "role"]));
// { name: 'Ada', role: 'dev' }

console.log(pick({ a: 1, b: 2, c: 3 }, ["a", "c"]));
// { a: 1, c: 3 }

//----------------------------------------------------
console.log("\n");

// Returns the city from a nested address object
// Hint: use dot notation twice — person.address.city
function getCity(person) {
  return person.address.city;
}

console.log(
  getCity({ name: "Ada", address: { city: "New York", zip: "10001" } })
);
// "New York"
console.log(
  getCity({ name: "Grace", address: { city: "Los Angeles", zip: "90001" } })
);
// "Los Angeles"

//----------------------------------------------------
console.log("\n");

// Returns a NEW person object with the city updated — do NOT mutate the original.
// The person has a nested address: { name: '...', address: { city: '...', zip: '...' } }
//
// Hint: you need to spread TWO levels to avoid mutation:
//   { ...person, address: { ...person.address, city: newCity } }
function updateCity(person, newCity) {}

const resident = { name: "Ada", address: { city: "New York", zip: "10001" } };
const relocated = updateCity(resident, "Boston");

console.log(relocated.address.city); // "Boston"
console.log(resident.address.city); // "New York"  ← original must stay the same!
console.log(resident === relocated); // false

//----------------------------------------------------
console.log("\n");

// Given TWO person objects, return true if they live in the same city.
// Each person has: { name: '...', address: { city: '...' } }
function sameCity(personA, personB) {}

console.log(
  sameCity(
    { name: "Ada", address: { city: "New York" } },
    { name: "Grace", address: { city: "New York" } }
  )
); // true

console.log(
  sameCity(
    { name: "Ada", address: { city: "New York" } },
    { name: "Alan", address: { city: "Los Angeles" } }
  )
); // false
