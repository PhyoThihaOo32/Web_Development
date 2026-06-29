/**
 *Given an array and a target value, return how many times the target appears.
 */

function checkOccurance(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    // n
    if (target === arr[i]) count++;
  }
  return count;
}

console.log(checkOccurance([1, 2, 3, 3, 3, 3, 4, 5, 6, 6, 7], 3)); // 4 O(n)
