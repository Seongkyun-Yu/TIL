/**
 * MEDIUM
 * https://leetcode.com/problems/binary-tree-vertical-order-traversal/
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
var verticalOrder = function (root) {
  const hash = {};
  const queue = [[root, 0]];
  while (queue.length) {
    const [node, index] = queue.shift();
    if (!node) continue;

    if (!hash[index]) hash[index] = [node.val];
    else hash[index].push(node.val);

    if (node.left) queue.push([node.left, index - 1]);
    if (node.right) queue.push([node.right, index + 1]);
  }

  const keys = Object.keys(hash).sort((a, b) => a - b);

  return keys.map((key) => hash[key]);
};
