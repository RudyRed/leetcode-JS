// Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

const mergeKLists = function(lists) {
  lists = lists.filter(x => x !== null);
  if (!lists.length) return null;

  let output = new ListNode(0);
  let prev = output;

  while (lists.length) {
    let min;
    let index;
    for (let i = 0; i < lists.length; i++) {
      if (!min || lists[i].val < min.val) {
        min = lists[i];
        index = i;
      }
    }
    prev.next = min;
    prev = prev.next;
    if (min.next) {
      lists[index] = lists[index].next;
    } else {
      lists.splice(index, 1);
    }
  }

  return output.next;
};

// function ListNode(x) {
//   this.val = x;
//   this.next = null;
// };
//
// let l = [2, 2];
// let listA = new ListNode(1);
// let currentNode = listA;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// l = [1, 1, 2, 4];
// listB = new ListNode(1);
// currentNode = listB;
// for (let num of l) {
//   currentNode.next = new ListNode(num);
//   currentNode = currentNode.next;
// }
//
// console.log(mergeKLists([listA, listB]));
