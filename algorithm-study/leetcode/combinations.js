/**
 * https://leetcode.com/problems/combinations/
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
 var combine = function(n, k) {
    const result = [];
    
    const makeCombi = (combi, startNum) => {
        if (combi.length === k) {
            result.push(combi);
            return;
        }
        
        for(let i = startNum; i <= n; i++) {
            makeCombi([...combi, i], i + 1);
        }
    };
    
    makeCombi([], 1);
    
    return result;
};