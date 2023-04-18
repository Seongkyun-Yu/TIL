/**
 * MEDIUM
 * https://leetcode.com/problems/combination-sum-iv/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function (nums, target) {
  const dp = [1];

  for (let i = 1; i <= target; i++) {
    dp[i] = 0;
    for (const num of nums) {
      dp[i] += dp[i - num] || 0;
    }
  }

  return dp[target];
};
