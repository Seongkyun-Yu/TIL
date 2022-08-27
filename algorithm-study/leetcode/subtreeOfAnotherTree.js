/**
 * https://leetcode.com/problems/subtree-of-another-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var check = function(tree, subtree) {
    if(!tree && !subtree) return true;
    if(!tree || !subtree) return false;
    return (tree.val == subtree.val) && check(tree.left, subtree.left) && check(tree.right, subtree.right);
}

var isSubtree = function(tree, subtree) {
    if(!tree && !subtree) return true;
    if(!tree || !subtree) return false;
    
    return check(tree, subtree) || isSubtree(tree.left, subtree) ||  isSubtree(tree.right, subtree);
};