// Given a binary tree and a sum, find all root-to-leaf paths where each path's
// sum equals the given sum.
//
// For example:
// Given the below binary tree and sum = 22,
//               5
//              / \
//             4   8
//            /   / \
//           11  13  4
//          /  \    / \
//         7    2  5   1
// return
// [
//    [5,4,11,2],
//    [5,8,4,5]
// ]

const pathSum = function(root, sum, currentSet = []) {
  if (!root) return [];

  if (!root.left && !root.right) {
    if (sum - root.val) return [];
    return [currentSet.concat(root.val)];
  }

  let output = [];
  if (root.right) {
    let right = pathSum(root.right, sum - root.val, currentSet.concat(root.val));
    for (let set of right) output.push(set);
  }

  if (root.left) {
    let left = pathSum(root.left, sum - root.val, currentSet.concat(root.val));
    for (let set of left) output.push(set);
  }
  return output;
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
// console.log(pathSum(tree, 22));
