/**
 * https://leetcode.com/problems/number-of-different-integers-in-a-string/
 * @param {string} word
 * @return {number}
 */
 var numDifferentIntegers = function(word) {
    const set = new Set();
    let cache = "";
    for(const c of word) {
        if (!Number.isNaN(+c)) cache += c;
        else {
            if (!cache.length) continue;
            set.add(BigInt(cache));
            cache = "";
        }
    }
    
    if (cache.length) set.add(BigInt(cache))
    
    return set.size;
};