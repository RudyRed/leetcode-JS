// Given a linked list, remove the nth node from the end of list and return its head.
//
// For example,
//
//    Given linked list: 1->2->3->4->5, and n = 2.
//
//    After removing the second node from the end, the linked list becomes 1->2->3->5.
// Note:
// Given n will always be valid.
// Try to do this in one pass.

function ListNode(val) {
  this.val = val;
  this.next = null;
}

const removeNthFromEnd = function(head, n) {
  const arr = [];
  let cur = head;
  while (cur) {
    arr.push(cur);
    cur = cur.next;
  }
  if (arr.length === n) return head.next;
  if (n === 1) {
    arr[arr.length - 2].next = null;
  } else {
    arr[arr.length - n - 1].next = arr[arr.length - n + 1];
  }
  return head;
};
