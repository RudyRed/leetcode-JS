// Rotate an array of n elements to the right by k steps.
//
// For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is
// rotated to [5,6,7,1,2,3,4].

const rotate = function(nums, k) {
  let count = 0;
  k %= nums.length;

  for (let start = 0; count < nums.length; start++) {
    let replaceIndex = start + k;
    let prev = nums[start];

    while (replaceIndex != start) {

      const placeholder = nums[replaceIndex];
      nums[replaceIndex] = prev;
      prev = placeholder;
      replaceIndex = (replaceIndex + k) % nums.length;
      count++;

    }

    nums[replaceIndex] = prev;
    count++;
  }

  return nums; //remove for leetcode tests
};

console.log(rotate([1,2,3,4,5,6,7,8], 4));
console.log(rotate([1,2,3,4], 0))
console.log(rotate([1,2,3,4,5,6], 4))
console.log(rotate([1,2,3,4,5,6], 3));
console.log(rotate([1,2,3,4,5,6,7], 26));
