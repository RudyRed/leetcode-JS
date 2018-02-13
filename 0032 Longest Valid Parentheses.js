// Given a string containing just the characters '(' and ')', find the length of
// the longest valid (well-formed) parentheses substring.
//
// For "(()", the longest valid parentheses substring is "()", which has length = 2.
//
// Another example is ")()())", where the longest valid parentheses substring is
// "()()", which has length = 4.

const longestValidParentheses = function(s) {
  let currMax = 0;
  let others = {}; // key is right point, vlaue is left point of other parenthises endings

  for (let i = 0; i < s.length - 1; i++) {
    let r = i + 1;
    let l = i;
    if (s[l] === ')' || s[r] === '(') continue;
    let whileSearchFlag = true;

    while (whileSearchFlag) {
      if (others[l - 1] !== undefined) {
        l = others[l - 1];
        continue;
      }
      if (s[r + 1] === '(' && s[r + 2] === ')') {
        r += 2;
        continue;
      }
      if (s[l - 1] === '(' && s[r + 1] === ')') {
        r += 1;
        l -= 1;
        continue;
      }
      whileSearchFlag = false;
    }

    if (currMax === 0 || (r - l + 1) >= currMax) {
      currMax = r - l + 1;
    }

    others[r] = l;
    i = r;
  }
  
  return currMax;
};

console.log(longestValidParentheses("()(((()(()))))"))
