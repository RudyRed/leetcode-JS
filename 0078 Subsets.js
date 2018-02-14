// Given a set of distinct integers, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// For example,
// If nums = [1,2,3], a solution is:
//
// [
//   [3],
//   [1],
//   [2],
//   [1,2,3],
//   [1,3],
//   [2,3],
//   [1,2],
//   []
// ]

const subsets = function(nums, combo = []) {
  let output = [];
  output.push(combo);

  for (let i = 0; i < nums.length; i++) {
    output = output.concat(subsets(nums.slice(i + 1), combo.concat(nums[i])));
  }

  return output;
};

console.log(subsets([1,2,3]));
