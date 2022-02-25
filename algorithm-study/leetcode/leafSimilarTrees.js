/**
 * https://leetcode.com/problems/leaf-similar-trees/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
 const check = (node, nums) => {
    if (node.left === null && node.right === null) return nums.push(node.val);
    
    if (node.left) check(node.left, nums);
    if (node.right) check(node.right, nums);
}
var leafSimilar = function(root1, root2) {
    const leafs1 = [];
    const leafs2 = [];
    
    check(root1, leafs1);
    check(root2, leafs2);
    
    
    if (leafs1.length !== leafs2.length) return false;
    for (let i = 0; i < leafs1.length; i++) {
        if (leafs1[i] !== leafs2[i]) return false;
    }
    
    return true;
};