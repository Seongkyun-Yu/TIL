/**
 * https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
 var getDecimalValue = function(head) {
    let strNum = "";
    let cur = head;
    
    while(cur !== null) {
        strNum += cur.val;
        cur = cur.next;
    }
    
    return parseInt(strNum, 2);
};