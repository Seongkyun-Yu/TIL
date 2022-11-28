/**
 * MEDIUM
 * https://leetcode.com/problems/time-needed-to-inform-all-employees/
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
 var numOfMinutes = function(n, headID, manager, informTime) {
    const graph = {};
    const cache = {};
    
    for(let i = 0; i < manager.length; i++) {
        graph[i] = manager[i];
    }
    
    let max = 0;
    const dfs = (index) => {
        if (manager[index] === -1) return informTime[index];
        if (cache[index]) return cache[index];
        
        cache[index] = informTime[index] + dfs(manager[index]);
        max = Math.max(max, cache[index]);
        
        return cache[index];
    }
    
    for(let i = 0; i < n; i++) {
        dfs(i);
    }
    
    return max;
};