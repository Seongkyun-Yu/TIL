/**
 * https://leetcode.com/problems/koko-eating-bananas/
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let min = 1;
    let max = Math.max(...piles);
    let result = Infinity;
    
    while(min <= max) {
        const mid = Math.floor((min + max) / 2);
        
        let count = 0;
        for(let i = 0; i < piles.length; i++) {
            count += Math.ceil(piles[i] / mid);
        }
        
        if (count <= h) result = Math.min(mid, result);
        
        if (count <= h) max = mid - 1;
        else min = mid + 1;
    }
    
    return result;
};