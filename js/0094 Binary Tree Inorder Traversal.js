// Given a binary tree, return the inorder traversal of its nodes' values.
//
// For example:
// Given binary tree [1,null,2,3],
//    1
//     \
//      2
//     /
//    3
// return [1,3,2].
const { makeBT } = require('./Helpers/helpers.js');


const inorderTraversal = function (root) {
  const pendingNodes = [];
  const output = [];

  while (true) {
    while (root) {
      pendingNodes.push(root);
      root = root.left;
    }

    if (pendingNodes.length == 0) return output;
    root = pendingNodes.pop();
    output.push(root.val);
    root = root.right;
  }

};

console.log(inorderTraversal(makeBT([1,null,2,3])), 'sb [1,3,2]');
console.log(inorderTraversal(makeBT([1,2,3,4,5,6,7])), 'sb [4,2,5,1,6,3,7]');
console.log(inorderTraversal(makeBT([1,null,2,null,3])), 'sb [1,2,3]');

// slightly less cleary alternative
// const inorderTraversal = function (root) {
//   if (!root) return [];
//   const pendingNodes = [root];
//   const output = [];
//
//   while (pendingNodes.length) {
//     const lastPending = pendingNodes[pendingNodes.length - 1];
//
//     if (lastPending.left) {
//       pendingNodes.push(lastPending.left);
//       continue;
//     }
//
//     const removed = pendingNodes.pop();
//     output.push(removed.val);
//
//     if (pendingNodes.length) {
//       const previous = pendingNodes[pendingNodes.length - 1];
//
//       if (previous.left) {
//         previous.left = null;
//       }
//
//     }
//
//     if (removed.right) pendingNodes.push(removed.right);
//
//   }
//
//   return output;
// };
