/**
 * https://leetcode.com/problems/range-sum-of-bst/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    const queue = [root];
    let sum = low + high;
    
    let node;
    while(queue.length) {
        node = queue.shift();
        
        if (node.val > low && node.val < high) sum += node.val;
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return sum;
};