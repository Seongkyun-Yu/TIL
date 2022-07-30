/**
 * https://leetcode.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (matrix[mid].includes(target)) return true;
        
        if (matrix[mid][matrix[mid].length - 1] > target) right = mid - 1;
        else left = mid + 1;
    }
    
    return false;
};