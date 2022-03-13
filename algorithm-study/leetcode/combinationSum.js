/**
 * https://leetcode.com/problems/combination-sum/
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
    const combinations = [];
    const keys = {};
    
    const makeCombi = (nums, sum) => {
        if (sum > target) return;
        const key = nums.sort().join('');
        if (sum === target && !keys[key]) {
            combinations.push(nums);
            keys[key] = true;
            return;
        }
        
        for (const candidate of candidates) {
            makeCombi([...nums, candidate], sum + candidate);
        }
        
    }
    
    for (const candidate of candidates) {
        makeCombi([candidate], candidate);
    }
    
    return combinations;
};