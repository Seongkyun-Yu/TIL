/**
 * https://leetcode.com/problems/reverse-prefix-of-word/
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    let result = "";
    const chIndex = [...word].indexOf(ch);
    
    for(let i = 0; i < word.length; i++) {
        result += word[i];        
        if (chIndex === i) result = [...result].reverse().join(''); 
    }
    
    return result;
};