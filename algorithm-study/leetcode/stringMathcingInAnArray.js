/**
 * https://leetcode.com/problems/string-matching-in-an-array/
 * @param {string[]} words
 * @return {string[]}
 */
 var stringMatching = function(words) {
    const result = new Set();
    
    for(let i = 0; i < words.length; i++) {
        for(let j = i + 1; j < words.length; j++) {
            if (words[i].length > words[j].length) {
                if (words[i].includes(words[j])) result.add(words[j])
            }
            else {
                if (words[j].includes(words[i])) result.add(words[i]);
            }
        }
    }
    
    return [...result];
};