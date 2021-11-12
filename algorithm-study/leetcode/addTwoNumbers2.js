// https://leetcode.com/problems/add-two-numbers/

/**
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
    const newNode = new ListNode(0);
    
    addNodes(newNode, l1, l2, 0);
    
    return newNode.next;
};

const addNodes = (head, l1, l2, num) => {
    if (l1 === null && l2 === null) {
        if (num) head.next = new ListNode(num);
        return;
    }
    
    let sum = 0 + num;
    
    if (l1 && l2) sum += l1.val + l2.val;
    if (l1 === null && l2) sum += l2.val;
    if (l2 === null && l1) sum += l1.val;
    
    if (sum >= 10) {
        const newNode = new ListNode(sum - 10);
        head.next = newNode;
        addNodes(newNode, l1 ? l1.next : null, l2 ? l2.next: null, 1);
        return;
    } else {
        const newNode = new ListNode(sum);
        head.next = newNode;
        addNodes(newNode, l1 ? l1.next : null, l2 ? l2.next: null, 0);
        return;
    }
}