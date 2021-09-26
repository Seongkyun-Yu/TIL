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

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) return null;

  let list1 = l1;
  let list2 = l2;

  const newList1 = [];
  const newList2 = [];

  while (list1) {
    newList1.push(list1.val);
    if (list1.next) list1 = list1.next;
    else break;
  }
  while (list2) {
    newList2.push(list2.val);
    if (list2.next) list2 = list2.next;
    else break;
  }

  const resultList = [...newList1, ...newList2].sort((a, b) => a - b);

  const result = new ListNode(resultList[0]);
  let lastNode = result;
  for (let i = 1; i < resultList.length; i++) {
    const newNode = new ListNode(resultList[i]);
    lastNode.next = newNode;
    lastNode = newNode;
  }

  return result;
};
