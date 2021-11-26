/**
 * https://leetcode.com/problems/remove-linked-list-elements/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
 var removeElements = function(head, val) {
    if (!head) return head;
    
    while (head && head.val === val) {
        head = head.next;
    }
    
    let current = head;
    
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
            continue
        } 
        current = current.next;
    }
    
    return head;
};