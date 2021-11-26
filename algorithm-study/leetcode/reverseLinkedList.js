/**
 * https://leetcode.com/problems/reverse-linked-list/
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
 const makeLinkedList = (node) => {
    if (node.next === null) return [new ListNode(node.val), null];
    
    const [head, tail] = makeLinkedList(node.next);
    const newNode = new ListNode(node.val)
    
    if (tail === null) {
        head.next = newNode;
        return [head, head.next]
    } else {
        tail.next = newNode;
        return [head, tail.next];
    }
}

var reverseList = function(head) {
    if (head === null) return head;
    
    const [result] = makeLinkedList(head);
    
    return result;
};