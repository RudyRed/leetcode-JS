Write a function to find the longest common prefix string amongst an array of strings.

const longestCommonPrefix = function(strs) {
  if (!strs.length) return '';
  let prefix = '';

  for (let i = 0; i < strs[0].length; i++) {
    const letter = strs[0][i];

    for (let j = 1; j < strs.length; j++) {
      if (letter !== strs[j][i]) return prefix;
    }
    prefix += letter;
  }

  return prefix;
};
