/**
 * https://leetcode.com/problems/keyboard-row/submissions/
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function(words) {
    const row1 = new Set([..."qwertyuiop"]);
    const row2 = new Set([..."asdfghjkl"]);
    const row3 = new Set([..."zxcvbnm"]);
    
    const result = [];
    
    for(let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();
        const chars = [...(new Set([...word]))];
        
        let needRow;
        if (row1.has(chars[0])) needRow = row1;
        else if (row2.has(chars[0])) needRow = row2;
        else needRow = row3;

        for(let j = 0; j < chars.length; j++) {
            if (!needRow.has(chars[j])) break;
            if (j === chars.length - 1) result.push(words[i]);
        }
    }
    
    return result;
};

console.log(findWords(["Hello","Alaska","Dad","Peace"]))