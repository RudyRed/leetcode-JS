// Given a non-negative integer c, your task is to decide whether there're two integers a and b such that a^2 + b^2 = c.

// Example 1:

// Input: 5
// Output: True
// Explanation: 1 * 1 + 2 * 2 = 5


// Example 2:

// Input: 3
// Output: False

const judgeSquareSum = c => {

  for (let a = 0; a <= Math.floor(Math.sqrt(c)); a++) {
    let remaining = c - a ** 2;
console.log(a)
    if (Math.floor(Math.sqrt(remaining)) === Math.sqrt(remaining)) return true;
  }

  return false;
};

console.log(judgeSquareSum(8), '5 sb true');
// console.log(judgeSquareSum(3), '3 sb false');
// console.log(judgeSquareSum(65), '65 sb true');
// console.log(judgeSquareSum(51), '51 sb false');