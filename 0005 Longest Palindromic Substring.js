// Given a string s, find the longest palindromic substring in s.
// You may assume that the maximum length of s is 1000.
//
// Example:
//
// Input: "babad"
//
// Output: "bab"
//
// Note: "aba" is also a valid answer.
// Example:
//
// Input: "cbbd"
//
// Output: "bb"

const longestPalindrome = function(s) {
  let max = '';
  for (let i = 0; i < s.length; i++) {
    let keepGoingEven = false;
    let keepGoingOdd = true;
    let j = 0;
    let even = '';
    let odd = s[i];
    if (s[i] == s[i + 1]) {
      even += s[i] + s[i + 1];
      keepGoingEven = true;
    }
    while (keepGoingEven || keepGoingOdd) {
      j++;
      if (keepGoingOdd &&  s[i + j] && s[i - j] && s[i + j] === s[i - j]) {
        odd = s[i - j] + odd + s[i + j];
      } else {
        keepGoingOdd = false;
      }
      if (keepGoingEven &&  s[i + j + 1] && s[i - j] && s[i + j + 1] === s[i - j]) {
        even = s[i - j] + even + s[i + j + 1];
      } else {
        keepGoingEven = false;
      }
    }
    if (even.length > max.length) {
      max = even;
    }
    if (odd.length > max.length) {
      max = odd;
    }
    if (max.length === s.length) {
      break;
    }
  }
  return max;
};
