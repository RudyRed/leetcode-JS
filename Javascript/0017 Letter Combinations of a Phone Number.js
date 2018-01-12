// Given a digit string, return all possible letter combinations
// that the number could represent.
//
// A mapping of digit to letters (just like on the telephone buttons)
// is given below.
//
//
//
// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
// Note:
// Although the above answer is in lexicographical order, your answer could be in
// any order you want.

const phoneDigitsToLetters = {
  0: '0',
  1: '1',
  2: 'abc',
  3: 'def',
  4: 'ghi',
  5: 'jkl',
  6: 'mno',
  7: 'pqrs',
  8: 'tuv',
  9: 'wxyz'
};

const letterCombinations = function(digits, set = []) {
  if (!digits.length && !set.length) return [];
  if (!digits.length && set.length) return set;
  let letters = phoneDigitsToLetters[digits[0]];
  let obj = {};
  let arr = [];
  for (let i = 0; i < letters.length; i++) {
    if (!set.length) {
      letterCombinations(digits.substring(1), [letters[i]]).forEach((i) => {
        obj[i] = true;
      });
    } else {
      arr = arr.concat(letterCombinations(digits.substring(1), set.map(x => x + letters[i])));
    }
  }
  if (arr.length) return arr;
  return Object.keys(obj);
};
