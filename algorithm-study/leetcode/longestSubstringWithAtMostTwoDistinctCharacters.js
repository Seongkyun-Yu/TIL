/**
 * MEDIUM
 * https://leetcode.com/problems/longest-substring-with-at-most-two-distinct-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function (s) {
  if (s.length === 1) return 1;
  if (s.length === 2) return 2;

  const cache = {};
  cache[`${s[0]}`] = 1;

  let max = 2;

  let i = 0;
  let j = 0;
  while (j < s.length) {
    cache[s[j]] = j;
    j += 1;

    if (Object.keys(cache).length === 3) {
      const idx = Math.min(...Object.values(cache));
      delete cache[s[idx]];
      i = idx + 1;
    }

    max = Math.max(max, j - i);
  }

  return max;
};
