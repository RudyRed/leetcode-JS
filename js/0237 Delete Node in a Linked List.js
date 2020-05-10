// Write a function to delete a node (except the tail) in a singly linked list,
// given only access to that node.
//
// Supposed the linked list is 1 -> 2 -> 3 -> 4 and you are given the third node
// with value 3, the linked list should become 1 -> 2 -> 4 after calling your function.
const { singlyLL } = require('../Helpers/helpers.js');

const deleteNode = function(node) {
  let curr = node;
  let prev = null;

  while (curr.next) {
    curr.val = curr.next.val;
    prev = curr;
    curr = curr.next;
  }

  prev.next = null;
};

console.log(deleteNode(singlyLL([1, 2, 3, 4])));
