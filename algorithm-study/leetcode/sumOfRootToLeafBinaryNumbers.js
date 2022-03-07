/**
 * https://leetcode.com/problems/sum-of-root-to-leaf-binary-numbers/
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
 var sumRootToLeaf = function(root) {
    let sum = 0;
    
    const makeBinarySum = (node, binary) => {
        const s = binary + node.val;
        
        if (!node.left && !node.right) {
            sum += parseInt(s, 2);
            return;
        }
        
        if (node.left) makeBinarySum(node.left, s);
        if (node.right) makeBinarySum(node.right, s);
    }
    
    makeBinarySum(root, "");
    
    return sum;
};