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
 * @param {number} targetSum
 * @return {boolean}
 */
 const checkSum = (node, num, targetSum) => {
    if (node === null) return num === targetSum;
    
    if (node.left && node.right === null) return checkSum(node.left, num + node.val, targetSum);
    if (node.right && node.left === null) return checkSum(node.right, num + node.val, targetSum);
    
    return checkSum(node.left, num + node.val, targetSum) || checkSum(node.right, num + node.val, targetSum);
}

var hasPathSum = function(root, targetSum) {
    if (root === null) return false;
    
    return checkSum(root, 0, targetSum);
};