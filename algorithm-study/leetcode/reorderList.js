/**
 * https://leetcode.com/problems/reorder-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
    const list = [];
    
    let cur = head;
    while(cur) {
        list.push(cur.val);
        cur = cur.next;
    }
    
    const result = new ListNode();
    let cur2 = result;
    let left = 0;
    let right = list.length - 1;
    while(left <= right) {
        if (left === right) {
            cur2.next = new ListNode(list[left]);
            cur2 = cur2.next;
        }
        else {
            cur2.next = new ListNode(list[left]);
            cur2.next.next = new ListNode(list[right]);
            cur2 = cur2.next.next;
        }
        left++;
        right--;
    }
    
    head = result.next;
};