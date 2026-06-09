console.log('----------------- CONTROL FLOW -----------------');

// Grade scale:
// A: 90 – 100
// B: 80 – 89
// C: 70 – 79
// D: 60 – 69
// F: below 60
function grade(score) {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
}

console.log(grade(95)); // "A"
console.log(grade(83)); // "B"
console.log(grade(74)); // "C"
console.log(grade(61)); // "D"
console.log(grade(50)); // "F"

//----------------------------------------------------
console.log('\n');

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(16);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16

//----------------------------------------------------
console.log('\n');

function sumTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

console.log(sumTo(5)); // 15   (1+2+3+4+5)
console.log(sumTo(10)); // 55
console.log(sumTo(1)); // 1

//----------------------------------------------------
console.log('\n');

function countdown(n) {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
}

countdown(5);
// 5
// 4
// 3
// 2
// 1

//----------------------------------------------------
console.log('\n');

// A leap year has 366 days instead of 365 — it gets an extra Feb 29th.
// The rule has three parts:
//   1. A year IS a leap year if it is divisible by 4
//   2. EXCEPT: years divisible by 100 are NOT leap years
//   3. UNLESS: the year is also divisible by 400 — those ARE leap years
//
// Walk through the examples:
//   2024 → divisible by 4, not by 100        → leap year ✓
//   1900 → divisible by 100, but not by 400  → NOT a leap year ✗
//   2000 → divisible by 400                  → leap year ✓
//   2023 → not divisible by 4                → NOT a leap year ✗
//
// Hint: use % (modulo) to check divisibility. Example: 12 % 4 === 0 → true
function isLeapYear(year) {
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

console.log(isLeapYear(2000)); // true
console.log(isLeapYear(1900)); // false
console.log(isLeapYear(2024)); // true
console.log(isLeapYear(2023)); // false
