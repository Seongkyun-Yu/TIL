/**
 * https://leetcode.com/problems/binary-tree-right-side-view/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var rightSideView = function(root) {
    if (!root) return [];
    
    const rightSide = [];
    const queue = [root];
    
    let cur;
    let count = 1;
    while(queue.length) {
        cur = queue.shift();
                
        if (cur.left) queue.push(cur.left);
        if (cur.right) queue.push(cur.right);
        
        count--;
        if (count === 0) {
            rightSide.push(cur.val);
            count = queue.length;
        }
    }
    
    return rightSide;
};