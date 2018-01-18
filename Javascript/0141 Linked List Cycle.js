// Given a linked list, determine if it has a cycle in it.
//
// Follow up:
// Can you solve it without using extra space?
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const hasCycle = function(head) {
  if (!head || !head.next) return false;
  let slow = head;
  let fast = head.next;

  while (fast && fast.next) {
    if (fast === slow) return true;
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};
