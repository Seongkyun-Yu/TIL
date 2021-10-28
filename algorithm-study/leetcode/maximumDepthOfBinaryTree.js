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
 * @return {number}
 */

 var maxDepth = function(root) {
    let max = 0;
    
    const checkDeep = (node, now) => {
        if (node === null) return;
        if (node.left === null && node.right === null && max < now) return max = now; 
        if (node.left !== null) checkDeep(node.left, now + 1);
        if (node.right !== null) checkDeep(node.right, now + 1);
    }
    
    checkDeep(root, 1)
    return max;
};