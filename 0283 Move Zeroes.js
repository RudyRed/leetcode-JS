// Given an array nums, write a function to move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
//
// For example, given nums = [0, 1, 0, 3, 12], after calling your function,
// nums should be [1, 3, 12, 0, 0].
//
// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

const moveZeroes = function(nums) {
  let zeroCount = 0;
  let insertIndex = 0;

  for (let num of nums) {

    if (num) {
      nums[insertIndex++] = num;
    } else {
      zeroCount++;
    }

  }

  for (let i = nums.length - zeroCount; i < nums.length; i++) {
    nums[i] = 0;
  }

};

console.log(moveZeroes([2, 1, 3, 3, 12]), 'sb [1, 3, 12, 0, 0]');
