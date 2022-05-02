/**
 * https://leetcode.com/problems/count-complete-tree-nodes/
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
 var countNodes = function(root) {
    if (!root) return 0;
    
    const queue = [root];
    let count = 0;
    
    while(queue.length) {
        const node = queue.shift();
        count++;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    
    return count;
};