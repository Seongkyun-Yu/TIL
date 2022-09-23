/**
 * @param {number[]} nums
 * @return {number}
 */
 var maximumDifference = function(nums) {
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            const diff = nums[j] - nums[i];
            if(nums[j] > nums[i])max = Math.max(max, diff);
        }
    }
    
    return max === -Infinity ? -1 : max;
};