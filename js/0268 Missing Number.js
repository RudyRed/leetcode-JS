// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find
// the one that is missing from the array.
//
// Example 1
//
// Input: [3,0,1]
// Output: 2
// Example 2
//
// Input: [9,6,4,2,3,5,7,0,1]
// Output: 8
//
// Note:
// Your algorithm should run in linear runtime complexity. Could you implement
// it using only constant extra space complexity?

const missingNumber = function(nums) {
  const length = nums.length;
  let zeroFlag = true;

  for (let i = 0; i < length; i++) {
    const num = nums.pop();
    if (num) {
      nums[-1 * num] = 1;
    } else {
      zeroFlag = false;
    }
  }

  if (zeroFlag) return 0;

  for (let i = -1; i > length * -1; i--) {
    if (!nums[i]) return i * -1;
  }

  return length;
};

console.log(missingNumber([0,6,4,2,3,5,7,8,1]));
