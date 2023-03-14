/**
 * MEDIUM
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const result = [];

  const pCount = {};
  for (const c of p) {
    pCount[c] = pCount[c] + 1 || 1;
  }

  const sCount = {};
  for (let j = 0; j < p.length; j++) {
    sCount[s[j]] = sCount[s[j]] + 1 || 1;
  }

  let notFullLoop = false;
  for (const c in sCount) {
    if (pCount[c] !== sCount[c]) {
      notFullLoop = true;
      break;
    }
  }
  if (!notFullLoop) result.push(0);

  for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = sCount[s[i]] >= 1 ? sCount[s[i]] - 1 : 0;
    sCount[s[i + p.length]] = sCount[s[i + p.length]] + 1 || 1;

    notFullLoop = false;
    for (const c in sCount) {
      if (!sCount[c]) continue;
      if (pCount[c] !== sCount[c]) {
        notFullLoop = true;
        break;
      }
    }
    if (!notFullLoop) result.push(i + 1);
  }
  return result;
};
