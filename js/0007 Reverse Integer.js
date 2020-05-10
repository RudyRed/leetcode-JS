// Given a 32-bit signed integer, reverse digits of an integer.
//
// Example 1:
//
// Input: 123
// Output:  321
// Example 2:
//
// Input: -123
// Output: -321
// Example 3:
//
// Input: 120
// Output: 21
// Note:
// Assume we are dealing with an environment which could only hold integers within
// the 32-bit signed integer range. For the purpose of this problem, assume that your
// function returns 0 when the reversed integer overflows.

const reverse = function(x) {
    let str = x.toString();
    let negNum = str[0] === '-' ? true : false;
    let output = '';

    for (let i = str.length -1; i >= negNum ? 1 : 0; i--) output += str[i];
    if (output > 2147483647) return 0;
    return negNum ? -1 * Number(output) : Number(output);
};
