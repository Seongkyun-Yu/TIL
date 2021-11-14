/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    const resultArr = [];
    let sNum = 0;
    let row = 0;
    
    for (let i = 0; i < numRows; i++){
        resultArr.push([]);
    }
    
    while(sNum < s.length){
        for (; row < numRows; row++, sNum++) {
            console.log(resultArr[row], row)
            resultArr[row].push(s[sNum]);
        }
        row = row-2;

        for (; row > 0; row--, sNum++) {
            resultArr[row].push(s[sNum]);
        }       
    }
    
    let result = "";
    for (let i = 0; i < resultArr.length; i++) {
        result += resultArr[i].join("")
    }
    
    return result;
};