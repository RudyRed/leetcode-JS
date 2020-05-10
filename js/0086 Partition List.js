// Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

// You should preserve the original relative order of the nodes in each of the two partitions.

// Example:

// Input: head = 1->4->3->2->5->2, x = 3
// Output: 1->2->2->4->3->5

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

const { singlyLL } = require('../Helpers/helpers')

const partition = (head, x) => {
  const less = []
  const greater = []

  while (head) {
    if (head.val < x) {
      less.push(head)
    } else {
      greater.push(head)
    }

    head = head.next
  }

  let curr = less.length ? less.shift() : greater.shift()
  head = curr
  for (let node of less) {
    curr.next = node
    curr = curr.next
  }

  for (let node of greater) {
    curr.next = node
    curr = curr.next
  }

  if (!head) {
    return null
  }

  curr.next = null
  return head
};



console.log(partition(singlyLL([1, 4, 3, 2, 5, 2]), 3))
