// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands.
// An island is surrounded by water and is formed by connecting adjacent lands
// horizontally or vertically. You may assume all four edges of the grid are all
// surrounded by water.
//
// Example 1:
//
// 11110
// 11010
// 11000
// 00000
// Answer: 1
//
// Example 2:
//
// 11000
// 11000
// 00100
// 00011
// Answer: 3

const numIslands = function (grid) {
  let islandCount = 0;

  const sweepWholeIsland = (r, c) => {
    grid[r][c] = 0;
    if (grid[r + 1] && grid[r + 1][c] == 1) sweepWholeIsland(r + 1, c); // down
    if (grid[r - 1] && grid[r - 1][c] == 1) sweepWholeIsland(r - 1, c); // up
    if (grid[r][c + 1] == 1) sweepWholeIsland(r, c + 1); // right
    if (grid[r][c - 1] == 1) sweepWholeIsland(r, c - 1); // left
  };

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] == 1) {
        islandCount++;
        sweepWholeIsland(r, c);
      }
    }
  }

  return islandCount;
};

// console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
