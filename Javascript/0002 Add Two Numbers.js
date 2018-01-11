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
};

const addTwoNumbers = function(l1, l2) {
  let carryFlag = false;
  let currentL1 = l1.next;
  let currentL2 = l2.next;
  let output;
  let lastNode;
  if (l1.val + l2.val < 10) {
    output = new ListNode(l1.val + l2.val);
  } else {
    output = new ListNode(l1.val + l2.val - 10);
    carryFlag = true;
  }
  currentNew = output;
  while (currentL1 !== null || currentL2 !== null) {
    if (currentL1 === null) {
      let val = currentL2.val + (carryFlag ? 1 : 0);
      if (val < 10) {
        currentNew.next = new ListNode(val);
        carryFlag = false;
      } else {
        currentNew.next = new ListNode(val - 10);
        carryFlag = true;
      }
      lastNode = currentNew;
      currentNew = currentNew.next;
      currentL2 = currentL2.next;
      continue;
    }
    if (currentL2 === null) {
      let val = currentL1.val + (carryFlag ? 1 : 0);
      if (val < 10) {
        currentNew.next = new ListNode(val);
        carryFlag = false;
      } else {
        currentNew.next = new ListNode(val - 10);
        carryFlag = true;
      }
      lastNode = currentNew;
      currentNew = currentNew.next;
      currentL1 = currentL1.next;
      // carryFlag = false;
      continue;
    }
    let val = currentL1.val + currentL2.val + (carryFlag ? 1 : 0)
    if (carryFlag) carryFlag = false;
    if (val >= 10) {
      carryFlag = true;
      currentNew.next = new ListNode(val - 10);
    } else {
      currentNew.next = new ListNode(val);
    }
    currentL1 = currentL1.next;
    currentL2 = currentL2.next;
    lastNode = currentNew;
    currentNew = currentNew.next;
  }
  if (currentNew.val >= 10) {
    currentNew.next = new ListNode(1);
    currentNew.val = currentNew.val - 10;
    return output;
  }

  if (carryFlag) {
    currentNew.next = new ListNode(1);
    return output;
  }
  if (!currentNew.val && !output.next) return output;
  if (!currentNew.val) lastNode.next = null;
  return output
};

const list1 = new ListNode(9);
list1.next = new ListNode(9);
// list1.next.next = new ListNode(2);
const list2 = new ListNode(9);
// list2.next = new ListNode(9);
// list2.next.next = new ListNode(4);

console.log(addTwoNumbers(list1, list2))
