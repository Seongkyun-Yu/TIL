/**
 * https://leetcode.com/problems/most-common-word/submissions/
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
 var mostCommonWord = function(paragraph, banned) {
    const strings = paragraph.toLowerCase().split(/\W+/g);
    
    const bannedObj = {}
    banned.forEach((str) => bannedObj[str] = true);
    
    let maxCount = -Infinity;
    let maxStr = "";
    const hash = {};
    for (let i = 0; i < strings.length; i++) {
        if (bannedObj[strings[i]]) continue;

        hash[strings[i]] = hash[strings[i]] ? hash[strings[i]] + 1 : 1;
        
        if (hash[strings[i]] > maxCount) {
            maxCount = hash[strings[i]];
            maxStr = strings[i];
        }
    }
    
    return maxStr;
};