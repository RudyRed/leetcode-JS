// You are a professional robber planning to rob houses along a street.
// Each house has a certain amount of money stashed, the only constraint stopping
// you from robbing each of them is that adjacent houses have security system
// connected and it will automatically contact the police if two adjacent houses
// were broken into on the same night.
//
// Given a list of non-negative integers representing the amount of money of each
// house, determine the maximum amount of money you can rob tonight without
// alerting the police.

const rob = function (nums) { //better solution
  let prev = 0;
  let curr = 0;

  for (let num of nums) {
    const temp = curr;
    curr = Math.max(curr, prev + num);
    prev = temp;
  }

  return curr;
};

// const rob = function (nums, dynamObj = {}) { // memoize recursice solution
//   if (nums.length < 2) return nums.length ? nums[0] : 0;
//
//   const nums1 = nums.slice(2);
//   let possiblity1;
//
//   if (dynamObj[nums1] === undefined) {
//     possiblity1 = rob(nums1, dynamObj);
//     dynamObj[nums1] = possiblity1;
//   } else {
//     possiblity1 = dynamObj[nums1];
//   }
//
//   possiblity1 += nums[0];
//
//   const nums2 = nums.slice(3);
//   let possiblity2 = dynamObj[nums2];
//
//   if (dynamObj[nums2] === undefined) {
//     possiblity2 = rob(nums2, dynamObj);
//     dynamObj[nums2] = possiblity2;
//   } else {
//     possiblity2 = dynamObj[nums2];
//   }
//
//   possiblity2 += nums[1];
//
//   return Math.max(possiblity1, possiblity2);
// };


console.log(rob([1,2,3,4,5,6,7,8]), 'sb 20');
console.log(rob([1,2,3,4,5,6,7,8,9]), 'sb 25');
console.log(rob([226,174,214,16,218,48,153,131,128,17,157,142,88,43,37,157,43,221,191,68,206,23,225,82,54,118,111,46,80,49,245,63,25,194,72,80,143,55,209,18,55,122,65,66,177,101,63,201,172,130,103,225,142,46,86,185,62,138,212,192,125,77,223,188,99,228,90,25,193,211,84,239,119,234,85,83,123,120,131,203,219,10,82,35,120,180,249,106,37,169,225,54,103,55,166,124]), 'sb 7102');
