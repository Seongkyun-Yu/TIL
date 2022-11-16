/**
 * https://leetcode.com/problems/max-area-of-island/
 * @param {number[][]} grid
 * @return {number}
 */
 var maxAreaOfIsland = function(grid) {
    let max = -Infinity;
    let acc = 0;
    const dfs = (i, j) => {
        if (!grid[i][j]) return acc;
        acc++;
        grid[i][j] = 0;
        
        if (grid[i + 1] && grid[i + 1][j]) dfs(i + 1, j);
        if (grid[i - 1] && grid[i - 1][j]) dfs(i - 1, j);
        if (grid[i] && grid[i][j + 1]) dfs(i, j + 1);
        if (grid[i] && grid[i][j - 1]) dfs(i, j - 1);
    }
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            acc = 0;
            dfs(i, j);
            max = Math.max(max, acc);
        }
    }
    
    return max;
};