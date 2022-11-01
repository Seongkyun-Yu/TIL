/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    let first;
    let second;
    
    while (stones.length > 1) {
        first = Math.max(...stones);
        stones.splice(stones.indexOf(first), 1);
        
        second = Math.max(...stones);
        stones.splice(stones.indexOf(second), 1);
        
        if (first !== second) stones.push(Math.abs(first - second));       
    }
    
    return stones[0] || 0;
};

/**
 * https://leetcode.com/problems/last-stone-weight/
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
    const maxHeap = new MaxPriorityQueue({ compare: (a, b) => b - a });
    for(const stone of stones) {
        maxHeap.enqueue(stone);
    }
    
    while(maxHeap.size() > 1) {
        const stone1 = maxHeap.dequeue();
        const stone2 = maxHeap.dequeue();
        
        maxHeap.enqueue(Math.abs(stone1 - stone2));
    }
    
    return maxHeap.dequeue();
};