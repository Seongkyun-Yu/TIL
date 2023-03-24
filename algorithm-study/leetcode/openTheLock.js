/**
 * MEDIUM
 * https://leetcode.com/problems/open-the-lock/
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const deads = new Set(deadends);
  const queue = [[0, 0, 0, 0]];
  const visit = {};
  let count = 0;

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const nums = queue.shift();
      const str = nums.join('');

      if (deads.has(str)) continue;
      if (visit[str]) continue;
      if (target === str) return count;

      for (let i = 0; i < 4; i++) {
        const origin = nums[i];
        nums[i] = (nums[i] + 1) % 10;
        queue.push([...nums]);
        nums[i] = origin;

        nums[i] = nums[i] - 1 < 0 ? nums[i] - 1 + 10 : nums[i] - 1;
        queue.push([...nums]);
        nums[i] = origin;
      }

      visit[str] = true;
    }

    count++;
  }

  return -1;
};
