/**
 * EASY
 * https://leetcode.com/problems/minimize-string-length/
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
  return new Set([...s]).size;
};
