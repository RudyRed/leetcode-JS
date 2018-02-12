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

// const isAnagram = function (s1, s2) {
//   let count1 = {};
//   let count2 = {};
//
//   for (let i = 0; i < s1.length; i++) {
//     const letter = s1[i];
//     if (count1[letter]) {
//       count1[letter]++;
//     } else {
//       count1[letter] = 1;
//     }
//   }
//
//   for (let i = 0; i < s2.length; i++) {
//     const letter = s2[i];
//     if (count2[letter]) {
//       count2[letter]++;
//     } else {
//       count2[letter] = 1;
//     }
//   }
//
//   for (let key in count1) {
//     if (count1[key] === count2[key]) {
//       delete count1[key];
//       delete count2[key];
//     } else {
//       return false;
//     }
//   }
//
//   return Object.keys(count2).length === 0;
// };
//
// const groupAnagrams = function(s) {
//   let obj = {};
//   let maxStringLength = 0;
//
//   while (s.length) {
//     const str = s.pop();
//     const len = str.length;
//     if (len > maxStringLength) maxStringLength = len;
//     if (!obj[len]) obj[len] = [];
//     let hasAnagram = false;
//
//     for (let i = 0; i < obj[len].length; i++) {
//       if (isAnagram(obj[len][i][0], str)) {
//         obj[len][i].push(str);
//         hasAnagram = true;
//         break;
//       }
//     }
//     if (!hasAnagram) obj[len].push([str]);
//   }
//
//   let output = [];
//
//   for (let len in obj) {
//     output = output.concat(obj[len]);
//     delete obj[len];
//   }
//
//   return output;
// };
//
// const isAnagram = function (s1, s2) {
//   let count1 = {};
//   let count2 = {};
//
//   for (let i = 0; i < s1.length; i++) {
//     const letter = s1[i];
//     if (count1[letter]) {
//       count1[letter]++;
//     } else {
//       count1[letter] = 1;
//     }
//   }
//
//   for (let i = 0; i < s2.length; i++) {
//     const letter = s2[i];
//     if (count2[letter]) {
//       count2[letter]++;
//     } else {
//       count2[letter] = 1;
//     }
//   }
//
//   for (let key in count1) {
//     if (count1[key] === count2[key]) {
//       delete count1[key];
//       delete count2[key];
//     } else {
//       return false;
//     }
//   }
//
//   return Object.keys(count2).length === 0;
// };

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
    delete obj[sortedStr];
  }

  return output;
};

console.log(groupAnagrams(["eat", "tea", "tan",'reven', "ate", "nat", "bat", 'taco', 'coat', 'never', 'evern']))
