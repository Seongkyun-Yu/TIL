/**
 * EASY
 * https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
var kWeakestRows = function (mat, k) {
  const weaks = [];
  for (let i = 0; i < mat.length; i++) {
    const row = mat[i];
    for (const item of row) {
      if (weaks[i]) weaks[i].value = weaks[i].value + item;
      else weaks[i] = { key: i, value: item };
    }
  }

  return weaks
    .sort((a, b) => a.value - b.value)
    .map((item) => +item.key)
    .slice(0, k);
};
