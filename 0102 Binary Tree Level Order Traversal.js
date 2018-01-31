// Given a binary tree, return the level order traversal of its nodes' values.
// (ie, from left to right, level by level).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its level order traversal as:
// [
//   [3],
//   [9,20],
//   [15,7]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const levelOrder = function(root, depth = 1) {
  if (!root) return [];
  let obj = {};
  obj[depth] = [root.val];

  if (root.left) {
    let left = levelOrder(root.left, depth + 1);
    for (let key in left) {
      obj[key] = left[key];
    }
  }

  if (root.right) {
    let right = levelOrder(root.right, depth + 1);
    for (let key in right) {
      if (obj[key]) {
        obj[key] = obj[key].concat(right[key]);
      } else {
      obj[key] = right[key];
      }
    }
  }

  if (depth > 1) return obj;

  let outputArr = [];
  let level = 1;

  while (obj[level]) {
    outputArr.push(obj[level]);
    level++;
  }

  return outputArr;
};

// function TreeNode(val) {
//   this.val = val;
//   this.left = null;
//   this.right = null;
// };
//
// let tree = new TreeNode(3);
// tree.left = new TreeNode(9);
// tree.right = new TreeNode(20);
// tree.right.left = new TreeNode(15);
// tree.right.right = new TreeNode(7);
//
// console.log(levelOrder(tree));
