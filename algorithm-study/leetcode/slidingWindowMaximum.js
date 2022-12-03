/**
 * HARD
 * https://leetcode.com/problems/sliding-window-maximum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var maxSlidingWindow = function(nums, k) {   
    const queue = [];
    const addQueue = (index) => {
        if (queue.length && queue[0] === index - k) {
            queue.shift();
        }
        
        while(queue.length && nums[index] > nums[queue[queue.length - 1]]) {
            queue.pop();
        }
        
        queue.push(index);
    }
    
    const result = [];
    for(let i = 0; i < k; i++) {
        addQueue(i);
    }
    result.push(nums[queue[0]]);
    
    for(let i = k; i < nums.length; i++) {
        addQueue(i);
        result.push(nums[queue[0]]);
    }
    
    return result;
};