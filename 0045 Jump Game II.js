// Given an array of non-negative integers, you are initially positioned at the
// first index of the array.
//
// Each element in the array represents your maximum jump length at that position.
//
// Your goal is to reach the last index in the minimum number of jumps.
//
// For example:
// Given array A = [2,3,1,1,4]
//
// The minimum number of jumps to reach the last index is 2. (Jump 1 step from
//   index 0 to 1, then 3 steps to the last index.)
//
// Note:
// You can assume that you can always reach the last index.

const jump = function(nums) { /// NON linear Naive
  let jumps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    let maxVal = 0;
    let nextIndex = 0;
    for (let j = 1; j <= Math.min(nums[i], nums.length - 1); j++) {
      if (i + j === nums.length - 1) {
        nextIndex = nums.length - 1;
        break;
      }
      let val = nums[i + j] + i + j;
      if (val >= maxVal) {
        maxVal = val;
        nextIndex = i + j;
      }
    }
    i = nextIndex - 1;
    jumps++;
  }

  return jumps;
};

// console.log(jump([2,3,1,1,4]), 'shouldbe 2');
// console.log(jump([2, 5, 4, 1, 2, 1, 1]), 'shouldbe 2');
// console.log(jump([10,9,8,7,6,5,4,3,2,1,1,0]), 'shouldbe 2');
