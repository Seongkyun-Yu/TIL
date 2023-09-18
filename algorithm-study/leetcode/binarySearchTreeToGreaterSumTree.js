/**
 * MEDIUM
 * https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/
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
var bstToGst = function (root) {
  const dfs = (node, biggerAcc) => {
    if (!node.left && !node.right) {
      node.val += biggerAcc;
      return node;
    }

    if (node.right) {
      const rightNode = dfs(node.right, biggerAcc);
      node.val += rightNode.val;
    }
    if (node.left) {
      const leftNode = dfs(node.left, node.val);
      leftNode.val += node.val + biggerAcc;
    }

    return node;
  };

  return dfs(root, 0);
};
