/**
 * MEDIUM
 * https://leetcode.com/problems/maximum-number-of-removable-characters/
 * @param {string} s
 * @param {string} p
 * @param {number[]} removable
 * @return {number}
 */
var maximumRemovals = function (s, p, removable) {
  let removed = new Set();

  const isSubseq = (s, subseq) => {
    let i1 = 0;
    let i2 = 0;

    while (i1 < s.length && i2 < subseq.length) {
      if (removed.has(i1) || s[i1] !== subseq[i2]) {
        i1 += 1;
        continue;
      }

      i1 += 1;
      i2 += 1;
    }

    return i2 === subseq.length;
  };

  let result = 0;
  let left = 0;
  let right = removable.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    removed = new Set(removable.slice(0, mid + 1));
    if (isSubseq(s, p)) {
      result = Math.max(result, mid + 1);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
};
