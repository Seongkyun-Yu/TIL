/**
 * EASY
 * https://leetcode.com/problems/min-cost-climbing-stairs/
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  const minCost = [cost[0], cost[1]];

  for (let i = 2; i < cost.length; i++) {
    minCost[i] = Math.min(minCost[i - 1], minCost[i - 2]) + cost[i];
  }

  const lastIdx = minCost.length - 1;

  return Math.min(minCost[lastIdx], minCost[lastIdx - 1]);
};
