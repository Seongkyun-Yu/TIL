/**
 * https://leetcode.com/problems/merge-k-sorted-lists/
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
 var mergeKLists = function(lists) {
    const minHeap = new MinPriorityQueue();
    for(const list of lists) {
        if (list) minHeap.enqueue(list, list.val);
    }
    
    const result = new ListNode();
    let cur = result;
    while(minHeap.size()) {
        const node = minHeap.dequeue().element;
        cur.next = node;
        cur = node;
        if (node.next) minHeap.enqueue(node.next, node.next.val);
    }
    
    return result.next;
};