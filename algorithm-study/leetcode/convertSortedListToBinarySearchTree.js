/**
 * MEDIUM
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  if (!head) return null;

  let prevMid = null;
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    prevMid = slow;
    slow = slow.next;
    fast = fast.next.next;
  }
  if (prevMid) prevMid.next = null;
  if (head === slow) return new TreeNode(head.val);

  const mid = new TreeNode(
    slow.val,
    sortedListToBST(head),
    sortedListToBST(slow.next),
  );

  return mid;
};
