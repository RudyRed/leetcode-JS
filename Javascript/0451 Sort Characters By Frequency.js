//451. Sort Characters By Frequency
//
// Given a string, sort it in decreasing order based on the frequency of characters.
//
// Example 1:
//
// Input:
// "tree"
//
// Output:
// "eert"
//
// Explanation:
// 'e' appears twice while 'r' and 't' both appear once.
// So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid answer.
// Example 2:
//
// Input:
// "cccaaa"
//
// Output:
// "cccaaa"
//
// Explanation:
// Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
// Note that "cacaca" is incorrect, as the same characters must be together.
// Example 3:
//
// Input:
// "Aabb"
//
// Output:
// "bbAa"
//
// Explanation:
// "bbaA" is also a valid answer, but "Aabb" is incorrect.
// Note that 'A' and 'a' are treated as two different characters.


const frequencySort = function(s) {
  let arr = s.split('').sort();
  let count = [];
  let obj = {};
  let output = '';
    for (let i = 0; i < arr.length; i++) {
      if (obj[arr[i]] === undefined) {
        obj[arr[i]] = count.length;
        count.push([arr[i], 1]);
      } else {
        count[obj[arr[i]]][1]++;
      }
    }
    count = count.sort((a,b) => {
      return b[1] - a[1]
    });
    for (let i = 0; i < count.length; i++) {
      for (let j = 0; j < count[i][1]; j++) {
        output += count[i][0]
      }
    }
  return output;
};
