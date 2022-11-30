/**
 * EASY
 * https://leetcode.com/problems/capitalize-the-title/
 * @param {string} title
 * @return {string}
 */
 var capitalizeTitle = function(title) {
    let result = "";
    
    const words = title.split(" ");
    
    for(const word of words) {
        if (word.length <= 2) {
            result += " " + word.toLowerCase();
            continue;
        }
        
        let temp = "";
        for(let i = 0; i < word.length; i++) {
            if (i === 0) temp += word[i].toUpperCase();
            else temp += word[i].toLowerCase();
        }
        
        result += " " + temp;
    }
    
    return result.trim();
};