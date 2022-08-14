/**
 * https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence
 * @param {string} sentence
 * @param {string} searchWord
 * @return {number}
 */
 var isPrefixOfWord = function(sentence, searchWord) {
    const strList = sentence.split(" ");
    
    for(let i = 0 ; i < strList.length; i++) {
        const result = strList[i].indexOf(searchWord)
        if (result === 0) return i + 1;
    }
    
    return -1;
};