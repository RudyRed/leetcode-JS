// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.

// Example:

// Given binary tree [3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// return its minimum depth = 2.

const { makeBT } = require('./Helpers/helpers')

const minDepth = (root, level = 1) => {
  if (!root) return 0
  if (!root.left && !root.right) return level

  level++
  let min = Infinity

  if (root.left) {
    min = minDepth(root.left, level)
  }

  if (root.right) {
    min = Math.min(minDepth(root.right, level), min)
  }

  return min
}

console.log(minDepth(makeBT([3,9,20,null,null,15,7])))
console.log(minDepth(makeBT([1,2])))