/**
 * https://leetcode.com/problems/reformat-the-string/
 * @param {string} s
 * @return {string}
 */
 var reformat = function(s) {
    if (s.length === 1) return s;
    
    const nums = [];
    const chars = [];
    for(const c of s) {
        if (isNaN(Number(c))) chars.push(c);
        else nums.push(c);
    }
    
    if (Math.abs(nums.length - chars.length) > 1) return "";
    if (nums.length === 0 || chars.length === 0) return "";
    
    let str = "";
    while(nums.length || chars.length) {
        if (chars.length > nums.length){
            if (chars.length) str += chars.shift();
            if (nums.length) str += nums.shift();
        } else {
            if (nums.length) str += nums.shift();
            if (chars.length) str += chars.shift();
        }
    }
    
    return str;
};