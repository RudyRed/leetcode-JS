// Follow up for "Unique Paths":
//
// Now consider if some obstacles are added to the grids. How many unique paths would there be?
//
// An obstacle and empty space is marked as 1 and 0 respectively in the grid.
//
// For example,
// There is one obstacle in the middle of a 3x3 grid as illustrated below.
//
// [
//   [0,0,0],
//   [0,1,0],
//   [0,0,0]
// ]
// The total number of unique paths is 2.
//
// Note: m and n will be at most 100.

const uniquePathsWithObstacles = function(obstacleGrid) {
  if (!obstacleGrid.length || !obstacleGrid[0].length) return 0;
  let lastRow = [1];

  for (let r = 0; r < obstacleGrid.length; r++) {
    for (let c = 0; c < obstacleGrid[0].length; c++) {
      if (obstacleGrid[r][c]) {
        lastRow[c] = 0;
        continue;
      }
      let val = 0;
      if (lastRow[c - 1]) val += lastRow[c - 1];
      if (lastRow[c]) val += lastRow[c];
      lastRow[c] = val;
    }
  }

  return lastRow.pop();
};
