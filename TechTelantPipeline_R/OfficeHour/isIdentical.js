/**
 * Given two array
 * [1,2] [1,2,3] => true
 * [1,2] [1,2] => true
 * [1,2] [1,3,4,5] => false
 */

function isIdentical(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

// [1,2,3]  [1,2,4]

// console.log(isIdentical([1,7,3], [1,2,3]));

// [1,2] [1,2,3] => true
// [1,3,2] [1,2] => false
// [1,2,3] [1,2] => true

function isIdentical2(arr1, arr2) {
  const length = arr1.length < arr2.length ? arr1.length : arr2.length;
  for (let i = 0; i < length; i++) {
    if (arr1[i] !== arr2[i]) return false;
    // if(arr1[i] === undefined) return false;
  }
  return true;
}

console.log(isIdentical2([1, 2, 4], [1, 2]));
