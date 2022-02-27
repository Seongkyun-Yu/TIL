/**
 * https://leetcode.com/problems/univalued-binary-tree/
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
 var isUnivalTree = function(root) {    
    const queue = [root];
    const checkVal = root.val;
    
    let node;
    while(queue.length) {
        node = queue.shift();
        if (node.val !== checkVal) return false;
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return true;
};