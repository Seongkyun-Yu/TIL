/**
 * https://leetcode.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 var minDistance = function(word1, word2) {
    const cache = {};
    
    const getMinDistance = (i, j) => {
        if (i === word1.length && j === word2.length) return 0;
        if (i === word1.length) return word2.length - j;
        if (j === word2.length) return word1.length - i;
        if (cache[`${i}-${j}`]) return cache[`${i}-${j}`];
        
        if (word1[i] === word2[j]) return getMinDistance(i + 1, j + 1);
        const insertDistance = 1 + getMinDistance(i, j + 1);
        const deleteDistance = 1 + getMinDistance(i + 1, j);
        const replaceDistance = 1 + getMinDistance(i + 1, j + 1);
        
        const minDistance = Math.min(insertDistance, deleteDistance, replaceDistance);
        cache[`${i}-${j}`] = minDistance;
        return minDistance;
    }
    
    return getMinDistance(0, 0);
};