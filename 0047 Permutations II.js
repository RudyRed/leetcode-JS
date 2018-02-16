// Given a collection of numbers that might contain duplicates,
// return all possible unique permutations.
//
// For example,
// [1,1,2] have the following unique permutations:
// [
//   [1,1,2],
//   [1,2,1],
//   [2,1,1]
// ]
const permuteUnique = function(nums, permute = []) {
  if (!nums.length) return [permute];
  const numberUsed = {};
  let output = [];

  for (let i = 0; i < nums.length; i++) {
    let num = nums.shift();

    if (!numberUsed[num]) {
      output = output.concat(permuteUnique(nums, permute.concat(num)));
    }

    numberUsed[num] = true;
    nums.push(num);
  }

  return output;
};

console.log(permuteUnique([1,1,2]));
