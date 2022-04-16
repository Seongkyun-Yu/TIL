/**
 * https://leetcode.com/problems/sorting-the-sentence/
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    const strings = s.split(" ");
    let result = [];
    
    for(let i = 0; i < strings.length; i++) {
        const index = +strings[i][strings[i].length - 1];
        result[index] = strings[i].slice(0, -1);
    }
    
    return result.join(" ").trim();
};