/**
 * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    let result = "";
    for(let i = 0; i < s.length; i++) {
        if (s[i + 2] === "#") {
            let temp = s[i] + s[i + 1];
            result += String.fromCharCode(+temp + 96);
            i += 2;           
        } else result += String.fromCharCode(+s[i] + 96);
    }
    
    return result;
};