/**
 * MEDIUM
 * https://leetcode.com/problems/jump-game-vii/
 * @param {string} s
 * @param {number} minJump
 * @param {number} maxJump
 * @return {boolean}
 */
var canReach = function (s, minJump, maxJump) {
  if (s.length === 1) return true;
  if (s[s.length - 1] === '1') return false;

  const queue = [0];
  let max = 0;
  const cache = {};
  while (queue.length) {
    const idx = queue.shift();
    const start = Math.max(idx + minJump, max + 1);
    const end = Math.min(s.length - 1, idx + maxJump);

    for (let i = start; i <= end; i++) {
      if (s[i] === '1') continue;
      if (cache[i]) continue;
      if (i === s.length - 1) return true;

      queue.push(i);
      cache[i] = true;
      max = Math.max(max, idx + maxJump);
    }
  }

  return false;
};
