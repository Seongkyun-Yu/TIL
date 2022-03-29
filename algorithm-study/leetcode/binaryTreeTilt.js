/**
 * https://leetcode.com/problems/binary-tree-tilt/
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
 var findTilt = function(root) {
    let total = 0;
    
    const sumNode = (node) => {
        if (node === null) return 0;
                
        const left = sumNode(node.left);
        const right = sumNode(node.right);
        
        total += Math.abs(left - right);
        
        return node.val + left + right;
    }
    
    sumNode(root);
    
    return total;
};