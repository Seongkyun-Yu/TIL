/**
 * https://leetcode.com/problems/maximum-69-number/
 * @param {number} num
 * @return {number}
 */
 var maximum69Number  = function(num) {
    let result = "";
    let isChanged = false;
    for(const n of num + "") {
        if (isChanged || n === "9") result += n;
        else {
            result += "9";
            isChanged = true;
        }
    }
    
    return +result;
};