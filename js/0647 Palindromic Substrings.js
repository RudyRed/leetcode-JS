// Given a string, your task is to count how many palindromic substrings in this string.
//
// The substrings with different start indexes or end indexes are counted as
// different substrings even they consist of same characters.
//
// Example 1:
// Input: "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:
// Input: "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
// Note:
// The input string length won't exceed 1000.


const isPalindrome = function (s) {
  for (let i = 0; i <= Math.floor(s.length/2); i++) {
    if (s[i] !== s[s.length - 1 -i]) return false;
  }
  return true;
}

const countSubstrings = function (s) {
  s = s.split``;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      if (isPalindrome(s.slice(i, j + 1))) count++;
    }
  }

  return count;
};
