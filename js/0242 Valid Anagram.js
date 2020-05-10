// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.


const isAnagram = function(s, t) {
  const objS = {};
  const objT = {};

  for (let letter of s) {
    if (objS[letter]) {
      objS[letter]++;
    } else {
      objS[letter] = 1;
    }
  }

  for (let letter of t) {
    if (objT[letter]) {
      objT[letter]++;
    } else {
      objT[letter] = 1;
    }
  }

  for (let letter in objS) {
    if (objS[letter] !== objT[letter]) return false;
  }

  for (let letter in objT) {
    if (objT[letter] !== objS[letter]) return false;
  }

  return true;
};

console.log(isAnagram('tacoo', 'coaot'));
console.log(isAnagram('eerty', 'erty'));
