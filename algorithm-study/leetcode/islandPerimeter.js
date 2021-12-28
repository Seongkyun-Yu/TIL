/**
 * https://leetcode.com/problems/island-perimeter/
 * @param {number[][]} grid
 * @return {number}
 */
 var islandPerimeter = function(grid) {
    let result = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            
            if (grid[i][j] !== 1) continue;
            
            if (i < 1) result++;
            else if (i > 0 && grid[i - 1][j] === 0) result++;
            
            if (grid.length - 1 === i) result++;
            else if (grid.length - 1 !== i && grid[i + 1][j] === 0) result++;
            
            if (j < 1) result++;
            else if (j > 0 && grid[i][j - 1] === 0) result++;
            
            if (grid[i].length - 1 === j) result++;
            else if (grid[i].length - 1 !== j && grid[i][j + 1] === 0) result++;
        }
    }
    
    return result;
};