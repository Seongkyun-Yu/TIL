/**
 * https://leetcode.com/problems/validate-binary-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const check = (node, low, high) => {
        if (!node) return true;
        if (node.val <= low || node.val >= high) return false;
        
        const isValidLeft = check(node.left, low, node.val);
        const isValidRight = check(node.right, node.val, high);

        return isValidLeft && isValidRight;
    } 
    
    return check(root, -Infinity, Infinity);
};