//
// Given a collection of distinct numbers, return all possible permutations.
//
// For example,
// [1,2,3] have the following permutations:
// [
//   [1,2,3],
//   [1,3,2],
//   [2,1,3],
//   [2,3,1],
//   [3,1,2],
//   [3,2,1]
// ]

const permute = function(nums, arr = []) {
  if (!nums.length) return [arr];
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums.shift();
    output = output.concat(permute(nums, arr.concat(num)))
    nums.push(num);
  }

  return output;
};
