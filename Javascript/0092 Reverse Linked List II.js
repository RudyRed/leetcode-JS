// Reverse a linked list from position m to n. Do it in-place and in one-pass.
//
// For example:
// Given 1->2->3->4->5->NULL, m = 2 and n = 4,
//
// return 1->4->3->2->5->NULL.
//
// Note:
// Given m, n satisfy the following condition:
// 1 ≤ m ≤ n ≤ length of list.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const reverseBetween = function(head, m, n) {
  if (m === n ) return head;
  let curr = head;
  let prev = null;
  let count = 1;

  while (count !== m) {
    prev = curr;
    curr = curr.next;
    count++;
  }
  let start = prev;

  if (start) {
    start.next = null;
  }

  prev = null;
  let nNode = curr;

  while (count <= n) {
    let placeholder = curr.next;
    curr.next = prev;
    prev = curr;
    curr = placeholder;
    count++;
  }
  if (start) {
    start.next = prev;
  }
  nNode.next = curr;

  return start ? head : prev;
};

// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
//
// let l = [2]//, 3, 4, 5];
// let list = new ListNode(1);
// let currentNode = list;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// console.log(reverseBetween(list, 1, 2));
