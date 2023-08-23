/**
 * MEDIUM
 * https://leetcode.com/problems/number-of-zero-filled-subarrays/
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let result = 0;
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
      continue;
    } else if (zeroCount > 0 && nums[i] !== 0) {
      let sum = 0;
      for (let num = 1; num <= zeroCount; num++) {
        sum += num;
      }
      result += sum;
    }

    zeroCount = 0;
  }

  if (zeroCount > 0) {
    let sum = 0;
    for (let num = 1; num <= zeroCount; num++) {
      sum += num;
    }
    result += sum;
  }

  return result;
};
