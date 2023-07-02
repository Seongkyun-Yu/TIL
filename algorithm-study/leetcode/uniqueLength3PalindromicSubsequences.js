/**
 * MEDIUM
 * https://leetcode.com/problems/unique-length-3-palindromic-subsequences/
 * @param {string} s
 * @return {number}
 */
var countPalindromicSubsequence = function (s) {
  const result = new Set();

  const checkPalindrome = (arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
      if (arr[left] !== arr[right]) return false;
      left++;
      right--;
    }

    return true;
  };

  const dfs = (idx, acc) => {
    if (acc.length === 3) {
      if (checkPalindrome(acc)) {
        result.add(acc.join(''));
      }
      return;
    }

    for (let i = idx; i < s.length; i++) {
      acc.push(s[i]);
      dfs(i + 1, acc);
      acc.pop();
    }
  };

  dfs(0, []);

  return result.size;
};
