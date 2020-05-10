// Invert a binary tree.
//      4
//    /   \
//   2     7
//  / \   / \
// 1   3 6   9
// to
//      4
//    /   \
//   7     2
//  / \   / \
// 9   6 3   1
const { makeBT } = require('../Helpers/helpers.js');

const invertTree = function(root) {
  if (!root) return null;

  const placeholder = root.left;
  root.left = invertTree(root.right);
  root.right = invertTree(placeholder);

  return root;
};


console.log(invertTree(makeBT([4,7,2,1,3,6,9])));
