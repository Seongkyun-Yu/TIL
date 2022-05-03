/**
 * https://leetcode.com/problems/linked-list-random-node/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 */
 var Solution = function(head) {
    this.nodes = [];
    
    let cur = head;
    while(cur) {
        this.nodes.push(cur.val);
        cur = cur.next;
    }
};

/**
 * @return {number}
 */
Solution.prototype.getRandom = function() {
    return this.nodes[Math.floor(Math.random() * this.nodes.length)];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */