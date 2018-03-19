function TreeNode(val) {
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

module.exports = {
  makeBT,
}
