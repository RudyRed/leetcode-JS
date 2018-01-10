// Given numRows, generate the first numRows of Pascal's triangle.
//
// For example, given numRows = 5,
// Return
//
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

const generate = function(numRows) {
  let output = Array(numRows);
  for (let i = 0; i < output.length; i++) {
    output[i] = Array(i + 1);
  }
  if (numRows > 0) {
    output[0][0] = 1;
  }
  if (numRows > 1) {
    output[1][0] = 1;
    output[1][1] = 1;
  }
  for (let i = 2; i < numRows; i++) {
    for (let j = 0; j < output[i].length; j++) {
      if (j === 0 || j === output[i].length -1) {
        output[i][j] = 1;
      }
      if (output[i][j] === undefined) {
        output[i][j] = output[i -1][j] + output[i - 1][j -1];
      }
    }
  }
  return output;
};
