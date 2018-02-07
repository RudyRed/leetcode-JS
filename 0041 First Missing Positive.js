// Given an unsorted integer array, find the first missing positive integer.
//
// For example,
// Given [1,2,0] return 3,
// and [3,4,-1,1] return 2.
//
// Your algorithm should run in O(n) time and uses constant space.

const firstMissingPositive = function(nums) {
  let len = nums.length;
  
  for (let i = 0; i < len; i++) {
    let num = nums.pop();
    if (num > 0) nums[num * -1] = 1;
  }

  for (let i = 1; i <= len + 1; i++) {
    if (!nums[i * -1]) return i;
  }
};

// console.log(firstMissingPositive([1,2]),'3');
// console.log(firstMissingPositive([3,4,-1,1]),'2');
