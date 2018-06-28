// Given a string S and a character C, return an array of integers representing the
// shortest distance from the character C in the string.
//
// Example 1:
//
// Input: S = "loveleetcode", C = 'e'
// Output: [3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]
//
//
// Note:
//
// S string length is in [1, 10000].
// C is a single character, and guaranteed to be in string S.
// All letters in S and C are lowercase.

const shortestToChar = function(s, c) {

  let lastIndex = s.length * -1;
  const indexArr = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === c) {
      lastIndex = i;
    }

    indexArr.push(i - lastIndex);
  }

  lastIndex = s.length * 2;

  for (let i = s.length -1; i >= 0; i--) {
    if (s[i] === c) {
      lastIndex = i;
    }

    indexArr[i] = Math.min(indexArr[i], lastIndex - i);
  }

  return indexArr;
};

console.log(shortestToChar('loveleetcode', 'e'));
console.log(JSON.stringify(shortestToChar('loveleetcode', 'e')) === JSON.stringify([3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]));
