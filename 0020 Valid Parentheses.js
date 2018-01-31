// Given a string containing just the characters '(', ')', '{', '}', '[' and ']',
// determine if the input string is valid.
//
// The brackets must close in the correct order, "()" and "()[]{}" are all valid
// but "(]" and "([)]" are not.

const isValid = function(s) {
  let pending = [];

  for (let i = 0; i < s.length; i++) {
    let b = s[i];
    if (b === '{' || b === '[' || b === '(') {
      pending.push(b);
      continue;
    }
    if (!pending.length) return false;
    let openB = pending.pop();
    if (openB === '[' && b !== ']') return false;
    if (openB === '{' && b !== '}') return false;
    if (openB === '(' && b !== ')') return false;
  }

  return pending.length ? false : true;
};
