/**
 * https://leetcode.com/problems/shortest-distance-to-a-character/submissions/
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
 var shortestToChar = function(s, c) {
    const charKeys = {};
    const distList = [];
    
    for (let i = 0; i < s.length; i++) {
        if (charKeys[s[i]] === undefined) charKeys[s[i]] = [i];
        else charKeys[s[i]].push(i);
    }
    
    const indexList = charKeys[c];
    
    for (let i = 0; i < s.length; i++) {
        let min = Infinity;
        
        for (let j = 0; j < indexList.length; j++) {
            min = min > Math.abs(i - indexList[j]) ? Math.abs(i - indexList[j]) : min;
        }
        
        distList.push(min);
    }
    
    return distList;
};