/**
 * MEDIUM
 * https://leetcode.com/problems/rotate-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head) return head;

  let cur = head;
  let tail = null;
  while (cur) {
    next = cur.next;

    if (!next) {
      tail = cur;
      break;
    }

    next.prev = cur;
    cur = next;
  }
  head.prev = tail;
  tail.next = head;

  cur = head;
  for (let i = 0; i < k; i++) {
    cur = cur.prev;
  }

  cur.prev.next = null;

  return cur;
};
