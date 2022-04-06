/**
 * https://leetcode.com/problems/minimum-path-sum/
 * @param {number[][]} grid
 * @return {number}
 */
 var minPathSum = function(grid) {
    let min = Infinity;
    const rowEndIndex = grid.length - 1;
    const colEndIndex = grid[0].length - 1;
    
    const findPath = (row, col, sum) => {
        const acc = sum + grid[row][col];
        
        if (row === rowEndIndex && col === colEndIndex) {
            if (min > acc) min = acc;
            return;
        }
        
        if (row < rowEndIndex) findPath(row + 1, col, acc);
        if (col < colEndIndex) findPath(row, col + 1, acc);
    }
    
    findPath(0, 0, 0);
    
    return min;
};