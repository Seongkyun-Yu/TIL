/**
 * https://leetcode.com/problems/find-lucky-integer-in-an-array/
 * @param {number[]} arr
 * @return {number}
 */
 var findLucky = function(arr) {
    const count = {};
    const results = [];
    
    for(let i = 0; i < arr.length; i++) {
        count[arr[i]] = count[arr[i]] + 1 || 1;
    }
    
    for(const key in count) {
        if (+key === count[key]) results.push(count[key]);
    }
    
    return results.length ? Math.max(...results) : -1;
};