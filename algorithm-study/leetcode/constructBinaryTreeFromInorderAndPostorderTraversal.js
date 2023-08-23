/**
 * MEDIUM
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const inorderIdx = {};
  for (let i = 0; i < inorder.length; i++) {
    inorderIdx[inorder[i]] = i;
  }

  const helper = (l, r) => {
    if (l > r) return null;

    const root = new TreeNode(postorder.pop());

    const idx = inorderIdx[root.val];
    root.right = helper(idx + 1, r);
    root.left = helper(l, idx - 1);

    return root;
  };

  return helper(0, inorder.length - 1);
};
