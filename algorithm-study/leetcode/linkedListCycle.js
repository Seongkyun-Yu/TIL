/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    if (head === null || head.next === null) return false;
    
    const checkList = new Set();
    
    checkList.add(head.next);
    
    let nextNode = head.next;
    
    while (true) {
        if (nextNode === null) return false;
        if (checkList.has(nextNode.next)) return true;
        else checkList.add(nextNode.next);
        
        nextNode = nextNode.next;
    }
    
};