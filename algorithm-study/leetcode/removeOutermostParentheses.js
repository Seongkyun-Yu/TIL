/**
 * https://leetcode.com/problems/remove-outermost-parentheses/
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
    let result = "";
    let temp = "";
    let count = null;
    
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") count = count + 1 || 1;
        else count--;
        
        temp += s[i];
        
        if (count === 0) {
            result += temp.slice(1, temp.length - 1);
            temp = "";
            count = null;
        }
    }
    
    return result;
};