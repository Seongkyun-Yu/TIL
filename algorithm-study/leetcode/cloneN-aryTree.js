/**
 * MEDIUM
 * https://leetcode.com/problems/clone-n-ary-tree/
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val === undefined ? 0 : val;
 *    this.children = children === undefined ? [] : children;
 * };
 */

/**
 * @param {Node|null} node
 * @return {Node|null}
 */
var cloneTree = function (root) {
  if (!root) return root;

  const newNode = new Node(root.val);
  for (const child of root.children) {
    newNode.children.push(cloneTree(child));
  }

  return newNode;
};
