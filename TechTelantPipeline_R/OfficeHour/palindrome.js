/**
Problem Title    Is Palindrome
Problem Statement    Given a string, determine whether it reads the same forward and backward. 
Examples
racecar → true
level → true
hello → false
 */

function isPalindrome(str) { // 100
  let newStr = "";
  let firstIndex = 0;
  for (let i = str.length - 1; i >= 0; i--) { // 100
    newStr += str[i];
  }
  return newStr === str;
}


function isPalindrome2(str) {
  for (let i = 0; i < str.length / 2; i++) { // 50
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome2("racecar"));
console.log(isPalindrome2("hello"));
