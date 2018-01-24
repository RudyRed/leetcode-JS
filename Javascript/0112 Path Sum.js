// Given a binary tree and a sum, determine if the tree has a root-to-leaf path
// such that adding up all the values along the path equals the given sum.
//
// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \      \
//         7    2      1
// return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

const hasPathSum = function(root, sum, currentSet = []) {
  if (!root) return false;

  if (!root.left && !root.right) {
    return !(sum - root.val);
  }

  if (hasPathSum(root.right, sum - root.val, currentSet.concat(root.val))) return true;
  if (hasPathSum(root.left, sum - root.val, currentSet.concat(root.val))) return true;

  return false;
};

// let tree = {
//   val: 5,
//   left: {
//     val: 4,
//     left: {
//       val: 11,
//       left: {
//         val: 7,
// 				left: null,
//         right: null
//       },
//       right: {
//         val: 2,
//         left: null,
//         right: null
//       }
//     },
//     right: null
//   },
//   right: {
//     val: 8,
//     left: {
//       val: 13,
//       left: null,
//       right: null
//     },
//     right: {
//       val: 4,
//       left: {
//       	val: 5,
//       	left: null,
//       	right: null
//       },
//       right: {
//         val: 1,
//         left: null,
//         right: null
//       }
//     }
//   }
// }
// console.log(hasPathSum(tree, 22));
