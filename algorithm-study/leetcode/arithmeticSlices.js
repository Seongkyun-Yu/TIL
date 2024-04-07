/**
 * MEDIUM
 * https://leetcode.com/problems/arithmetic-slices/
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  if (nums.length < 3) return 0;

  let window = [];
  let count = 0;
  let successCount = 0;

  for (const num of nums) {
    if (window.length < 2) {
      window.push(num);
      continue;
    }

    window.push(num);
    const diff = window[1] - window[0];
    if (diff !== window[2] - window[1]) {
      window.shift();
      successCount = 0;
      continue;
    }

    successCount++;

    count += successCount;
    window.shift();
  }

  return count;
};
