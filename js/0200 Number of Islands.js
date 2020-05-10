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

const sweepIsland = (grid, r, c) => {
  if (grid[r] === undefined || grid[r][c] === undefined || grid[r][c] === '0') return
  grid[r][c] = '0'

  sweepIsland(grid, r - 1, c)
  sweepIsland(grid, r + 1, c)
  sweepIsland(grid, r, c - 1)
  sweepIsland(grid, r, c + 1)
}

const numIslands = grid => {
  let numOfIslands = 0

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === '0') continue
      numOfIslands++
      sweepIsland(grid, r, c)
    }
  }

  return numOfIslands
}

console.log(numIslands([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]))
console.log(numIslands([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]]))
