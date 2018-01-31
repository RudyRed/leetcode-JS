// A robot is located at the top-left corner of a m x n grid
// (marked 'Start' in the diagram below).
//
// The robot can only move either down or right at any point in time. The robot is
// trying to reach the bottom-right corner of the grid
// (marked 'Finish' in the diagram below).
//
// How many possible unique paths are there?
//
//
// Above is a 3 x 7 grid. How many possible unique paths are there?
//
// Note: m and n will be at most 100.
// m = rows, n = column, not that it really matters...

const uniquePaths = function (m, n) {
  let grid = [];

  for (let r = 0; r < m; r++) {
    grid[r] = [];
    for (let c = 0; c < n; c++) {
      if (!c) {
        grid[r].push(1);
      } else {
        grid[r].push(grid[r][c - 1] + (r ? grid[r -1][c] : 0));
      }
    }
  }

  return grid[m - 1][n - 1];
};
