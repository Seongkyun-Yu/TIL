/**
 * EASY
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/
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
var getMinimumDifference = function (root) {
  const sorted = [];

  const inorder = (node) => {
    if (!node) return;

    inorder(node.left);
    sorted.push(node.val);
    inorder(node.right);
  };

  inorder(root);

  let min = Infinity;
  for (let i = 1; i < sorted.length; i++) {
    min = Math.min(min, sorted[i] - sorted[i - 1]);
  }

  return min;
};
