// Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
//
// A region is captured by flipping all 'O's into 'X's in that surrounded region.
//
// For example,
// X X X X
// X O O X
// X X O X
// X O X X
// After running your function, the board should be:
//
// X X X X
// X X X X
// X X X X
// X O X X

const isSurrounded = function(board, r, c, visitedObj) {
  if (visitedObj[r] === undefined) visitedObj[r] = {};
  visitedObj[r][c] = true;
  board[r][c] = 'Y';

  if (board[r][c + 1] === undefined) {
    return false;
  } else if (board[r][c + 1] === 'O') {
    const res = isSurrounded(board, r, c + 1, visitedObj);
    if (!res) return false;
  }

  if (board[r][c - 1] === undefined) {
    return false;
  } else if (board[r][c - 1] === 'O') {
    const res = isSurrounded(board, r, c - 1, visitedObj);
    if (!res) return false;
  }

  if (board[r - 1] === undefined || board[r - 1][c] === undefined) {
    return false;
  } else if (board[r - 1][c] === 'O') {
    const res = isSurrounded(board, r - 1, c, visitedObj);
    if (!res) return false;
  }

  if (board[r + 1] === undefined || board[r + 1][c] === undefined) {
    return false;
  } else if (board[r + 1][c] === 'O') {
    const res = isSurrounded(board, r + 1, c, visitedObj);
    if (!res) return false;
  }

  return true;
};

const changeYs = function (board, r, c, value) {
  board[r][c] = value;

  if (board[r][c + 1] === 'Y') {
    changeYs(board, r, c + 1, value);
  }

  if (board[r][c - 1] === 'Y') {
    changeYs(board, r, c - 1, value);
  }

  if (board[r - 1] && board[r - 1][c] === 'Y') {
    changeYs(board, r - 1, c, value);
  }

  if (board[r + 1] && board[r + 1][c] === 'Y') {
    changeYs(board, r + 1, c, value);
  }

};


const solve = function(board) {
  const visitedObj = {};

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (visitedObj[r] && visitedObj[r][c]) continue;
      if (board[r][c] === 'X') continue;

      if (isSurrounded(board, r, c, {})) {
        changeYs(board, r, c, 'X')
      } else {
        changeYs(board, r, c, 'O');
      }

    }
  }

};

console.log(solve([["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]));
