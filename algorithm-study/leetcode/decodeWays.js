/**
 * MEDIUM
 * https://leetcode.com/problems/decode-ways/
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const cache = {};
  const dfs = (idx) => {
    if (cache[idx]) return cache[idx];
    if (s[idx] === '0') return 0;
    if (idx === s.length) return 1;
    if (idx === s.length - 1) return 1;

    let res = dfs(idx + 1);
    if (Number(s[idx] + s[idx + 1]) <= 26) {
      res += dfs(idx + 2);
    }

    cache[idx] = res;

    return res;
  };

  return dfs(0);
};
