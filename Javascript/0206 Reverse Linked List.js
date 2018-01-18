// Reverse a singly linked list.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const reverseList = function(head) {
  if (!head) return head;
  let curr = head;
  let prev = null;

  while(curr !== null) {
    let placeholder = curr.next;
    curr.next = prev;
    prev = curr;
    curr = placeholder;
  }

  return prev;
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
//
// let l = [2, 3, 4, 5];
// let list = new ListNode(1);
// let currentNode = list;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// console.log(reverseList(list));
