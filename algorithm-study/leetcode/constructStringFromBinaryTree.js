/**
 * https://leetcode.com/problems/construct-string-from-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
 var tree2str = function(root) {
    let str = "" + root.val;
    
    if (root.left) str += "(" + tree2str(root.left) + ")";
    else if (root.right) str += "()";
    
    if (root.right) str += "(" + tree2str(root.right) + ")"
    
    return str;    
};