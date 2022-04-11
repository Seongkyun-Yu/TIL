/**
 * https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    let res = [];
    
    for(let i = 0; i < s.length; i++){
        if(s[i] !== res[res.length - 1]) res.push(s[i]);
        else res.pop();
    }
    
    return res.join("");
};