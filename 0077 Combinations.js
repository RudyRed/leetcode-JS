// Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.
//
// Example:
//
// Input: n = 4, k = 2
// Output:
// [
//   [2,4],
//   [3,4],
//   [2,3],
//   [1,2],
//   [1,3],
//   [1,4],
// ]

const combine = (n, k) => n >= k ? recurse(n, k, [], 1) : [];

const recurse = function (n, k, currSet, startNum) {
  if (currSet.length === k) return [currSet];
  const output = [];

  for (let i = startNum; i <= n - k + 1 + currSet.length; i++) {
    output.push(...recurse(n, k, [...currSet, i], i + 1));
  }

  return output;
};

console.log(combine(4, 2));
console.log(combine(4, 4));
console.log(combine(4, 5));
