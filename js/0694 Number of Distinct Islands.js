// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's
// (representing land) connected 4-directionally (horizontal or vertical.) You may
// assume all four edges of the grid are surrounded by water.
//
// Count the number of distinct islands. An island is considered to be the same as
// another if and only if one island can be translated (and not rotated or reflected) to equal the other.
//
// Example 1:
// 11000
// 11000
// 00011
// 00011
// Given the above grid map, return 1.
// Example 2:
// 11011
// 10000
// 00001
// 11011
// Given the above grid map, return 3.
//
// Notice that:
// 11
// 1
// and
//  1
// 11
// are considered different island shapes, because we do not consider reflection / rotation.

const cartography = function (grid, islandObj, r, c, recursiveCallNumber = 1) {
  grid[r][c] = 0;

  if (grid[r][c + 1]) {
    islandObj['right'] = {};
    cartography(grid, islandObj['right'], r, c + 1, recursiveCallNumber + 1);
  }

  if (grid[r][c - 1]) {
    islandObj['left'] = {};
    cartography(grid, islandObj['left'], r, c - 1, recursiveCallNumber + 1);
  }

  if (grid[r - 1] && grid[r - 1][c]) {
    islandObj['down'] = {};
    cartography(grid, islandObj['down'], r - 1, c, recursiveCallNumber + 1);
  }

  if (grid[r + 1] && grid[r + 1][c]) {
    islandObj['up'] = {};
    cartography(grid, islandObj['up'], r + 1, c, recursiveCallNumber + 1);
  }

  return islandObj;
};

const numDistinctIslands = function(grid) {
  const mapObj = {};

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c]) {
        const islandMap = cartography(grid, {}, r, c);
        mapObj[JSON.stringify(islandMap)] = true;
      }
    }
  }

  return Object.keys(mapObj).length;
};

console.log(numDistinctIslands([[1,1,0,0,0],
                                [1,1,0,0,0],
                                [0,0,0,1,1],
                                [0,0,0,1,1]]));

console.log(numDistinctIslands([[1,1,0,1,1],
                                [1,0,0,0,0],
                                [0,0,0,0,1],
                                [1,1,0,1,1]]));
