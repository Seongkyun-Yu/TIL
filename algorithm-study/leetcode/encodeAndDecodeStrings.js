/**
 * MEDIUM
 * https://leetcode.com/problems/encode-and-decode-strings/
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */
var encode = function (strs) {
  let result = '';

  for (const s of strs) {
    result += s.length + '#' + s;
  }

  return result;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
  const result = [];

  let i = 0;
  while (i < s.length) {
    let j = i;

    while (s[j] !== '#') j++;

    const len = +s.slice(i, j);

    result.push(s.slice(j + 1, j + 1 + len));
    i = j + 1 + len;
  }

  return result;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */
