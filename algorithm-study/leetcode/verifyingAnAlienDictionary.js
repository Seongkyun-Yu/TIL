/**
 * EASY
 * https://leetcode.com/problems/verifying-an-alien-dictionary/
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const orderInd = new Map();
  let ind = 0;
  for (const c of order) {
    orderInd.set(c, ind++);
  }

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];

    for (let j = 0; j < w1.length; j++) {
      if (j == w2.length) return false;

      if (w1.charAt(j) != w2.charAt(j))
        if (orderInd.get(w2.charAt(j)) < orderInd.get(w1.charAt(j)))
          return false;
        else break;
    }
  }
  return true;
};
