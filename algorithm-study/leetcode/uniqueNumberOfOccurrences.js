/**
 * https://leetcode.com/problems/unique-number-of-occurrences/
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    const map = {};
    for(const num of arr) {
        map[num] = map[num] + 1 || 1;
    }
    
    const set = new Set();
    for (const key in map) {
        if (set.has(map[key])) return false;
        set.add(map[key]);
    }
    
    return true;
};