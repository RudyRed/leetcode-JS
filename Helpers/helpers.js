function TreeNode(val) {
  this.val = val;
  this.right = this.left = null;
}

const makeBT = function (arr) {
  const tree = new TreeNode(arr[0]);
  let pending = [];
  let parent = tree;

  for (let i = 1; i < arr.length; i++) {
    if (parent.left === null) {
      parent.left = new TreeNode(arr[i]);
      pending.push(parent.left);
    } else {
      parent.right = new TreeNode(arr[i]);
      pending.push(parent.right);
      parent = pending.shift();
    }
  }

  return tree;
};

module.exports = {
  makeBT,
}
