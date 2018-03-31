const TreeNode = function (val) {
  this.val = val;
  this.right = this.left = null;
}

const makeBT = function (arr) {
  const tree = new TreeNode(arr[0]);
  let pending = [];
  let parent = tree;
  let leftFlag = true;

  for (let i = 1; i < arr.length; i++) {
    if (leftFlag) {

      if (arr[i] === null) {
        parent.left = null;
      } else {
        parent.left = new TreeNode(arr[i]);
        pending.push(parent.left);
      }
      leftFlag = false;

    } else {

      if (arr[i] === null) {
        parent.right = null;
      } else {
        parent.right = new TreeNode(arr[i]);
        pending.push(parent.right);
      }
      parent = pending.shift();
      leftFlag = true;

    }
  }

  return tree;
};

const ListNode = function (val) {
  this.val = val;
  this.next = null;
}

const singlyLL = function (nums) {
  const head = new ListNode(0);
  let curr = head;

  for (let num of nums) {
    curr.next = new ListNode(num);
    curr = curr.next;
  }

  return head.next;
};

module.exports = {
  makeBT,
  singlyLL,
}
