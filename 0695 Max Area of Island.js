// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's
// (representing land) connected 4-directionally (horizontal or vertical.) You may
// assume all four edges of the grid are surrounded by water.
//
// Find the maximum area of an island in the given 2D array. (If there is no island,
//   the maximum area is 0.)
//
// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island
// must be connected 4-directionally.
//
// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

const maxAreaOfIsland = function(grid) {
  let maxSize = 0;
  const pendingRow = [];
  const pendingCol = [];

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 0) continue;
      let islandSize = 0;
      pendingRow.push(r);
      pendingCol.push(c);

      while (pendingCol.length) {
        islandSize++;
        const row = pendingRow.pop();
        const col = pendingCol.pop();
        grid[row][col] = 0;

        if (grid[row][col + 1]) {
          pendingRow.push(row);
          pendingCol.push(col + 1);
          grid[row][col + 1] = 0;
        }

        if (grid[row + 1] && grid[row + 1][col]) {
          pendingRow.push(row + 1);
          pendingCol.push(col);
          grid[row + 1][col] = 0;
        }

        if (grid[row][col - 1]) {
          pendingRow.push(row);
          pendingCol.push(col - 1);
          grid[row][col - 1] = 0;
        }

        if (grid[row - 1] && grid[row - 1][col]) {
          pendingRow.push(row - 1);
          pendingCol.push(col);
          grid[row - 1][col] = 0;
        }

      }

      if (islandSize > maxSize) maxSize = islandSize;
    }
 }

  return maxSize;
};

console.log(maxAreaOfIsland([[0,0,1,0,0,0,0,1,0,0,0,0,0],
                             [0,0,0,0,0,0,0,1,1,1,0,0,0],
                             [0,1,1,0,1,0,0,0,0,0,0,0,0],
                             [0,1,0,0,1,1,0,0,1,0,1,0,0],
                             [0,1,0,0,1,1,0,0,1,1,1,0,0],
                             [0,0,0,0,0,0,0,0,0,0,1,0,0],
                             [0,0,0,0,0,0,0,1,1,1,0,0,0],
                             [0,0,0,0,0,0,0,1,1,0,0,0,0]]), 'sb 6');

console.log(maxAreaOfIsland([[0,0,0,0,0,0,0,0]]));
