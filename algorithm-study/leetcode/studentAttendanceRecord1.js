/**
 * https://leetcode.com/problems/student-attendance-record-i/
 * @param {string} s
 * @return {boolean}
 */
 var checkRecord = function(s) {
    let absent = 0;
    let late = 0;
    
    for(let i = 0; i < s.length; i++) {
        if (s[i] === "P") continue;
        if (s[i] === "L") {
            if (s[i - 1] !== "L") late = 0;
            late++;
            if (late > 2) return false;
        }
        if (s[i] === "A") {
            absent++;
            if (absent > 1) return false;
        }
    }
    
    return true;
};