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
 * @return {string[]}
 */
 var binaryTreePaths = function(root) {
    const result = [];
    
    if (root === null) return result;
    
    const addRoot = (node, path) => {
        const newPath = path + (path.length ? `->${node.val}` : `${node.val}`);
        
        if (node.left === null && node.right === null) {
            result.push(newPath);
            return;
        }
        if (node.left) addRoot(node.left, newPath);
        if (node.right) addRoot(node.right, newPath);
    };
    
    addRoot(root, "");
    
    return result;
};
