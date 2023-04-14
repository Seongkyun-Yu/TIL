/**
 * EASY
 * https://leetcode.com/problems/closest-binary-search-tree-value/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */
var closestValue = function(root, target) {
    let min = root.val;
    while(root) {
        const currDiff = Math.abs(root.val - target);
        if (Math.abs(min - target) > currDiff) min = root.val;
        else if (Math.abs(min - target) === currDiff) min = Math.min(root.val, min)

        min = Math.abs(min - target) > currDiff ? root.val : min;
        if(target < root.val) {
            root = root.left;
        } else {
            root = root.right;
        }
    }
    return min;
};