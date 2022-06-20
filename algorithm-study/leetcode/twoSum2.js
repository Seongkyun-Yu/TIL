/**
 * https://leetcode.com/problems/two-sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};

var twoSum2 = function(nums, target) {
    const hash = {};
    
    let temp = 0;
    for(let i = 0; i < nums.length; i++) {
        temp = target - nums[i];
        if (hash[temp] !== undefined) return [i, hash[temp]];
        
        hash[nums[i]] = i;
    }
};