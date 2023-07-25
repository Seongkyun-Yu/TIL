/**
 * MEDIUM
 * https://leetcode.com/problems/reverse-linked-list-ii/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
  if (left === right) return head;

  const newHead = new ListNode(0, head);
  let leftPrev = newHead;
  let cur = head;

  for (let i = 0; i < left - 1; i++) {
    leftPrev = cur;
    cur = cur.next;
  }

  let prev = null;
  for (let i = 0; i < right - left + 1; i++) {
    const temp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = temp;
  }

  leftPrev.next.next = cur;
  leftPrev.next = prev;

  return newHead.next;
};
