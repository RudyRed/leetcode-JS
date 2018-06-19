// Given a m x n grid filled with non-negative numbers, find a path from top left
// to bottom right which minimizes the sum of all numbers along its path.
//
// Note: You can only move either down or right at any point in time.
//
// Example:
//
// Input:
// [
//   [1,3,1],
//   [1,5,1],
//   [4,2,1]
// ]
// Output: 7
// Explanation: Because the path 1→3→1→1→1 minimizes the sum.

const minPathSum = function(grid) {

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      let minPrevPath;

      if (grid[r - 1]) {
        minPrevPath = grid[r - 1][c];
      }

      if (grid[r][c - 1] !== undefined) {
        if (minPrevPath === undefined || grid[r][c - 1] < minPrevPath) {
          minPrevPath = grid[r][c - 1];
        }
      }

      grid[r][c] += minPrevPath ? minPrevPath : 0;
    }
  }

  return grid.pop().pop();
};

console.log(minPathSum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
]), 'sb 7');
