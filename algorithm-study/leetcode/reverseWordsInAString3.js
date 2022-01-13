/**
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    const strings = s.split(" ");
    
    return strings.reduce((acc, cur) => {
        return acc + [...cur].reverse().join('') + ' ';
    }, '').trim();
};