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
 * @return {boolean}
 */
 const check = (node1, node2) => {
    if (node1 === null || node2 === null) return node1 === node2;
    if (node1.val !== node2.val) return false;
    
    return check(node1.right, node2.left) && check(node1.left, node2.right);
}

var isSymmetric = function(root) {
    return check(root.left, root.right);
};

