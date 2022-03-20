/**
 * https://leetcode.com/problems/subsets/
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
    const result = [[]];
    
    const makeSubsets = (arr, startIndex) => {
        if (startIndex > nums.length) return;
        
        for(let i = startIndex; i < nums.length; i++) {
            const newArr = [...arr, nums[i]];
            result.push(newArr);
            makeSubsets(newArr, i + 1);
        }
    }
        
    makeSubsets([], 0);
    
    return result;
};