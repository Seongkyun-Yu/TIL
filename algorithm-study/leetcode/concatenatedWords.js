/**
 * https://leetcode.com/problems/concatenated-words/
 * @param {string[]} words
 * @return {string[]}
 */
 var findAllConcatenatedWordsInADict = function(words) {
    const wordsSet = new Set(words);
    const cache = {};
    const result = [];
    
    let minLen = Infinity;
    for(const word of words) {
        if (word.length < minLen) minLen = word.length;
    }
    
    const check = (word) => {
        if (cache[word] === true || cache[word] === false) {
            return cache[word];
        }
        
        for(let i = minLen; i < word.length; i++) {            
            const front = word.slice(0, i);
            const back = word.slice(i);
                        
            if (wordsSet.has(front) && wordsSet.has(back)) {
                cache[word] = true;
                return true;
            }
            
            if (wordsSet.has(front) && check(back)) {
                cache[word] = true;
                cache[back] = true;
                return true;
            }
        }
        
        cache[word] = false;
        return false;
    }
    
    for(const word of wordsSet) {
        if (check(word)) result.push(word);
    }
    
    return result;
};