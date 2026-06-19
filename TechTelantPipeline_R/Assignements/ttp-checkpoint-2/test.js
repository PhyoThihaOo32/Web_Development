console.log(
  sumArray([
    [1, 2],
    [3, 4],
  ]),
);
console.log(sumArray([[5], [6]]));
console.log(
  sumArray([
    [1, 1],
    [1, 1],
  ]),
);

function sumArrRecur(arr, i = 0, j = 0) {
  if (i >= arr.length) return 0;
  else if (j >= arr[i].length) return sumArrRecur(arr, i++, 0);
  else arr[i][j] + sumArrRecur(arr, i, j++);
}

console.log(
  sumArrRecur([
    [1, 1],
    [1, 1],
  ]),
);
