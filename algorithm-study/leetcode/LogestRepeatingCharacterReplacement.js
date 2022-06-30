/**
 * https://leetcode.com/problems/longest-repeating-character-replacement/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
 var characterReplacement = function(s, k) {
    const charMap = {};
    let maxLength = 0;
    
    for(let i = 0, j = 0; j < s.length; j++) {
        charMap[s[j]] = charMap[s[j]] ? charMap[s[j]] + 1 : 1;
        
        const needChangeCount = j - i + 1 - Math.max(...Object.values(charMap));
        if (needChangeCount <= k) maxLength = Math.max(j - i + 1, maxLength);
        else {
            charMap[s[i]] = charMap[s[i]] - 1;
            i++;
        }
    }
    
    return maxLength;    
};