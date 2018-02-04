// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).
//
// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
//
//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3
// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3
// Note:
// Bonus points if you could solve it both recursively and iteratively.


const isSymmetric = function (l, r = l) {
  if (!l && !r) return true;

  if (!l || !r || l.val !== r.val) return false;

  return isSymmetric(l.left, r.right) && isSymmetric(l.right, r.left);
};
