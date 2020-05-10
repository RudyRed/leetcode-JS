// Given a binary tree, return the bottom-up level order traversal of its nodes'
// values. (ie, from left to right, level by level from leaf to root).
//
// For example:
// Given binary tree [3,9,20,null,null,15,7],
//    3
//   / \
//  9  20
//    /  \
//   15   7
// return its bottom-up level order traversal as:
// [
//  [15,7],
//  [9,20],
//  [3]
// ]
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const levelOrderBottom = function(root, depth = 0) {
  if (!root) return [];
  const output = [[root.val]];

  if (root.left) {
    const leftSide = levelOrderBottom(root.left, depth + 1);

    for (let i = 0; i < leftSide.length; i++) {
      output[i + 1] = leftSide[i];
    }

  }

  if (root.right) {
    const rightSide = levelOrderBottom(root.right, depth + 1);

    for (let i = 0; i < rightSide.length; i++) {

      if (output[i + 1]) {
        output[i + 1] = output[i + 1].concat(rightSide[i]);
      } else {
        output[i + 1] = rightSide[i];
      }

    }

  }

  if (depth > 0) return output;
  const reversedTree = [];

  while (output.length) {
    reversedTree.push(output.pop());
  }

  return reversedTree;
};
