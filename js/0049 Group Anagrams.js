// Given an array of strings, group anagrams together.
//
// For example, given: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Return:
//
// [
//   ["ate", "eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note: All inputs will be in lower-case.

const groupAnagrams = function(s) {
  let obj = {};

  while (s.length) {
    const str = s.pop();
    const sortedStr = str.split``.sort().join();

    if (obj[sortedStr]) {
      obj[sortedStr].push(str);
    } else {
      obj[sortedStr] = [str];
    }
  }

  let output = [];

  for (let sortedStr in obj) {
    output.push(obj[sortedStr]);
    delete obj[sortedStr]; // remove if space complexity less important than time
  }

  return output;
};

console.log(groupAnagrams(["eat", "tea", "tan",'reven', "ate", "nat", "bat", 'taco', 'coat', 'never', 'evern']))
