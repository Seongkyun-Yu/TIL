/**
 * https://leetcode.com/problems/sort-list/
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
 var sortList = function(head) {
    const nums = [];
    
    let cur = head;
    while(cur) {
        nums.push(cur.val);
        cur = cur.next;
    }
    
    nums.sort((a, b) => a - b);
    
    const newList = new ListNode();
    cur = newList;
    for(let i = 0; i < nums.length; i++) {
        cur.next = new ListNode(nums[i]);
        cur = cur.next;
    }
    
    return newList.next;
};