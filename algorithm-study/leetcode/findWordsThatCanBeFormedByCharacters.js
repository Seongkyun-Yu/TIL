/**
 * https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function(words, chars) {
    let count = 0;
    
    const charsMap = {};
    for(const c of chars) {
        charsMap[c] = charsMap[c] + 1 || 1;
    }
    
    for(let i = 0; i < words.length; i++) {
        const map = { ...charsMap };
        
        const word = words[i];
        for(let j = 0; j < word.length; j++) {
            const c = word[j];
            map[c] = (map[c] || 0) - 1;
            
            if (map[c] < 0) break;
            else if (j === word.length - 1) count += word.length;
        }
    }
    
    return count;
};