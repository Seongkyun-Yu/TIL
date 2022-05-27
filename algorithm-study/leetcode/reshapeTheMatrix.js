/**
 * https://leetcode.com/problems/reshape-the-matrix/
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
 var matrixReshape = function(mat, r, c) {
    if (r * c !== mat.length * mat[0].length) return mat;
    
    const result = [];
    let newRow = [];
    
    for(let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            newRow.push(mat[i][j]);
            
            if (newRow.length === c) {
                result.push(newRow);
                newRow = [];
            }
            
        }
    }
    
    return result;
};