// The n-queens puzzle is the problem of placing n queens on an n×n chessboard
// such that no two queens attack each other.
//
// Given an integer n, return all distinct solutions to the n-queens puzzle.
//
// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space respectively.
//
// For example,
// There exist two distinct solutions to the 4-queens puzzle:
//
// [
//  [".Q..",  // Solution 1
//   "...Q",
//   "Q...",
//   "..Q."],
//
//  ["..Q.",  // Solution 2
//   "Q...",
//   "...Q",
//   ".Q.."]
// ]

const createPossibilities = function (n) {
  let output = [];
  for (let r = 0; r < n; r++) {
    let str = '';
    for (let c = 0; c < n; c++) {
      if (r === c) {
        str += 'Q';
      } else {
        str += '.';
      }
    }
    output.push(str);
  }
  return output;
}

const clearOfConflict = function (board) { // since you check each time a row is aded only need to look up
  let r = board.length - 1;
  for (let c = 0; c < board[r].length; c++) {
    if (board[r][c] === 'Q') {
      let addIndex = 1;
      while (board[r - addIndex] && board[r - addIndex][c + addIndex]) {
        if (board[r - addIndex][c + addIndex] === 'Q') return false;
        addIndex++;
      }
      addIndex = 1;
      while (board[r - addIndex] && board[r - addIndex][c - addIndex]) {
        if (board[r - addIndex][c - addIndex] === 'Q') return false;
        addIndex++;
      }
    }
  }
  return true;
}

const solveNQueens = function(n, poss = createPossibilities(n), board = []) {
  let output = [];
  for (let i = 0; i < poss.length; i++) {
    let row = poss.pop();
    if (clearOfConflict(board.concat(row))) {
      if (!poss.length) {
        output.push(board.concat(row));
      } else {
        let results = solveNQueens(n, poss, board.concat(row));
        for (let goodBoard of results) output.push(goodBoard);
      }
    }
    poss.unshift(row);
  }
  return output;
};
