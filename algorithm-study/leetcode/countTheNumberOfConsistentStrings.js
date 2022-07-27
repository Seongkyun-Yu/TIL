/**
 * https://leetcode.com/problems/count-the-number-of-consistent-strings/
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
 var countConsistentStrings = function(allowed, words) {
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i]

        for (let j = 0; j < word.length; j++) {
          const char = word[j];

          if (!allowed.includes(char)) break;
          if (j === word.length - 1) count++;
        }
    }

    return count;
};