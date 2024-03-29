/**
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

 const recurs = (root, result) => {
    if (root === null) return;
    
    if (root.left !== null) recurs(root.left, result);
    result.push(root.val);
    if (root.right !== null) recurs(root.right, result);
}

var inorderTraversal = function(root) {
    const result = [];
    recurs(root, result);
    return result;
};