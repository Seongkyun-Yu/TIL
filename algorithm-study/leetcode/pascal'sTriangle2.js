/**
 * @param {number} rowIndex
 * @return {number[]}
 */
 var getRow = function(rowIndex) {
    let result = [1];
    
    for (let i = 1; i < rowIndex + 1; i++) {
        const newData = [];
        
        for (let j = 0; j < i + 1; j++) {
            if (j === 0) { 
                newData.push(1);
                continue;
            }
            if (j === i) {
                newData.push(1);
                continue;
            }
            newData.push(result[j - 1] + result[j]);            
        }
        result = newData;
    }
    
    return result;
};