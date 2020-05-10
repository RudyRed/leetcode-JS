// The Hamming distance between two integers is the number of positions at which the
// corresponding bits are different.
//
// Given two integers x and y, calculate the Hamming distance.
//
// Note:
// 0 ≤ x, y < 231.
//
// Example:
//
// Input: x = 1, y = 4
//
// Output: 2
//
// Explanation:
// 1   (0 0 0 1)
// 4   (0 1 0 0)
//        ↑   ↑
//
// The above arrows point to positions where the corresponding bits are different.

const hammingDistance = function(x, y) {
  x = x.toString(2);
  y = y.toString(2)
  let sum = 0;

  for (let i = 0; i < Math.max(x.length, y.length); i++) {
    if ((x[x.length - 1 - i] === '1' ? 1 : 0)  + (y[y.length - 1 - i] === '1' ? 1 : 0) == 1) sum++;
  }

  return sum
};

console.log(hammingDistance(93, 73));
