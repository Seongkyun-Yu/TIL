/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
    if (s.length === 0) return 0;

    let resultStr = "";
    let newStr = "";

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (newStr.includes(s[j])) {
                if (resultStr.length < newStr.length) resultStr = newStr; 
                break;
            }
            newStr += s[j];
            if (resultStr.length < newStr.length) resultStr = newStr; 
        }
        newStr = "";
    }
    
    return resultStr.length
};