// Given a linked list, swap every two adjacent nodes and return its head.
//
// Example:
//
// Given 1->2->3->4, you should return the list as 2->1->4->3.
// Note:
//
// Your algorithm should use only constant extra space.
// You may not modify the values in the list's nodes, only nodes itself may be changed.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const { singlyLL, ListNode } = require('./Helpers/helpers.js');

const swapPairs = function(head) {

  const tempHead = new ListNode(0);
  let last = tempHead;
  last.next = head;

  while (last.next && last.next.next) {
    let tempFirst = last.next;
    let tempSecond = last.next.next;
    last.next = tempSecond;
    tempFirst.next = tempSecond.next;
    tempSecond.next = tempFirst;
    last = tempFirst;
  }

  return tempHead.next;
};

console.log(swapPairs(singlyLL([1,2,3,4])));
console.log(swapPairs({val: 3, next: null}));
console.log(swapPairs(null));
