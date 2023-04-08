/**
 * MEDIUM
 * https://leetcode.com/problems/binary-tree-level-order-traversal-ii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
  if (!root) return [];
  const result = [];

  const queue = [root];
  while (queue.length) {
    const temp = [];
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      if (!node) continue;
      temp.push(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.unshift(temp);
  }

  return result;
};
