/**
 * EASY
 * https://leetcode.com/problems/find-the-k-beauty-of-a-number/
 * @param {number} num
 * @param {number} k
 * @return {number}
 */
var divisorSubstrings = function (num, k) {
  let count = 0;
  const numStr = String(num);

  for (let i = 0; i < numStr.length; i++) {
    let str = '';
    for (let j = i; j < i + k; j++) {
      str += numStr[j];
    }

    if (num % +str === 0) count++;
  }

  return count;
};
