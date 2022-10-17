/**
 * https://leetcode.com/problems/combination-sum-ii/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
    const combinations = [];
    
    candidates.sort((a, b) => a - b);
    
    const makeCombi = (acc, start, combi) => {
        if (acc === target) return combinations.push(combi);
        
        for(let i = start; i < candidates.length; i++) {
            if (start < i && candidates[i] === candidates[i - 1]) continue;
            if (acc + candidates[i] > target) break;
            
            makeCombi(acc + candidates[i] , i + 1, [...combi, candidates[i]]);
        }
    }
    
    makeCombi(0, 0, [])
    
    return combinations;
};