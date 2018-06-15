// Given a 2D board and a word, find if the word exists in the grid.
//
// The word can be constructed from letters of sequentially adjacent cell, where
// "adjacent" cells are those horizontally or vertically neighboring. The same
// letter cell may not be used more than once.
//
// Example:
//
// board =
// [
//   ['A','B','C','E'],
//   ['S','F','C','S'],
//   ['A','D','E','E']
// ]
//
// Given word = "ABCCED", return true.
// Given word = "SEE", return true.
// Given word = "ABCB", return false.


const check = function (board, r, c, word) {

  const currentLetter = word.pop();

  if (board[r][c] !== currentLetter) {
    word.push(currentLetter);
    return false;
  }

  if (word.length === 0) return true;

  const saveUsedLetter = board[r][c];
  board[r][c] = '';

  // right
  if (board[r][c + 1] !== undefined && check(board, r, c + 1, word)) return true;
  // left
  if (board[r][c - 1] !== undefined && check(board, r, c - 1, word)) return true;
  // down
  if (board[r + 1] !== undefined && check(board, r + 1, c, word)) return true;
  // up
  if (board[r - 1] !== undefined && check(board, r - 1, c, word)) return true;

  // reset board and word on false;
  board[r][c] = saveUsedLetter;
  word.push(currentLetter);

  return false;
};

const exist = function (board, word) {
  if (word.length === 0 || board.length === 0) return false;

  const wordArr = [];

  for (let i = word.length - 1; i >= 0; i--) {
    wordArr.push(word[i]);
  }

  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (check(board, r, c, wordArr)) return true;
    }
  }

  return false;
};



console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E'],
  ], "ABCCED"), 'sb true');
console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E'],
  ], "SEE"), 'sb true');
console.log(exist([
    ['A','B','C','E'],
    ['S','F','C','S'],
    ['A','D','E','E'],
  ], "ABCB"), 'sb false');
console.log(exist([
    ['A'],
  ], "A"), 'sb true');
