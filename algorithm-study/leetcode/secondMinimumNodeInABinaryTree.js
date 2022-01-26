/**
 * https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
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
 var findSecondMinimumValue = function(root) {
    let min = Infinity;
    let secondMin = Infinity;
    
    const queue = [root];
    
    while(queue.length) {
        const node = queue.shift();
        
        if (node.val < min) {
            secondMin = min;
            min = node.val;
        } else if (node.val < secondMin && node.val > min) {
            secondMin = node.val;
        }
        
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    } 
    
    return secondMin === Infinity ? -1 : secondMin;
};