/**
 * EASY
 * https://leetcode.com/problems/increasing-decreasing-string/
 * @param {string} s
 * @return {string}
 */
var sortString = function (s) {
  let total = 0;
  const counter = {};
  for (const c of s) {
    counter[c] = counter[c] + 1 || 1;
    total++;
  }

  let result = '';
  const chars = Object.keys(counter).sort();
  while (total) {
    for (let i = 0; i < chars.length; i++) {
      if (!counter[chars[i]]) continue;
      result += chars[i];
      counter[chars[i]]--;
      total--;
    }
    for (let i = chars.length - 1; i >= 0; i--) {
      if (!counter[chars[i]]) continue;
      result += chars[i];
      counter[chars[i]]--;
      total--;
    }
  }

  return result;
};
