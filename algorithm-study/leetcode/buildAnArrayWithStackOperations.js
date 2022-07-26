/**
 * https://leetcode.com/problems/build-an-array-with-stack-operations/
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    const result = [];
    for (let i = 0, j = 1; i < target.length; ++i, ++j) {
        result.push('Push');
        
        if (target[i] !== j) {
            result.push('Pop');
            i--;
        }
    }
    
    return result;
};