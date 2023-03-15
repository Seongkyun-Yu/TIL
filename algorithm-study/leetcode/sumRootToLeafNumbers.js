/**
 * MEDIUM
 * https://leetcode.com/problems/sum-root-to-leaf-numbers/
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
var sumNumbers = function (root) {
  let sum = 0;
  const preOrder = (node, acc) => {
    if (!node) return;
    if (!node.left && !node.right) {
      sum += +(acc + node.val);
      return;
    }

    const cur = node.val;
    preOrder(node.left, acc + cur);
    preOrder(node.right, acc + cur);
  };

  preOrder(root, '');

  return sum;
};
