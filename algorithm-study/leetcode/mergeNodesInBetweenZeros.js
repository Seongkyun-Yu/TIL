/**
 * https://leetcode.com/problems/merge-nodes-in-between-zeros/submissions/
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
 var mergeNodes = function(head) {
    let cur = head;
    let sum = 0;
    const resultNode = new ListNode();
    let resultTail = resultNode;
        
    while(cur) {
        if (cur.val > 0) sum += cur.val;
        else if(sum > 0) {            
            resultTail.next = new ListNode(sum);
            resultTail = resultTail.next;
            
            sum = 0;
        }
        cur = cur.next;
    }
    
    return resultNode.next;
};