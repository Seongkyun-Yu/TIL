/**
 * MEDIUM
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  const leftStack = [root];
  const rightStack = [];
  while (leftStack.length || rightStack.length) {
    const node = leftStack.pop();
    if (!node) continue;
    if (node.right) rightStack.push(node.right);
    if (node.left) leftStack.push(node.left);

    if (!node.left) {
      const rightNode = rightStack.pop();
      node.right = rightNode || null;
      if (rightNode) leftStack.push(rightNode);
    } else {
      node.right = node.left;
    }
    node.left = null;
  }
};
