/**
 * MEDIUM
 * https://leetcode.com/problems/binary-tree-upside-down/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var upsideDownBinaryTree = function (root) {
  if (!root) return root;
  let result = null;
  const dfs = (node) => {
    if (!node) return;
    if (!node.left) {
      result = node;
      return;
    }

    dfs(node.left);

    const newRoot = node.left;
    newRoot.left = node.right;
    newRoot.right = node;
    node.right = null;
    node.left = null;
  };

  dfs(root);

  return result;
};
