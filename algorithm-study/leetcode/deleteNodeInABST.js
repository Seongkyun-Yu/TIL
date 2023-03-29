/**
 * MEDIUM
 * https://leetcode.com/problems/delete-node-in-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (!root) return root;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
    return root;
  }
  if (key < root.val) {
    root.left = deleteNode(root.left, key);
    return root;
  }

  if (!root.left) return root.right;
  if (!root.right) return root.left;

  let cur = root.right;
  while (cur.left) {
    cur = cur.left;
  }

  root.val = cur.val;
  root.right = deleteNode(root.right, root.val);

  return root;
};
