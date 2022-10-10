/**
 * https://leetcode.com/problems/subsets-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsetsWithDup = function(nums) {
    const subSets = [];
    
    nums.sort((a, b) => a - b);
    
    const dfs = (arr, index) => {
        if (index === nums.length) return subSets.push([...arr]);
        
        arr.push(nums[index]);
        dfs(arr, index + 1);
        arr.pop();
        
        while(index + 1 < nums.length && nums[index] === nums[index + 1]) {
            index++;
        }
        
        dfs(arr, index + 1);
    };
    
    dfs([], 0);
    
    return subSets;
};