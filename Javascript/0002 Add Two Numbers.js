// You are given two non-empty linked lists representing two non-negative integers.
// The digits are stored in reverse order and each of their nodes contain a
// single digit. Add the two numbers and return it as a linked list.
//
// You may assume the two numbers do not contain any leading zero, except the
// number 0 itself.
//
// Example
//
// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8
// Explanation: 342 + 465 = 807.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
     this.val = val;
     this.next = null;
  }



function toFix(i){
 let str='';
 do{
   let a = i%10;
   i=Math.trunc(i/10);
   str = a+str;
 }while(i>0)
 return str;
}

const addTwoNumbers = function(l1, l2) {
  let l1Str = '';
  let l2Str = '';
  let currentNode = l1;
  let firstNode = true;
  while (currentNode !== null) {
    if (firstNode) {
      l1Str = currentNode.val.toString() + l1Str
    } else {
      l2Str = currentNode.val.toString() + l2Str
    }
    currentNode = currentNode.next;
    if (currentNode === null && firstNode) {
      currentNode = l2;
      firstNode = false;
    }
  }
  const arr1 = l1Str.split('').map(x => Number(x));
  console.log(arr1)
  const arr2 = l2Str.split('').map(x => Number(x));
  let output;
  let x = 2;
  if (arr1.length === arr2.length) {
    if ((arr1[arr1.length -1] + arr2[arr2.length -1]).toString().length > 1) {
      output = new ListNode(1);
      output.next = new ListNode((arr1[arr1.length -1] + arr2[arr2.length -1]).toString()[1]);
      // x -= 1;
    } else {
      output = new ListNode(arr1[arr1.length -1] + arr2[arr2.length -1]);
    }
  } else if (arr1.length > arr2.length) {
    output = new ListNode(arr1[arr1.length -1]);
  } else {
    output = new ListNode(arr2[arr2.length -1]);
  }
  let last = output.next ? output.next : output;
  for (let i = Math.max(arr1.length - x, arr2.length - x); i >= 0; i--) {
    let val;
    if (arr1[i] === undefined) {
      val = arr2[i];
    } else if (arr2[i] === undefined) {
      val = arr1[i];
    } else {
      val = arr2[i] + arr1[i];
    }
    console.log(val)
    if (val.toString().length > 1) {
      last.val += 1;
      last = last.next = new ListNode(Number(val.toString()[1]));
    } else {
      last = last.next = new ListNode(val);
    }
  }
  return output;
};



const list1 = new ListNode(8);
list1.next = new ListNode(9);
// list1.next.next = new ListNode(3);
const list2 = new ListNode(0);
list2.next = new ListNode(1);
// list2.next.next = new ListNode(4);

// let l1 = [2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9]
// let l2 = [5,6,4,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,2,4,3,9,9,9,9]
// const list1 = new ListNode(l1[0])
// const list2 = new ListNode(l2[0])
// console.log(l2.length, l1.length)
// let lastl1 = list1;
// let lastl2 = list2;
//
// for (let i = 1; i < l1.length; i++) {
//   lastl1 = lastl1.next = new ListNode(l1[i]);
//   lastl2 = lastl2.next = new ListNode(l2[i]);
// }
// console.log(list2)
console.log(addTwoNumbers(list1, list2))
