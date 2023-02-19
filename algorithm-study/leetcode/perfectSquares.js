/**
 * MEDIUM
 * https://leetcode.com/problems/perfect-squares/
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const dp = [];

  for (let i = 1; i <= n; i++) {
    if (Math.sqrt(i) % 1 === 0) {
      dp[i] = 1;
      continue;
    }

    let min = Infinity;
    let left = 1;
    let right = i - 1;
    while (left <= right) {
      min = Math.min(min, dp[left] + dp[right]);
      left++;
      right--;
    }

    dp[i] = min;
  }

  return dp[n];
};
