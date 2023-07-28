/**
 * EASY
 * https://leetcode.com/problems/diet-plan-performance/
 * @param {number[]} calories
 * @param {number} k
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var dietPlanPerformance = function (calories, k, lower, upper) {
  let sum = 0;
  let start = 0;
  let ans = 0;

  for (let i = 0; i < calories.length; i++) {
    sum += calories[i];
    if (i - start + 1 === k) {
      if (sum < lower) {
        ans -= 1;
      } else if (sum > upper) {
        ans += 1;
      }

      sum -= calories[start];

      start++;
    }
  }

  return ans;
};
