// Given a m x n matrix, if an element is 0, set its entire row and column to 0.
// Do it in place.

const setZeroes = function(matrix) {
  if (!matrix.length) return;
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 0) {
        matrix[r] = matrix[r].map(x => {
          if (x !== 0) return 'zero';
          return 0;
        });
        break;
      }
    }
  }

  for (let c = 0; c < matrix[0].length; c++) {
    for (let r = 0; r < matrix.length; r++) {
      if (matrix[r][c] === 0) {
        for (let row = 0; row < matrix.length; row++) matrix[row][c] = 0;
        break;
      }
    }
  }

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      if (matrix[r][c] === 'zero') matrix[r][c] = 0;
    }
  }
};
