// Given a string S, we can transform every letter individually to be lowercase
// or uppercase to create another string.  Return a list of all possible strings we could create.
//
// Examples:
// Input: S = "a1b2"
// Output: ["a1b2", "a1B2", "A1b2", "A1B2"]
//
// Input: S = "3z4"
// Output: ["3z4", "3Z4"]
//
// Input: S = "12345"
// Output: ["12345"]
// Note:
//
// S will be a string with length at most 12.
// S will consist only of letters or digits.

const letterCasePermutation = function(s, currStr = '') {
  if (!s.length) return [currStr];
  if (typeof s === 'string') s = [...s];

  const lower = s.pop().toLowerCase();
  const upper = lower.toUpperCase();


  const output = letterCasePermutation([...s], lower + currStr);
  if (lower !== upper) output.push(...letterCasePermutation([...s], upper + currStr));

  return output;
};

console.log(letterCasePermutation('a1b2'));
