/**
 * https://leetcode.com/problems/jewels-and-stones/
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
 var numJewelsInStones = function(jewels, stones) {
    const jewelsSet = new Set([...jewels]);
    let count = 0;
    
    for (let i = 0; i < stones.length; i++) {
        if (jewelsSet.has(stones[i])) count++;
    }
    
    return count;
};