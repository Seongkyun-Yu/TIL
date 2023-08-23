/**
 * EASY
 * https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/
 * @param {number[]} nums
 * @return {number}
 */
var differenceOfSum = function (nums) {
  const elementSum = nums.reduce((acc, num) => acc + num, 0);
  const digitSum = nums.reduce((acc, num) => {
    while (num > 0) {
      const digit = num % 10;
      acc += digit;
      num = Math.floor(num / 10);
    }
    return acc;
  }, 0);

  return Math.abs(elementSum - digitSum);
};
