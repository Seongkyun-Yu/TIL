/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * https://leetcode.com/problems/binary-tree-postorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */

 var postorderTraversal = function(root) {
    if (root === null) return [];
    
    const result = [];
    
    const addNode = (node) => {
        if (node.left === null && node.right === null) return node.val;

        if (node.left) {
            const left = addNode(node.left);
            if (left) result.push(left);
        }
        if (node.right) {
            const right = addNode(node.right);
            if (right) result.push(right);
        }
        
        result.push(node.val);
    }
    
    const rootVar = addNode(root);
    if (rootVar) result.push(rootVar)
    
    return result;
};
