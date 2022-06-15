/**
 * https://leetcode.com/problems/n-ary-tree-postorder-traversal/
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
 var postorder = function(root) {
    const result = [];
    
    const check = (node) => {
        if (node === null) return;
        
        for(let i = 0; i < node.children.length; i++) {
            if (node.children[i]) check(node.children[i]); 
        }
        result.push(node.val);
    }
    
    check(root);
    
    return result;
};