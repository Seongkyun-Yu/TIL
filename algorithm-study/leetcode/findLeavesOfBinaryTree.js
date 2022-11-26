/**
 * MEDIUM
 * https://leetcode.com/problems/find-leaves-of-binary-tree/
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
 var findLeaves = function(root) {
    const result = [];
    const queue = [root];
    
    const dfs = (node, parent, res) => {
        if (!node) return;
        
        if (!node.left && !node.right) {
            res.push(node.val)
            if (parent.left === node) parent.left = null;
            if (parent.right === node) parent.right = null;
            return;
        }
        
        if (node.left) dfs(node.left, node, res);
        if (node.right) dfs(node.right, node, res);
    }
    
    const head = new TreeNode(1, root);
    while(head.left) {
        const tempList = [];
        dfs(root, head, tempList);
        result.push(tempList);
    }
    
    return result;
};