/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isOneEditDistance = function (s, t) {
  if (Math.abs(s.length - t.length) > 1) return false;

  const [long, short] = s.length >= t.length ? [s, t] : [t, s];

  if (short.length === long.length) {
    let diffCount = 0;
    for (let i = 0; i < short.length; i++) {
      if (short[i] === long[i]) continue;
      if (diffCount) return false;

      diffCount++;
    }

    return diffCount === 1;
  }

  let i = 0;
  let j = 0;
  for (; j < long.length; i++, j++) {
    if (short[i] !== long[j]) i--;
  }

  return j - i === 1;
};
