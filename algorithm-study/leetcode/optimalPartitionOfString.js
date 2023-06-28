/**
 * MEDIUM
 * https://leetcode.com/problems/optimal-partition-of-string/
 * @param {string} s
 * @return {number}
 */
var partitionString = function (s) {
  let result = 1;

  let acc = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];

    if (!acc[c]) {
      acc[c] = true;
      continue;
    }

    result++;
    i--;
    acc = {};
    continue;
  }

  return result;
};
