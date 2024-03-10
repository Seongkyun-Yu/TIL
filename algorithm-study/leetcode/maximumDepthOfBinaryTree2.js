/**
 * https://leetcode.com/problems/maximum-depth-of-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  const check = (node, deepth) => {
    if (!node) return deepth;
    if (!node.left && !node.right) return deepth;

    const left = check(node.left, deepth + 1);
    const right = check(node.right, deepth + 1);

    return Math.max(left, right);
  };

  return check(root, 1);
};
