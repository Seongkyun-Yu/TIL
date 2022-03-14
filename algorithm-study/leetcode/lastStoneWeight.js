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