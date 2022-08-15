/**
 * https://leetcode.com/problems/copy-list-with-random-pointer/
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    let newHead = null
    const copiedNodes = new Map();
    
    let cur = head;
    while(cur) {
        copiedNodes.set(cur, new Node(cur.val));
        cur = cur.next;
    }
    
    cur = head;
    while(cur) {
        const newNode = copiedNodes.get(cur);
        newNode.next = copiedNodes.get(cur.next) || null;
        newNode.random = copiedNodes.get(cur?.random) || null;
        cur = cur.next;
    }
    
    return copiedNodes.get(head);
};