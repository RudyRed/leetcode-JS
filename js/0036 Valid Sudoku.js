// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
//
// The Sudoku board could be partially filled, where empty cells are filled with
// the character '.'.
//
//
// A partially filled sudoku which is valid.
//
// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable. Only the
// filled cells need to be validated.


const isNum = function (char) {
  if (char === '.') return false;
  return true;
};

const checkArray = function (arr) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!isNum(arr[i])) continue;
    if (obj[arr[i]]) return false;
    obj[arr[i]] = true;
  }
  return true;
};

const check3by3 = function (startingRow, startingColumn, grid) { // row and column of top left number
  let obj = {};
  for (let r = startingRow; r < startingRow + 3; r++) {
    for (let c = startingColumn; c < startingColumn + 3; c++) {
      if (!isNum(grid[r][c])) continue;
      if (obj[grid[r][c]]) return false;
      obj[grid[r][c]] = true;
    }
  }
  return true;
};

const isValidSudoku = function (grid) {
  for (let i = 0; i < grid.length; i++) {
    if (!checkArray(grid[i])) return false;
    let horizontal = [];
    for (let j = 0; j < grid[i].length; j++) {
      horizontal.push(grid[j][i]);
    }
    if (!checkArray(horizontal)) return false;
  }

  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      if (!check3by3(r * 3, c * 3, grid)) return false;
    }
  }
  return true;
};
