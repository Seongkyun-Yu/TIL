/**
 * https://leetcode.com/problems/maximum-subarray-min-product/
 * @param {number[]} nums
 * @return {number}
 */
var maxSumMinProduct = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = BigInt(nums[i]);

    let left = i - 1;
    while (nums[left] >= nums[i]) {
      sum += BigInt(nums[left]);
      left--;
    }

    let right = i + 1;
    while (nums[right] >= nums[i]) {
      sum += BigInt(nums[right]);
      right++;
    }

    const minProduct = BigInt(nums[i]) * sum;
    if (max < minProduct) max = minProduct;
  }

  return Number(max % BigInt(10 ** 9 + 7));
};
