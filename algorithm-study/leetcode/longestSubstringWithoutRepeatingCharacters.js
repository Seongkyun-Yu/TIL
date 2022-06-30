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

/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring2 = function(s) {
    if (s.length === 0) return 0;
    
    const chars = new Set();
    let maxLength = 0;
    for(let i = 0, j = 0; j < s.length; j++) {
       while(chars.has(s[j])) {
           chars.delete(s[i]);
           i++;
       }
        chars.add(s[j])
        maxLength = Math.max(j - i + 1, maxLength);
    };
    
    return maxLength;
};