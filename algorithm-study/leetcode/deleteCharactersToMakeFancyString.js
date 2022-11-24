/**
 * https://leetcode.com/problems/delete-characters-to-make-fancy-string/
 * @param {string} s
 * @return {string}
 */
 var makeFancyString = function(s) {
    let fancyString = "";
    let prev;
    let count = 0;
    for(const c of s) {
        if (c === prev && count === 2) continue;
        if (prev !== c) count = 0;
        fancyString += c;
        prev = c;
        count++;
    }
    
    return fancyString;
};