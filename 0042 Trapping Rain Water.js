// Given n non-negative integers representing an elevation map where the width of
// each bar is 1, compute how much water it is able to trap after raining.
//
// For example,
// Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

const trap = function(height) {
  let indexOfLeftMostMax;
  let indexOfRightMostMax;
  let waterSum = 0;
  let maxHeight = height.reduce((a, i, index) => {
    if (i === a) indexOfRightMostMax = index;
    if (i > a) {
      indexOfLeftMostMax = index;
      indexOfRightMostMax = index;
      return i;
    }
    return a;
  }, 0);

  let leftMax = 0;
  for (let i = 0; i < indexOfLeftMostMax; i++) {
    if (height[i] > leftMax) {
      leftMax = height[i];
      continue;
    }
    waterSum += leftMax - height[i];
  }
  let rightMax = 0;
  for (let i = height.length - 1; i > indexOfRightMostMax; i--) {
    if (height[i] > rightMax) {
      rightMax = height[i];
      continue;
    }
    waterSum += rightMax - height[i];
  }
  for (let i = indexOfLeftMostMax + 1; i < indexOfRightMostMax; i++) {
    waterSum += maxHeight - height[i];
  }
  return waterSum;
};
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]), 'should be 6');
