/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * https://leetcode.com/problems/n-ary-tree-preorder-traversal/
 * @param {Node|null} root
 * @return {number[]}
 */
 var preorder = function(root) {
    const result = [];
    
    const preOrder = (node) => {
        if (!node) return;
        
        result.push(node.val);
        
        while(node.children.length) {
            preOrder(node.children.shift());
        }
    }
    
    preOrder(root);
    
    return result;
};