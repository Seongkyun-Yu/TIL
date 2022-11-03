/**
 * https://leetcode.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    const maxHeap = new MaxPriorityQueue();
    for(const num of nums) {
        maxHeap.enqueue(num, num);
    }
    
    let result;
    for(let i = 0; i < k; i++) {
        result = maxHeap.dequeue().element;
    }
    
    return result;
};