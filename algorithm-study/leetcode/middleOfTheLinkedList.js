/**
 * https://leetcode.com/problems/middle-of-the-linked-list/
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
 var middleNode = function(head) {
    const nodes = [head];
    
    let now = head;
    while(now.next) {
        nodes.push(now.next);
        now = now.next;
    }
    
    return nodes[Math.floor(nodes.length / 2)];
};

/**
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
 var middleNode = function(head) {    
    let slow = head;
    let fast = head;
    while(true) {
        if (fast.next && !fast.next.next) return slow.next;
        else if (!fast.next) return slow;
        fast = fast.next?.next;
        slow = slow.next;
    }
};