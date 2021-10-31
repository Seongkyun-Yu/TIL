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
 * @return {boolean}
 */
 const checkDeep = function(node) {
    if (!node) return 0;
    
    const left = 1 + checkDeep(node.left);
    const right = 1 + checkDeep(node.right);
    
    if (Math.abs(left - right) > 1) return Infinity;
    
    return Math.max(left, right);
}
    
    

var isBalanced = function(root) {    
    return checkDeep(root) !== Infinity;
};