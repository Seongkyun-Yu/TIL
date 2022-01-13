/**
 * https://leetcode.com/problems/diameter-of-binary-tree/submissions/
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
 const checkDepth = (node, count) => {
    if (node === null) return count - 1;
    
    if (node.left === null && node.right === null) return count;
    
    const leftVal = checkDepth(node.left, count + 1);
    const rightVal = checkDepth(node.right, count + 1);
    
    return leftVal > rightVal ? leftVal : rightVal;
}

var diameterOfBinaryTree = function(root) {
    if (root.left === null && root.right === null) return 0;
    
    return checkDepth(root.left, 1) + checkDepth(root.right, 1);
};