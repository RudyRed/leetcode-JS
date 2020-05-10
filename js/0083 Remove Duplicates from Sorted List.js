// Given a sorted linked list, delete all duplicates such that each
// element appear only once.
//
// For example,
// Given 1->1->2, return 1->2.
// Given 1->1->2->3->3, return 1->2->3.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const deleteDuplicates = function(list) {
  if (!list) return list;
  let curr = list;

  while (curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }

  return list;
};

// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }
// let l = new ListNode(1);
// let arr = [1,1,1,2,2,2,2,2,2,2,2,3,3,3];
// let curr = l;
// for (let num of arr) {
//   curr.next = new ListNode(num);
//   curr = curr.next
// }
// console.log(deleteDuplicates(l));
