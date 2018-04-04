// A linked list is given such that each node contains an additional random pointer
// which could point to any node in the list or null.
//
// Return a deep copy of the list.

const RandomListNode = function (label) {
  this.label = label;
  this.next = this.random = null;
};


const copyRandomList = function(head) {
  let curr = head;
  let index = -1;

  while (curr) {
    curr.index = ++index;
    curr = curr.next;
  }

  const newHead = new RandomListNode(0);

  const randomPointersIndex = {};

  let currOld = head;
  curr = newHead;

  while (currOld) {
    curr.next = new RandomListNode(currOld.label);
    curr = curr.next;
    randomPointersIndex[currOld.index] = curr;
    currOld = currOld.next;
  }

  currOld = head;
  curr = newHead.next;

  while (curr) {
    if (currOld.random) {
      curr.random = randomPointersIndex[currOld.random.index];
    }

    curr = curr.next;
    currOld = currOld.next;
  }

  while (head) {
    delete head.index;
    head = head.next;
  }

  return newHead.next;
};

let l = new RandomListNode(1);
l.next = new RandomListNode(2);
l.next.next = new RandomListNode(3);
l.next.next.next = new RandomListNode(4);
l.random = l.next.next;//3
l.next.random = l.next.next.next;
l.next.next.random = l;

console.log(copyRandomList(l));
