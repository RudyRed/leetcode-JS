// Determine whether an integer is a palindrome. Do this without extra space.

const isPalindrome = function(x) {
  return x == x.toString().split('').reverse().join('');
};
