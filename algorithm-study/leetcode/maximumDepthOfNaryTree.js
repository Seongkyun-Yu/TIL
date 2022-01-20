/**
 * https://leetcode.com/problems/maximum-depth-of-n-ary-tree/
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */


 var maxDepth = function(root) {
    if (root === null) return 0;
    
    let max = 0;
    
    const depthCheck = (node, count) => {
        if (node.children.length === 0) {
            max = Math.max(count, max);
            return;
        };
        
        for (let i = 0; i < node.children.length; i++) {
            depthCheck(node.children[i], count + 1);
        }
    }
    
    depthCheck(root, 1)
    
    return max;
};