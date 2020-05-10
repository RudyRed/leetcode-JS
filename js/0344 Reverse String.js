// Write a function that takes a string as input and returns the string reversed.
//
// Example:
// Given s = "hello", return "olleh".

const reverseString = function(s) {
  let reversed = '';

  for (let i = s.length - 1; i >= 0; i--) {
    reversed += s[i];
  }

  return reversed;
};
