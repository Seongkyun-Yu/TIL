/**
 * EASY
 * https://leetcode.com/problems/min-max-game/
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function (nums) {
  if (nums.length === 1) return nums[0];

  const newArr = [];
  let count = 0;
  for (let i = 0; i < nums.length; i += 2) {
    if (count % 2) newArr.push(Math.max(nums[i], nums[i + 1]));
    else newArr.push(Math.min(nums[i], nums[i + 1]));
    count++;
  }

  return minMaxGame(newArr);
};
