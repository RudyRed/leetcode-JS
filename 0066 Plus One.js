// Given a non-empty array of digits representing a non-negative integer, plus one to the integer.
//
// The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.
//
// You may assume the integer does not contain any leading zero, except the number 0 itself.
//
// Example 1:
//
// Input: [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Example 2:
//
// Input: [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.

const plusOne = function(digits) {
    if (digits.length === 1 && digits[0] === 9) return [1, 0];

    if (digits[digits.length - 1] < 9) {
      digits[digits.length - 1]++;
    } else {
      digits.pop();
      digits = plusOne(digits);
      digits.push(0);
    }

    return digits;
};

console.log(plusOne([9]));
console.log(plusOne([9,9,9]));
console.log(plusOne([4,3,2,1]));
