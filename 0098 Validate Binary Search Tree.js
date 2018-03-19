// Given a binary tree, determine if it is a valid binary search tree (BST).
//
// Assume a BST is defined as follows:
//
// The left subtree of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.
// Example 1:
//     2
//    / \
//   1   3
// Binary tree [2,1,3], return true.
// Example 2:
//     1
//    / \
//   2   3
// Binary tree [1,2,3], return false.
/**
* Definition for a binary tree node.
* function TreeNode(val) {
*     this.val = val;
*     this.left = this.right = null;
* }
*/
const { makeBT } = require('./Helpers/helpers.js');


const isValidBST = function(root, lessThan, greaterThan) {
  if (!root) return true;

  if (lessThan != undefined && root.val >= lessThan) return false;
  if (greaterThan != undefined && root.val <= greaterThan) return false;

  return isValidBST(root.left, root.val, greaterThan) && isValidBST(root.right, lessThan, root.val);
};

console.log(isValidBST(makeBT([2,1,3])), 'sb true');
console.log(isValidBST(makeBT([1,2,3])), 'sb false');
