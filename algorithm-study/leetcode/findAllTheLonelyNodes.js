/**
 * EASY
 * https://leetcode.com/problems/find-all-the-lonely-nodes/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
  const result = [];

  const dfs = (node, lonely) => {
    if (!node) return;

    if (lonely) result.push(node.val);

    dfs(node.left, !node.left || !node.right);
    dfs(node.right, !node.left || !node.right);
  };

  dfs(root, false);

  return result;
};
