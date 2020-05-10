// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:

//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...
// Example 1:

// Input: "A"
// Output: 1
// Example 2:

// Input: "AB"
// Output: 28
// Example 3:

// Input: "ZY"
// Output: 701

const titleToNumber = s => {
  let c = 0

  for (let i = 0; i < s.length; i++) {
    c += (s[i].charCodeAt() - 64) * (26 ** (s.length - 1 - i))
  }

  return c
}

// single ans response
const singleLine = s => s.split``.reduce((a, l, i) => a + (s[i].charCodeAt() - 64) * (26 ** (s.length - 1 - i)), 0)

console.log(titleToNumber('AB'), 28)
console.log(titleToNumber('ZY'), 701)
