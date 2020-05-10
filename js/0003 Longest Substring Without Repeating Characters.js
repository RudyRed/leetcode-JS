// Given a string, find the length of the longest substring without repeating characters.
//
// Examples:
//
// Given "abcabcbb", the answer is "abc", which the length is 3.
//
// Given "bbbbb", the answer is "b", with the length of 1.
//
// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer
// must be a substring, "pwke" is a subsequence and not a substring


const lengthOfLongestSubstring = function(s) {
  let max = 0;
  let count = 0;
  let obj = {};
  let lastSkip = -1;

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === undefined || obj[s[i]] < lastSkip) {
      obj[s[i]] = i;
      count++;
      continue;
    }
    if (count > max) max = count;
    count = i - obj[s[i]];
    lastSkip = obj[s[i]];
    obj[s[i]] = i;
  }
  return max > count ? max : count;
}
