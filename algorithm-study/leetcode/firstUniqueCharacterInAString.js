/**
 * https://leetcode.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
    const chars = {}
    
    for (let i = 0; i < s.length; i++) {
        if (chars[s[i]]?.count) chars[s[i]].count += 1;
        else chars[s[i]] = {
            index: i,
            count: 1
        };
    }
    
    for (let key in chars) {
        if (chars[key].count === 1) return chars[key].index;
    }
    
    return -1
};