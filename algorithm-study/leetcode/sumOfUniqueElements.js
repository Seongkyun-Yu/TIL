/**
 * https://leetcode.com/problems/sum-of-unique-elements/
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    const map = {};
    let uniqueSum = 0;
    
    for(let i = 0; i < nums.length; i++) {
        map[nums[i]] = (map[nums[i]] || 0) + 1;
    }

    for(const key in map) {
        if (map[key] === 1) uniqueSum += Number(key);
    }
    
    return uniqueSum;
};