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

 const checkDeep = (node, deepCount) => {
    if (node === null) return deepCount;
    if (node.left === null && node.right === null) return deepCount;
    if (node.left === null && node.right) return checkDeep(node.right, deepCount + 1);
    if (node.right === null && node.left) return checkDeep(node.left, deepCount + 1);
    
    return Math.min(checkDeep(node.left, deepCount + 1), checkDeep(node.right, deepCount + 1));
}

var minDepth = function(root) {
    if (root === null) return 0;
    
    return checkDeep(root, 1);
};

