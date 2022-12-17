/**
 * MEDIUM
 * https://leetcode.com/problems/jump-game-ii/
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  const visited = {};

  const queue = [[0, nums[0]]];
  let level = 0;
  while (queue.length) {
    level++;
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [index, step] = queue.shift();

      for (let i = 1; i <= step; i++) {
        if (index + i === nums.length - 1) return level;
        if (visited[index + i]) continue;
        visited[index + i] = true;
        queue.push([index + i, nums[index + i]]);
      }
    }
  }
};
