/**
 * MEDIUM
 * https://leetcode.com/problems/partition-equal-subset-sum/
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
  const acc = nums.reduce((acc, cur) => acc + cur, 0);
  if (acc % 2) return false;

  let dp = new Set();
  dp.add(0);
  const target = acc / 2;

  for (let i = nums.length - 1; i >= 0; i--) {
    const newDp = new Set();
    for (n of dp) {
      newDp.add(n + nums[i]);
      newDp.add(n);
    }
    dp = newDp;
  }

  return dp.has(target);
};
