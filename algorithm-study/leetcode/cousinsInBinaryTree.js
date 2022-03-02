/**
 * https://leetcode.com/problems/cousins-in-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
 var isCousins = function(root, x, y) {
    let xDepth = 0;
    let yDepth = 0;
    
    let xPnode = null;
    let yPnode = null;
    
    const findTarget = (node, pNode, count) => {
        if (node.val === x) {
            xDepth = count;
            xPnode = pNode;
            return;
        }
        if (node.val === y) {
            yDepth = count;
            yPnode = pNode;
            return;
        }
        
        if (node.left) findTarget(node.left, node, count + 1);
        if (node.right) findTarget(node.right, node, count + 1);
    }
    
    findTarget(root, null, 1);
    
    console.log(xDepth, yDepth)
    
    return xDepth === yDepth && xPnode !== yPnode;
};