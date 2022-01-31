/**
 * https://leetcode.com/problems/increasing-order-search-tree/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
 var increasingBST = function(root) {    
    const newNode = new TreeNode(); 
    let tailNode = newNode;
	
    const inOrder = (node) => {
        if(!node) return; 
        
        inOrder(node.left); 
        
        tailNode.right = node; 
        tailNode = tailNode.right; 
        tailNode.left = null;
        
        inOrder(node.right);    
    }; 
	
    inOrder(root);
    
    return newNode.right;
};