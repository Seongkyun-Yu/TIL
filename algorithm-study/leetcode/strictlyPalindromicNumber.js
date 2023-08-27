/**
 * MEDIUM
 * https://leetcode.com/problems/strictly-palindromic-number/
 * @param {number} n
 * @return {boolean}
 */
var isStrictlyPalindromic = function (n) {
  for (let i = 2; i < n - 1; i++) {
    const s = n.toString(i);
    let left = 0;
    let right = s.length - 1;
    while (left <= right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
  }

  return true;
};
