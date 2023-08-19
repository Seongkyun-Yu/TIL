/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const s1Count = {};
  for (const c of s1) {
    s1Count[c] = s1Count[c] + 1 || 1;
  }

  const s2Count = {};
  for (let i = 0; i < s1.length; i++) {
    s2Count[s2[i]] = s2Count[s2[i]] + 1 || 1;
  }

  for (let i = s1.length; i <= s2.length; i++) {
    for (let j = 0; j < s1.length; j++) {
      if (s1Count[s1[j]] === s2Count[s1[j]]) {
        if (j === s1.length - 1) return true;
        continue;
      }
      break;
    }

    s2Count[s2[i - s1.length]] = s2Count[s2[i - s1.length]] - 1;
    s2Count[s2[i]] = s2Count[s2[i]] + 1 || 1;
  }

  return false;
};
