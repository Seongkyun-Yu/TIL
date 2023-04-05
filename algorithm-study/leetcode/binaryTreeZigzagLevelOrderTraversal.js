/**
 * MEDIUM
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/
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
var zigzagLevelOrder = function (root) {
  if (!root) return [];

  let isLeft = false;
  const result = [[root.val]];
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    const temp = [];

    queue.reverse();

    for (let i = 0; i < len; i++) {
      const node = queue.shift();

      if (isLeft) {
        if (node.left) {
          queue.push(node.left);
          temp.push(node.left.val);
        }
        if (node.right) {
          queue.push(node.right);
          temp.push(node.right.val);
        }
      } else {
        if (node.right) {
          queue.push(node.right);
          temp.push(node.right.val);
        }
        if (node.left) {
          queue.push(node.left);
          temp.push(node.left.val);
        }
      }
    }

    isLeft = !isLeft;
    if (temp.length) result.push(temp);
  }

  return result;
};
