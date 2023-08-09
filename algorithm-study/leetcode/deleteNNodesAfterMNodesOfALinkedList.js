/**
 * EASY
 * https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
  let curNode = head;
  let counter = 1;
  while (curNode) {
    if (counter === m) {
      const lastNode = curNode;
      let index = 0;
      while (index !== n) {
        if (!curNode) {
          lastNode.next = null;
          return head;
        }
        curNode = curNode.next;
        index++;
      }
      lastNode.next = curNode ? curNode.next : null;
      counter = 0;
    }
    curNode = curNode?.next;
    counter++;
  }
  return head;
};
