/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  const num1 = +l1.join('');
  const num2 = +l2.join('');

  return [...(num1 + num2).toString()];
};

console.log(addTwoNumbers([2, 4, 3], [5, 6, 4]));
