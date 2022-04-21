/**
 * https://leetcode.com/problems/path-sum-ii/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    if (!root) return [];
    const results = [];
    
    const checkPath = (node, acc, target, list) => {
        if (!node.left && !node.right) {
            if (acc + node.val === target) {
                list.push(node.val);
                results.push(list);
            }
            return;
        }
        
        if (node.left) checkPath(node.left, acc + node.val, target, [...list, node.val]);
        if (node.right) checkPath(node.right, acc + node.val, target, [...list, node.val]);
    }
    
    checkPath(root, 0, targetSum, []);
    
    return results;
};