/**
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function(preorder, inorder) {
    if (!preorder.length || !inorder.length) return null;

    const header = preorder.shift();
    const index = inorder.indexOf(header);
    
    if (index === -1) return null;
    
    const leftInorderList = inorder.slice(0, index);
    const rightInorderList = inorder.slice(index + 1, inorder.length);
    
    const leftPreorderList = preorder.slice(0, leftInorderList.length);
    const rightPreorderList = preorder.slice(leftInorderList.length, preorder.length);
    
    const node = new TreeNode(header);
    node.left = buildTree(leftPreorderList, leftInorderList);
    node.right = buildTree(rightPreorderList, rightInorderList);
    
    return node;
};

