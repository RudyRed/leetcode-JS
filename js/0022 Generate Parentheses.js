// Given n pairs of parentheses, write a function to generate all combinations
// of well-formed parentheses.
//
// For example, given n = 3, a solution set is:
//
// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

const generateParenthesis = function(n, str = '') {
  if (!n) return str.length ? {[str]: true} : [];
  let output = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ')') continue;
    let newStr = str.substring(0, i + 1) + '()' + str.substring(i + 1);
    for (let poss in generateParenthesis(n - 1, newStr)) {
      output[poss] = true;
    }
  }

  for (let poss in generateParenthesis(n - 1, str + '()')) {
    output[poss] = true;
  }

  return str.length ? output : Object.keys(output);
};
