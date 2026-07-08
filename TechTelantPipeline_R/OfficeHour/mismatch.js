/**
 * this function take two arrays as argument and check the array
 * and return the index of the first mismatch - if they are identical return -1
 *
 * for example
 * [1,2,3], [1,3,4] -> 1
 * [a,b], [a,b] -> -1
 * [5,6], [7,6] -> 0
 * [7,8,9,10], [7,8] -> -1
 *
 */

function mismatch(arr1, arr2) {
  const smallerLen = arr1.length < arr2.length ? arr1.length : arr2.length;

  for (let i = 0; i < smallerLen; i++) {
    if (arr1[i] !== arr2[i]) return i;
  }
  return -1;
}
