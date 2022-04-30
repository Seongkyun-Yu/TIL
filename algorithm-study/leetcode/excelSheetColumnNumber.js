/**
 * https://leetcode.com/problems/excel-sheet-column-number/
 * @param {string} columnTitle
 * @return {number}
 */
 var titleToNumber = function(columnTitle) {
    const strList = [...columnTitle].reverse();
    let num = 0;
    
    for(let i = 0; i < strList.length; i++) {
        num += (strList[i].charCodeAt(0) - 64) * Math.pow(26, i);
    }
    
    return num;
};