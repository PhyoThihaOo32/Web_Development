

// Given a sorted 2D array, return the row whose minimum plus maximum is largest overall.

function largestRow(arr) {
  const firstArr = arr[0]; // [2,4]
  const firstArrLastIndex = firstArr.length - 1;
  let sum = 0;
  let max = arr[0][0] + firstArr[firstArrLastIndex];
  const index;
  for (let i = 0; i < arr.length; i++) {
    const lastIndex = arr[i].length - 1; // 1
    sum = arr[i][0] + arr[i][lastIndex]; //  7
    if (sum > max) {
      max = sum; // 11
      Index = i; // 1
    }
  }
  return arr[index];
}
