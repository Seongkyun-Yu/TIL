/**
 * https://leetcode.com/problems/two-sum-iv-input-is-a-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
 var findTarget = function(root, k) {
    const queue = [root];
    const data = new Set();
    
    while(queue.length) {
        const node = queue.shift();
        
        if (data.has(k - node.val)) return true;
        
        data.add(node.val);
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return false;
};