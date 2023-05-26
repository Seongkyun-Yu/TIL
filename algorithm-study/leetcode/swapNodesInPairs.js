/**
 * https://leetcode.com/problems/swap-nodes-in-pairs/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;

  const tempHead = new ListNode();
  let slow = tempHead;
  let fast = head;

  while (fast && fast.next) {
    slow.next = fast.next;
    fast.next = slow.next.next;
    slow.next.next = fast;

    slow = fast;
    fast = slow.next;
  }

  return tempHead.next;
};

var swapPairs2 = function (head) {
  if (!head || !head.next) return head;

  const newHead = head.next;

  let prev = null;
  let cur = head;
  let next = cur.next;
  while (next) {
    if (prev) prev.next = next;

    const newTarget = next.next;
    next.next = cur;
    cur.next = newTarget;

    prev = cur;

    cur = newTarget;
    next = newTarget?.next;
  }

  return newHead;
};
