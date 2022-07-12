/**
 * https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays/
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    const map = {};
    for(let i = 0; i < target.length; i++) {
        map[target[i]] = (map[target[i]] || 0) + 1;
    }
    
    for(let i = 0; i < arr.length; i++) {
        if (!map[arr[i]]) return false;
        map[arr[i]] -= 1;
    }
    
    return true;
};