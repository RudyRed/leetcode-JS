// Merge two sorted linked lists and return it as a new list.
// The new list should be made by splicing together the nodes of the first two lists.
//
// Example:
//
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const mergeTwoLists = function (l1, l2) {
  let output = new ListNode('next = output');
  let curr = output;
  while (l1 || l2) {
    if (!l2 || (l1 && l1.val <= l2.val)) {
      curr.next = l1;
      curr = curr.next;
      l1 = l1.next;
    } else {
      curr.next = l2;
      curr = curr.next;
      l2 = l2.next;
    }
  }

  return output.next;
};
