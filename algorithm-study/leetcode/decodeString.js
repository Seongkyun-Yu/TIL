/**
 * https://leetcode.com/problems/decode-string/
 * @param {string} s
 * @return {string}
 */
 var decodeString = function(s) {
    let num = "0";
    let str = "";
    let result = "";
    
    for(let i = 0; i < s.length; i++) {
        if (+s[i]) num += s[i];
        else if (s[i] === "[") continue;
        else if (s[i] === "]") {
            num = +num;
            for(let j = 0; j < num; j++) {
                result += str;
            }
            
            num = "0";
            str = "";
        } else {
            str += s[i];
        }
    }
    
    return result;
};