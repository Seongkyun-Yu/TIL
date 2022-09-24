/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    const dp = new Array(nums.length).fill(0);
    for(let i = 0; i < nums.length; i++){
        let max = 1;
        for(let j = 0; j < i; j++) {
            if (nums[i] > nums[j])  max = Math.max(max, dp[j] + 1);
        }
        dp[i] = max;
    }
    return Math.max(...dp);
};

console.log(lengthOfLIS([0,1,0,3,2,3]));