/**
 * MEDIUM
 * https://leetcode.com/problems/maximum-level-sum-of-a-binary-tree/
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
var maxLevelSum = function (root) {
  let max = -Infinity;
  let result = 1;
  let level = 1;

  const queue = [root];
  while (queue.length) {
    let sum = 0;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const node = queue.shift();
      sum += node.val;
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    if (max < sum) {
      result = level;
      max = sum;
    }

    level++;
  }

  return result;
};
