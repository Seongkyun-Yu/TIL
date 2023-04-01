/**
 * HARD
 * https://leetcode.com/problems/split-array-largest-sum/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var splitArray = function (nums, k) {
  const canSplit = (largest) => {
    let subarray = 0;
    let curSum = 0;

    for (const num of nums) {
      curSum += num;

      if (curSum > largest) {
        subarray += 1;
        curSum = num;
      }
    }

    return subarray + 1 <= k;
  };

  let left = Math.max(...nums);
  let right = nums.reduce((acc, cur) => acc + cur, 0);
  let result = right;
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (canSplit(mid)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return result;
};
