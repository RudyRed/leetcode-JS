// Write a program that outputs the string representation of numbers from 1 to n.
//
// But for multiples of three it should output “Fizz” instead of the number and for
// the multiples of five output “Buzz”. For numbers which are multiples of both
// three and five output “FizzBuzz”.
//
// Example:
//
// n = 15,
//
// Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

const fizzBuzz = function(n) {
  let arr = [];
  let fizz = buzz = 0;
  for (let i = 1; i <= n; i++) {
    fizz++;
    buzz++;
    if (fizz === 3 && buzz === 5) {
      arr.push('FizzBuzz');
      fizz = buzz = 0;
    } else if (fizz === 3) {
      arr.push('Fizz');
      fizz = 0;
    } else if (buzz === 5) {
      arr.push('Buzz');
      buzz = 0;
    } else {
      arr.push(i.toString());
    }
  }
  return arr;
};
