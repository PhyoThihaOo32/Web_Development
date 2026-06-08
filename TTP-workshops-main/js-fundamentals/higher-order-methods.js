console.log('----------------- HIGHER ORDER METHODS -----------------');

const students = [
  { id: 1, name: 'Ada', score: 92, track: 'frontend' },
  { id: 2, name: 'Grace', score: 84, track: 'backend' },
  { id: 3, name: 'Lin', score: 76, track: 'frontend' },
  { id: 4, name: 'Katherine', score: 89, track: 'data' },
  { id: 5, name: 'Evelyn', score: 68, track: 'backend' },
];

// Use .map()
function getNames(students) {
  return students.map(function(s) {
    return s.name
  });
}

console.log(getNames(students));
// ['Ada', 'Grace', 'Lin', 'Katherine', 'Evelyn']

//----------------------------------------------------
console.log('\n');

// Use .filter()
function getPassingStudents(students) {
  return students.filter(function(s) {
    return s.score >= 70
  });
}

console.log(getPassingStudents(students).map((s) => s.name));
// ['Ada', 'Grace', 'Lin', 'Katherine']

//----------------------------------------------------
console.log('\n');

// Use .find()
function findById(students, id) {
  return students.find(s => s.id === id);
}

console.log(findById(students, 3)?.name); // 'Lin'
console.log(findById(students, 99)); // undefined

//----------------------------------------------------
console.log('\n');

// Use .reduce()
function getTotalScore(students) {
  return students.reduce((total, s) => total + s.score, 0);
}

console.log(getTotalScore(students)); // 409

//----------------------------------------------------
console.log('\n');

// Use .some() — true if any student scored above 90
function hasHighScorer(students) {
  return students.some(s => s.score > 90);
}

// Use .every() — true if all students are passing (score >= 70)
function allPassing(students) {
  return students.every(s => s.score >= 70);
}

console.log(hasHighScorer(students)); // true
console.log(allPassing(students)); // false
console.log(allPassing(students.slice(0, 4))); // true
