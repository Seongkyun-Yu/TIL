/**
 * MEDIUM
 * https://leetcode.com/problems/find-bottom-left-tree-value/
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
var findBottomLeftValue = function (root) {
  const queue = [root];
  let result = null;
  while (queue.length) {
    const len = queue.length;
    let node;
    for (let i = 0; i < len; i++) {
      node = queue.shift();
      if (node.right) queue.push(node.right);
      if (node.left) queue.push(node.left);
    }
    result = node;
  }

  return result.val;
};
