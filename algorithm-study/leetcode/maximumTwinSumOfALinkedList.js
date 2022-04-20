/**
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
 var pairSum = function(head) {
    const vals = [];
    let max = -Infinity;
    
    let cur = head;
    while(cur) {
        vals.push(cur.val);
        cur = cur.next;
    }
    
    let sum = 0;
    while(vals.length) {
        sum = vals.shift() + vals.pop();
        if (sum > max) max = sum;
    }
    
    return max;
};