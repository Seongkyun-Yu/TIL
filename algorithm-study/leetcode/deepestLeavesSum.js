/**
 * https://leetcode.com/problems/deepest-leaves-sum/
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
 var deepestLeavesSum = function(root) {
    let maxDepth = -Infinity;
    let sum = 0;
    
    const sumDeepestLeaves = (node, depth) => {
        if (node === null) return;
        
        
        if (node.right !== null) sumDeepestLeaves(node.right, depth + 1);
        if (node.left !== null) sumDeepestLeaves(node.left, depth + 1);
        
        if (node.left === null && node.right === null) {
            if (maxDepth < depth) {
                maxDepth = depth;
                sum = node.val;
            } else if (maxDepth === depth) {
                sum += node.val;
            }
        }
    }
    
    sumDeepestLeaves(root, 1);
    
    return sum;
};