// Given an array of integers, find if the array contains any duplicates. Your
// function should return true if any value appears at least twice in the array,
// and it should return false if every element is distinct.

const containsDuplicate = (nums) => new Set(nums).size < nums.length;

console.log(containsDuplicate([1,2,3,4,5,6,7,7]))
console.log(containsDuplicate([1,2,3,4,5,6,7]));
