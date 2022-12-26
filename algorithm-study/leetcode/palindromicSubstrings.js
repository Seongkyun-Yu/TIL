/**
 * MEDIUM
 * https://leetcode.com/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
  const countPalindromic = (l, r) => {
    let res = 0;
    while (l >= 0 && r < s.length && s[l] === s[r]) {
      res++;
      l--;
      r++;
    }

    return res;
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    result += countPalindromic(i, i);
    result += countPalindromic(i, i + 1);
  }

  return result;
};
