/**
 * 
 * Problem Title    Set Difference
 * Problem Statement    Return elements from the first array that do not appear in the second array.
Examples
[a,b,c],[b]→[a,c]   
[1,2],[2]→[1]    
[x],[x]→[]
[1, 2, 3],[1, 3] -> [2]
 */

function setDifference(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) newArr.push(arr1[i]);
  }
  return newArr;
}

console.log(setDifference([1, 2, 3], [1, 3]));
console.log(setDifference(["a", "b", "c"], ["b"]));
console.log(setDifference([1], [1]));
