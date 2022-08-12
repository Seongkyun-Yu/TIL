/**
 * https://leetcode.com/problems/matrix-diagonal-sum/
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    const row = mat.length;
    const col = mat[0].length;
    let sum = 0;
    const visited = new Set();
    
    for(let i = 0, j = 0; i < row && j < col; i++, j++) {
        if (visited.has(`${i}, ${j}`)) continue;
        sum += mat[i][j];
        visited.add(`${i}, ${j}`)
        
    }
    
    for(let i = row - 1, j = 0; i >=0 && j < col; i--, j++) {
        if (visited.has(`${i}, ${j}`)) continue;
        sum += mat[i][j];
        visited.add(`${i}, ${j}`)
    }
    
    return sum;
};