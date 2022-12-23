/**
 * HARD
 * https://leetcode.com/problems/minimum-window-substring/
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
  if (t.length > s.length) return '';
  if (t === '') return '';

  const countT = {};
  for (c of t) {
    countT[c] = countT[c] + 1 || 1;
  }

  let have = 0;
  let need = Object.keys(countT).length;

  let result = [];
  let minLen = Infinity;

  const window = {};
  let l = 0;
  for (let r = 0; r < s.length; r++) {
    const c = s[r];
    window[c] = window[c] + 1 || 1;

    if (countT[c] && countT[c] === window[c]) have++;

    while (have === need) {
      if (r - l + 1 < minLen) {
        result = [l, r];
        minLen = r - l + 1;
      }

      window[s[l]] = window[s[l]] - 1 || 0;

      if (countT[s[l]] && window[s[l]] < countT[s[l]]) {
        have--;
      }

      l++;
    }
  }

  [l, r] = result;

  return minLen === Infinity ? '' : s.slice(l, r + 1);
};
