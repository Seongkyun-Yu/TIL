/**
 * MEDIUM
 * https://leetcode.com/problems/insert-greatest-common-divisors-in-linked-list/
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
var insertGreatestCommonDivisors = function (head) {
  const gcd = (big, small) => {
    if (big % small === 0) return small;

    return gcd(small, big % small);
  };

  let cur = head;
  while (cur && cur.next) {
    let node;
    if (cur.val < cur.next.val) {
      node = new ListNode(gcd(cur.next.val, cur.val));
    } else {
      node = new ListNode(gcd(cur.val, cur.next.val));
    }
    const temp = cur.next;
    cur.next = node;
    node.next = temp;
    cur = temp;
  }

  return head;
};
