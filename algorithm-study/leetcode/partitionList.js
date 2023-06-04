/**
 * MEDIUM
 * https://leetcode.com/problems/partition-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  const less = [];
  const greater = [];

  let cur = head;
  while (cur) {
    if (cur.val < x) less.push(cur);
    else greater.push(cur);
    cur = cur.next;
  }

  const newHead = new ListNode();
  cur = newHead;
  for (let i = 0; i < less.length; i++) {
    cur.next = less[i];
    cur = cur.next;
  }

  for (let i = 0; i < greater.length; i++) {
    cur.next = greater[i];
    cur = cur.next;
  }

  cur.next = null;

  head = newHead.next;

  return;
};
