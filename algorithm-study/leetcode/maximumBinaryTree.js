/**
 * https://leetcode.com/problems/maximum-binary-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    const result = new TreeNode();
    
    const makeNode = (nums) => {
        if (nums.length === 0) return;
        
        const maxNum = Math.max(...nums);
        const maxNumIndex = nums.indexOf(maxNum);
        
        return new TreeNode(maxNum, makeNode(nums.slice(0, maxNumIndex)), makeNode(nums.slice(maxNumIndex + 1)));
    }
    
    return makeNode(nums);
};