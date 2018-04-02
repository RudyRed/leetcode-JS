// Given a linked list, return the node where the cycle begins. If there is no
// cycle, return null.
//
// Note: Do not modify the linked list.
//
// Follow up:
// Can you solve it without using extra space?

const detectCycle = function(head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) break;
  }

  if (!fast || !fast.next) return null;

  while (head != slow) {
    head = head.next;
    slow = slow.next;
  }

  return head;
};

const list = {val: 1};
list.next = {val:2};
list.next.next = {val:3};
list.next.next.next = {val:4};
list.next.next.next.next = {val:5};
list.next.next.next.next.next = {val:6};
list.next.next.next.next.next.next = list.next.next;


console.log(detectCycle(list), 'sb 3');
