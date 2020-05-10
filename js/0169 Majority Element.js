// Given an array of size n, find the majority element. The majority element
// is the element that appears more than ⌊ n/2 ⌋ times.
//
// You may assume that the array is non-empty and the majority element
// always exist in the array.

const majorityElement = function(nums) {
  const count = {};

  for (let num of nums) {

    if (count[num]) {
      count[num]++;
    } else {
      count[num] = 1;
    }

    if (count[num] >= nums.length / 2) return num;

  }

  return nums[nums.length - 1];
};

console.log(majorityElement([1,2,2,3]), 'sb 2');
console.log(majorityElement([1,2,3,0]), 'sb 0');
