/**
 * https://leetcode.com/problems/add-two-numbers-ii/submissions/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    const list1 = [];
    const list2 = [];
    
    let cur = l1;
    while(cur !== null) {
        list1.push(cur.val);
        cur = cur.next;
    }
    
    cur = l2;
    while(cur !== null) {
        list2.push(cur.val);
        cur = cur.next;
    }
    
    list1.reverse();
    list2.reverse();
    
    const sumList = [];
    let over10 = 0;
    const len = list1.length > list2.length ? list1.length : list2.length;
    for(let i = 0; i < len; i++) {
        let sum = 0;
        if (list1[i] !== undefined && list2[i] !== undefined) sum = over10 + list1[i] + list2[i]            
        else if (list1[i] === undefined) sum = over10 + list2[i]
        else sum = over10 + list1[i]

        if (sum >= 10) {
            over10 = Math.floor(sum / 10);
            sumList.push(sum - over10 * 10);
        } else {
            sumList.push(sum);
            over10 = 0;
        }
        
    }
    if (over10) sumList.push(over10);
    sumList.reverse();
    
    const result = new ListNode();
    cur = result;
    for(let i = 0; i < sumList.length; i++) {
        cur.next = new ListNode(sumList[i]);
        cur = cur.next;
    }
    
    return result.next;
};