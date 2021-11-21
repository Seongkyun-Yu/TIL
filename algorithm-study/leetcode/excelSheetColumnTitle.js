/**
 * https://leetcode.com/problems/excel-sheet-column-title/
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    let q = columnNumber;
    let r = 0;
    let result = "";
    
    while (q > 0) {
        r = q % 26;
        q = parseInt(q / 26);

        if (q === 0) break;
        
        if (r === 0) {
            result = String.fromCharCode(64 + 26) + result;
            q--;
        }
        else result = String.fromCharCode(64 + r) + result;
    }
    
    if (r !== 0) return String.fromCharCode(64 + r) + result;
    
    return result;
};