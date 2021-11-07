/**
 * @param {number} numRows
 * @return {number[][]}
 */
 var generate = function(numRows) {
    const triangle = [[1]];
    
    for (let i = 1; i < numRows; i++) {
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
            newData.push(triangle[i - 1][j - 1] + triangle[i - 1][j]);            
        }
        triangle.push(newData);
    }
    
    return triangle;
};