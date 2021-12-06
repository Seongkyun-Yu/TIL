/**
 * https://leetcode.com/problems/palindrome-linked-list/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var isPalindrome = function(head) {
    if (head === null) return false;
    
    let result = "";
    
    let node = head;
    while (node) {
        result += node.val;
        node = node.next;
    }
    
    return result === [...result].reverse().join("");
};