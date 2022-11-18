/**
 * https://leetcode.com/problems/count-sub-islands/
 * @param {number[][]} grid1
 * @param {number[][]} grid2
 * @return {number}
 */
 var countSubIslands = function(grid1, grid2) {
    const dfs = (i, j , map, cache) => {
        if (!map[i]) return;
        if (!map[i][j]) return;
        
        cache[`${i}-${j}`] = true;
        map[i][j] = 0;
        
        if (map[i - 1] && map[i - 1][j]) dfs(i - 1, j, map, cache);
        if (map[i + 1] && map[i + 1][j]) dfs(i + 1, j, map, cache);
        if (map[i][j - 1]) dfs(i, j - 1, map, cache);
        if (map[i][j + 1]) dfs(i, j + 1, map, cache);
    }
    
    const maps1 = [];
    const maps2 = [];
    
    for(let i = 0; i < grid1.length; i++) {
        for(let j = 0; j < grid1[i].length; j++) {
            const cache = {};
            dfs(i, j, grid1, cache);
            maps1.push(cache);
        }
    }
    
    for(let i = 0; i < grid2.length; i++) {
        for(let j = 0; j < grid2[i].length; j++) {
            const cache = {};
            dfs(i, j, grid2, cache);
            maps2.push(cache);
        }
    }
    
    let count = 0;
    for(const map1 of maps1) {
        for(let i = 0; i < maps2.length; i++) {
            const keys = Object.keys(maps2[i]);
            
            for(let j = 0; j < keys.length; j++) {
                if (!map1[keys[j]]) break;
                if (j === keys.length - 1) count++;
            }
        }
    }
    
    return count;
};