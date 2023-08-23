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
  const newHead = new ListNode(0, head);

  const greaterHead = new ListNode(0);
  let greaterTail = greaterHead;

  let prev = newHead;
  let cur = head;
  while (cur) {
    if (cur.val >= x) {
      greaterTail.next = cur;
      greaterTail = cur;

      const temp = cur.next;
      cur.next = null;

      prev.next = temp;
      cur = temp;
    } else {
      prev = cur;
      cur = cur.next;
    }
  }

  prev.next = greaterHead.next;

  return newHead.next;
};
