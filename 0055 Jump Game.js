// Given an array of non-negative integers, you are initially positioned at
// the first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Determine if you are able to reach the last index.
//
// For example:
// A = [2,3,1,1,4], return true.
//
// A = [3,2,1,0,4], return false.

const canJump = function(nums) {
  let currIndex = 0;

  while (currIndex < nums.length - 1) {
    let maxVal = 0;
    let maxIndex;

    for (let i = 1; i <= nums[currIndex]; i++) {
      if (i + currIndex >= nums.length - 1) return true; // if at end
      if (!nums[currIndex + i]) continue;

      if (i + nums[i + currIndex] > maxVal) {
        maxVal = i + nums[i + currIndex];
        maxIndex = currIndex + i;
      }
      
    }
    if (!maxVal) return false;
    currIndex = maxIndex;
  }

  return true;
};

// console.log(canJump([2,0]), 'return true.');
// console.log(canJump([3,2,1,0,4]), 'return false.');
