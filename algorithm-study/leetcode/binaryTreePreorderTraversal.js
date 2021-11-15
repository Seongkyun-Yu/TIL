/**
 * https://leetcode.com/problems/binary-tree-preorder-traversal/
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

 var preorderTraversal = function(root) {
    if (root === null) return [];
    
    const result = [];
    
    const addNum = (node) => {
        result.push(node.val)
        
        if (node.left) addNum(node.left);
        if (node.right) addNum(node.right);
        
        return;
    }
    
    addNum(root);
    
    return result;
};
