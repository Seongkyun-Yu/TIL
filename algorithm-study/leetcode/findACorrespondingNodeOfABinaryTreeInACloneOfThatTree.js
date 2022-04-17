/**
 * https://leetcode.com/problems/find-a-corresponding-node-of-a-binary-tree-in-a-clone-of-that-tree/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} original
 * @param {TreeNode} cloned
 * @param {TreeNode} target
 * @return {TreeNode}
 */

 var getTargetCopy = function(original, cloned, target) {
    let queue = [original];
    let now = null;
    let origin = null;
    while(queue.length) {
        now = queue.pop();
        
        if (now.val === target.val) {
            origin = now;
            break;
        }
        
        if (now.left) queue.push(now.left);
        if (now.right) queue.push(now.right);
    }
    
    queue = [cloned];
    let clone = null
    now = null
    while(queue.length) {
        now = queue.pop();
        
        if (now.val === target.val && now.left?.val === origin.left?.val && now.right?.val === origin.right?.val) {
            clone = now;
            break;
        }
        
        if (now.left) queue.push(now.left);
        if (now.right) queue.push(now.right);
    }
    
    return clone;
};