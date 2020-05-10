// Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).
//
// Note: The solution set must not contain duplicate subsets.
//
// Example:
//
// Input: [1,2,2]
// Output:
// [
//   [2],
//   [1],
//   [1,2,2],
//   [2,2],
//   [1,2],
//   []
// ]


const subsetsWithDup = function(nums, currentSet = []) {
  if (currentSet.length === 0) nums.sort();
  const output = [currentSet];
  let last = null;

  while (nums.length) {
    const num = nums.pop();

    if (last !== num) {
      output.push(...subsetsWithDup([...nums], [...currentSet, num]));
    }

    last = num;
  }

  return output;
};


console.log(subsetsWithDup([1,2,2]));
