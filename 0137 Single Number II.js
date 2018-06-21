// Given a non-empty array of integers, every element appears three times except
// for one, which appears exactly once. Find that single one.
//
// Note:
//
// Your algorithm should have a linear runtime complexity. Could you implement
// it without using extra memory?
//
// Example 1:
//
// Input: [2,2,3,2]
// Output: 3
// Example 2:
//
// Input: [0,1,0,1,0,1,99]
// Output: 99

const singleNumber = function(nums) {
  const frequency = {};

  for (let num of nums) frequency[num] = frequency[num] ? frequency[num] + 1 : 1;

  return Number(Object.keys(frequency).filter(x => frequency[x] === 1)[0]);
};

console.log(singleNumber([2,2,3,2]))
console.log(singleNumber([0,1,0,1,0,1,99]))
