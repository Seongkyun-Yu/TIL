/**
 * MEDIUM
 * https://leetcode.com/problems/delete-and-earn/
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function (nums) {
  const max = Math.max(...nums);
  const sum = new Array(max + 1).fill(0);
  for (const num of nums) {
    sum[num] += num;
  }

  const dp = new Array(max).fill(0);
  dp[1] = 1 * sum[1];
  for (let i = 2; i <= max; i++) {
    dp[i] = Math.max(dp[i - 2] + sum[i], dp[i - 1]);
  }

  return dp[dp.length - 1];
};
