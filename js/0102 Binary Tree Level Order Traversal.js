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

const { makeBT } = require('../Helpers/helpers')

const levelOrder = (root, arr = [], level = 0) => {
  if (!root) return []

  if (arr[level] === undefined) {
    arr[level] = []
  }
  arr[level].push(root.val)

  levelOrder(root.left, arr, ++level)
  levelOrder(root.right, arr, level)


  return arr
}

console.log(levelOrder(makeBT([3,9,20,null,null,15,7])))