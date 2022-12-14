/**
 * MEDIUM
 * https://leetcode.com/problems/jump-game/description/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let goal = nums.length - 1;

  for (let i = goal - 1; i >= 0; i--) {
    if (i + nums[i] >= goal) goal = i;
  }

  return goal === 0;
};
