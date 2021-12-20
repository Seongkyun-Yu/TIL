/**
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
 var sumOfLeftLeaves = function(root) {
    let result = 0;
    
    const check = (node, isLeft) => {
        if (node.left === null && node.right === null && isLeft) {
            result += node.val;
            return;
        }
        
        if (node.left) check(node.left, true);
        if (node.right) check(node.right, false);
    }
    
    check(root, false);
    
    return result;
};

