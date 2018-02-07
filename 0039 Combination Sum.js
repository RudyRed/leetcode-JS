// Given a set of candidate numbers (C) (without duplicates) and a target
// number (T), find all unique combinations in C where the candidate numbers sums to T.
//
// The same repeated number may be chosen from C unlimited number of times.
//
// Note:
// All numbers (including target) will be positive integers.
// The solution set must not contain duplicate combinations.
// For example, given candidate set [2, 3, 6, 7] and target 7,
// A solution set is:
// [
//   [7],
//   [2, 2, 3]
// ]

const combinationSum = function(poss, target, combo = []) {
let output = [];

  for (let i = 0; i < poss.length; i++) {
    let num = poss[i];

    if (target === num) {
      output.push(combo.concat(num));
    } else if (num < target) {
      let res = combinationSum(poss.slice(i), target - num, combo.concat(num))
      for (let arr of res) {
        output.push(arr);
      }
    }
  }

  return output;
};


console.log(combinationSum([2, 3, 6, 7],7));
