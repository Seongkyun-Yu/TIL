/**
 * https://leetcode.com/problems/minimum-distance-between-bst-nodes/
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
 var minDiffInBST = function(root) {
    let prev = null;
    let min = Infinity;
    
    const inorder = curr => {
        if (curr === null) return;
        
        inorder(curr.left);
        
        if (prev) min = Math.min(min, Math.abs(curr.val - prev.val));
        
        prev = curr;
        
        inorder(curr.right);
    };
    
    inorder(root);
    
    return min;
};