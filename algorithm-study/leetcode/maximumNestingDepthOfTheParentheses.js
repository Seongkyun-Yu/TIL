/**
 * https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    let count = 0;
    let max = 0;
    
    for(const c of s) {
        if (c === "(") {
            count++;
            max = Math.max(max, count);
        } else if (c === ")") count--;
    }
    
    return max;
};