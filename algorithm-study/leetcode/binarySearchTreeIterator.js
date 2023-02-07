/**
 * MEDIUM
 * https://leetcode.com/problems/binary-search-tree-iterator/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
  this.nodes = [];
  this.cur = -1;

  const makeList = (node) => {
    if (!node) return;

    makeList(node.left);
    this.nodes.push(node.val);
    makeList(node.right);
  };

  makeList(root);
};

/**
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  this.cur++;
  return this.nodes[this.cur];
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.nodes[this.cur + 1] !== undefined;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
