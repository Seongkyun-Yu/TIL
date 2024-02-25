/**
 * MEDIUM
 * https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/description/
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += cardPoints[i];
  }
  let max = sum;

  let left = 0;
  let right = k - 1;
  while (left !== -k) {
    left--;

    const leftIdx = left < 0 ? left + cardPoints.length : left;
    const rightIdx = right < 0 ? right + cardPoints.length : right;

    sum = sum + cardPoints[leftIdx] - cardPoints[rightIdx];

    max = Math.max(sum, max);

    right--;
  }

  return max;
};
