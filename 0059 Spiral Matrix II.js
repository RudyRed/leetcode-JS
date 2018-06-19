// Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.
//
// Example:
//
// Input: 3
// Output:
// [
//  [ 1, 2, 3 ],
//  [ 8, 9, 4 ],
//  [ 7, 6, 5 ]
// ]

const generateMatrix = function (n) {
  const spiral = [];

  for (let i = 0; i < n; i++) spiral.push(new Array(n).fill(0));

  let r = 0;
  let c = -1;
  let val = 1;

  while (val <= n ** 2) {

    while (spiral[r][c + 1] === 0) { // fill right
      spiral[r][++c] = val++;
    }

    while (spiral[r + 1] && spiral[r + 1][c] === 0) { // fill down
      spiral[++r][c] = val++;
    }

    while (spiral[r][c - 1] === 0) { // fill left
      spiral[r][--c] = val++;
    }

    while (spiral[r - 1] && spiral[r - 1][c] === 0) { // fill up
      spiral[--r][c] = val++;
    }

  }

  return spiral;
};

console.log(generateMatrix(4));
