/**
 * https://leetcode.com/problems/count-sub-islands/
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function(grid1, grid2) {
    const dfs = (i, j) => {
        if (i < 0 || i === grid1.length) return true;
        if (j < 0 || j === grid1[0].length) return true;
        if (!grid2[i][j]) return true;
        
        grid2[i][j] = 0;
       
        let result = true;
        if (!grid1[i][j]) result = false;  
        
        result = dfs(i - 1, j) && result;
        result = dfs(i + 1, j) && result;
        result = dfs(i, j - 1) && result;
        result = dfs(i, j + 1) && result;
        
        return result;
    }
    
    let count = 0;
    for(let i = 0; i < grid2.length; i++) {
        for(let j = 0; j < grid2[i].length; j++) {
            if (grid2[i][j] && dfs(i, j)) count++;
        }
    }
    
    return count;
};