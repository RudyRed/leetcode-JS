// Given an array of integers, every element appears twice except for one.
// Find that single one.
//
// Note:
// Your algorithm should have a linear runtime complexity.
// Could you implement it without using extra memory?

const singleNumber = function(nums) {
  let len = nums.length;

  for (let i = 0; i < len; i++) {
    const num = nums.pop();

    if (num <= 0) {
      nums.unshift(num);
      continue;
    }

    if (nums[num * -1]) {
      nums[num * -1]++;
    } else {
      nums[num * -1] = 1;
    }

  }

  for (let num of Object.keys(nums)) {
    if (num >= 0) continue;

    if (nums[num] === 1) return num * -1;

    nums[num] = 0;
  }

  len = nums.length;

  for (let i = 0; i < len; i++) {
    const num = nums.pop();

    if (nums[num] === undefined) {
      nums[num] = 1;
    } else {
      nums[num]++;
    }

  }

  for (let num of Object.keys(nums)) {
    if (nums[num] === 1) return num * 1;
  }
};

// console.log(singleNumber([-1]))
// console.log(singleNumber([-1, 2, -3, 4, -1, 2, 4, -2, -2, -10, -10]))
