/**
 * https://leetcode.com/problems/maximum-number-of-balloons/
 * @param {string} text
 * @return {number}
 */
 var maxNumberOfBalloons = function(text) {
    const checkList = new Set(["b", "a", "l", "o", "n"]);
    const checkListObj = {
        "b": 0,
        "a": 0,
        "l": 0,
        "o": 0,
        "n": 0
    };
    let min = Infinity;
    
    for(let i = 0; i < text.length; i++) {
        if (checkList.has(text[i])) checkListObj[text[i]] = checkListObj[text[i]] + 1 || 1;
    }
    
    for(const key in checkListObj) {
        if (checkListObj[key] === 0) return 0;
        if (key === "l" || key === "o") {
            const count = Math.floor(checkListObj[key] / 2);
            if (count === 0) return 0;
            
            min = min > count ? count : min;
        }
        else min = min > checkListObj[key] ? checkListObj[key] : min;
    }
    
    return min;
};