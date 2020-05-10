// Given an index k, return the kth row of the Pascal's triangle.
//
// For example, given k = 3,
//         [1,2,1]
// Return [1,3,3,1].
//
// Note:
// Could you optimize your algorithm to use only O(k) extra space?

const getRow = function(rowIndex) {
  const output = [1];

  for (let i = 1; i <= rowIndex; i++) {
    let left = 1;

    for (let j = 1; j < output.length; j++) {
      const placeholder = left;
      left = output[j];
      output[j] += placeholder;
    }

    output.push(1);
  }

  return output;
};

console.log(getRow(3), 'sb [1,3,3,1]');
