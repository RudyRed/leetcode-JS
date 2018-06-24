// According to the Wikipedia's article: "The Game of Life, also known simply as Life, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."
//
// Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):
//
// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
// Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
//
// Example:
//
// Input:
// [
//   [0,1,0],
//   [0,0,1],
//   [1,1,1],
//   [0,0,0]
// ]
// Output:
// [
//   [0,0,0],
//   [1,0,1],
//   [0,1,1],
//   [0,1,0]
// ]


// Any live cell with fewer than two live neighbors dies, as if caused by under-population.
// Any live cell with two or three live neighbors lives on to the next generation.
// Any live cell with more than three live neighbors dies, as if by over-population..
// Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
const gameOfLife = function(board) {
  const newBoard = [];

  for (let r = 0; r < board.length; r++) {
    const newRow = [];

    for (let c = 0; c < board[r].length; c++) {
      let numNeighbours = 0;

      if (r > 0) {
        for (let add of [-1, 0, 1]) {
          numNeighbours += board[r - 1][c + add] ? 1 : 0;
        }
      }

      if (r < board.length - 1) {
        for (let add of [-1, 0, 1]) {
          numNeighbours += board[r + 1][c + add] ? 1 : 0;
        }
      }

      numNeighbours += board[r][c + 1] ? 1 : 0;
      numNeighbours += board[r][c - 1] ? 1 : 0;

      if (numNeighbours < 2 || numNeighbours > 3) {
        newRow.push(0);
      } else if (numNeighbours === 3) {
        newRow.push(1);
      } else {
        newRow.push(board[r][c]);
      }

    }

    newBoard.push(newRow);
  }

  for (let r = 0; r < board.length; r++) {
    board[r] = newBoard[r];
  }

};


console.log(gameOfLife([
  [0,1,0],
  [0,0,1],
  [1,1,1],
  [0,0,0]
]));
