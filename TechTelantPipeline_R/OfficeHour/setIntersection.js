/**
 *
 * [a , b , c ] - [ a, c ] -> [a, c]
 */

function setIntersection(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    // n
    for (let j = 0; j < arr2.length; j++) {
      // n
      if (arr1[i] === arr2[y]) {
        newArr.push(arr1[i]);
      }
    }
  }
  return newArr;
}

console.log(setIntersection(["a", "b"], ["b", "c"]));
console.log(setIntersection([1, 2], [2, 3]));
// o(n^2)
