/**
 * https://leetcode.com/problems/freedom-trail/
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
 const findMinStep = (ring, key, index, map) => {
    if (index === key.length) return 0;
    
    const c = key[index];
    const hash = ring + index;
    
    if (map[hash]) return map[hash];
    
    let minSteps = Infinity;
    for(let i = 0; i < ring.length; i++) {
        if (ring[i] !== c) continue;
        
        
        let steps = 1 + Math.min(i, ring.length - i);
        const reorderedString = ring.slice(i, ring.length) + ring.slice(0, i);
        steps += findMinStep(reorderedString, key, index + 1, map);
        
        minSteps = Math.min(minSteps, steps);
    }
    
    map[hash] = minSteps;
    
    return minSteps;
}

var findRotateSteps = function(ring, key) {
    const map = {};
    
    return findMinStep(ring, key, 0, map);
};