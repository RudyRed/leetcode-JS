// Given a triangle, find the minimum path sum from top to bottom. Each step you
// may move to adjacent numbers on the row below.
//
// For example, given the following triangle
//
// [
//      [2],
//     [3,4],
//    [6,5,7],
//   [4,1,8,3]
// ]
// The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
//
// Note:
//
// Bonus point if you are able to do this using only O(n) extra space, where n is
// the total number of rows in the triangle.

const minimumTotal = function(triangle) {

  for (let r = 1; r < triangle.length; r++) {
    for (let c = 0; c < triangle[r].length; c++) {
      let minPrevPath;

      if (triangle[r - 1][c] !== undefined) minPrevPath = triangle[r - 1][c];

      if (triangle[r - 1][c - 1] !== undefined) {
        minPrevPath = minPrevPath === undefined ? triangle[r - 1][c - 1] : Math.min(minPrevPath, triangle[r - 1][c - 1]);
      }

      triangle[r][c] += minPrevPath;
    }
  }

  return triangle[triangle.length - 1].reduce((a, i) => Math.min(a, i));
};

console.log(minimumTotal([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]), 'sb 11');
