// Write a function that takes a string as input and reverse only the vowels of a string.
//
// Example 1:
// Given s = "hello", return "holle".
//
// Example 2:
// Given s = "leetcode", return "leotcede".
//
// Note:
// The vowels does not include the letter "y".


const vowels = {
  'A': true,
  'E': true,
  'I': true,
  'O': true,
  'U': true,
  'a': true,
  'e': true,
  'i': true,
  'o': true,
  'u': true,
};

const reverseVowels = function(s) {
  s = s.split``;
  let [left, right] = [-1, s.length];

  dance:
  while (true) {

    while (!vowels[s[++left]]) {
      if (left >= right) break dance;
    }

    while (!vowels[s[--right]]) {
      if (left >= right) break dance;
    }

    if (left < right) {
      [s[left], s[right]] = [s[right], s[left]];
    }

  }

  return s.join``;
};

console.log(reverseVowels('hEllo'));
console.log(reverseVowels('leetcode') === 'leotcede');
