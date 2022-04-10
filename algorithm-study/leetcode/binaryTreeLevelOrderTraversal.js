/**
 * https://leetcode.com/problems/binary-tree-level-order-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root === null) return [];
    const result = [];

    const queue = [root];
    let queueLength = 1;
    let now;
    let nowList = [];
    while(queue.length) {
        now = queue.shift();
        queueLength--;
        
        nowList.push(now.val);
        
        if (now.left) queue.push(now.left);
        if (now.right) queue.push(now.right);
        
        if (queueLength === 0) {
            queueLength = queue.length;
            result.push(nowList);
            nowList = [];
        }
    }
    
    return result;
};