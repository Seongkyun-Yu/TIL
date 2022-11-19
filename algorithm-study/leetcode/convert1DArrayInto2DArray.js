/**
 * https://leetcode.com/problems/convert-1d-array-into-2d-array/
 * @param {number[]} original
 * @param {number} m
 * @param {number} n
 * @return {number[][]}
 */
 var construct2DArray = function(original, m, n) {
    if (m * n !== original.length) return [];
    const result = [];
    
    let index = 0;
    for(let i = 0; i < m; i++) {
        const col = [];
        for(let j = 0; j < n; j++) {
            col.push(original[index++]);
        }
        result.push(col);
    }
    
    return result;
};