/**
 * MEDIUM
 * https://leetcode.com/problems/repeated-dna-sequences/
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const cache = new Set();
  const result = new Set();

  for (let i = 0; i < s.length - 9; i++) {
    let cur = s.slice(i, i + 10);

    if (cache.has(cur)) result.add(cur);

    cache.add(cur);
  }

  return [...result];
};
