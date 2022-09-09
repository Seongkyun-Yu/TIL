/**
 * https://leetcode.com/problems/count-good-nodes-in-binary-tree/
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
 var goodNodes = function(root) {
    const checkGoodNodes = (node, max) => {
        if (!node) return 0;
        
        const addNum = node.val >= max ? 1 : 0;
        const maxVal = Math.max(max, node.val);
        
        
        const leftGoodNodes = node.left ? checkGoodNodes(node.left, maxVal) : 0;
        const rightGoodNodes = node.right ? checkGoodNodes(node.right, maxVal) : 0;
        
        return addNum + leftGoodNodes + rightGoodNodes;
    };
    
    return checkGoodNodes(root, -Infinity);
};