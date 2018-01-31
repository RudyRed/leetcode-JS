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

const levelOrder = function(root, depth = 0) {
  if (!root) return [];
  let output = [];
  output[depth++] = [root.val];

  if (root.left) {
    let left = levelOrder(root.left, depth);
    for (let i = depth; i < left.length; i++) {
      output[i] = left[i];
    }
  }

  if (root.right) {
    let right = levelOrder(root.right, depth);
    for (let i = depth; i < right.length; i++) {
      if (output[i]) {
        output[i] = output[i].concat(right[i]);
      } else {
      output[i] = right[i];
      }
    }
  }

  return output;
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
