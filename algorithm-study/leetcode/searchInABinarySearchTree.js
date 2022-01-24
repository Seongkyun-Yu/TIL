/**
 * https://leetcode.com/problems/search-in-a-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */

 var searchBST = function(root, val) {
    const checkNode = (node) => {
        if (node.val === val) return node;
        
        let left = null;
        let right = null;
        
        if (node.left) left = checkNode(node.left);
        if (node.right) right = checkNode(node.right);
        
        return left || right;        
    }
    
    return checkNode(root)
};