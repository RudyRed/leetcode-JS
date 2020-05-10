// Given a binary tree, return the preorder traversal of its nodes' values.
//
// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,2,3].
//
// Note: Recursive solution is trivial, could you do it iteratively?
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const { makeBT } = require('../Helpers/helpers.js');


const preorderTraversal = function(root) {
  const stack = [];
  const res = [];

  while (true) {
    while (root) {
      res.push(root.val);
      stack.push(root);
      root = root.left;
    }

    if (!stack.length) return res;
    root = stack.pop().right;
  }
};

console.log(preorderTraversal(makeBT([1,2,3,4,5,6,7])), 'sb [1,2,4,5,3,6,7]');
console.log(preorderTraversal(makeBT([1,null,2,3])), 'sb [1,2,3]');
