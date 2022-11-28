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
    
    for(let i = 0; i < manager.length; i++) {
        if (graph[manager[i]]) graph[manager[i]].push(i);
        else graph[manager[i]] = [i];
    }
    
    let result = 0;
    let levelLen = 1;
    let count = 0;
    const queue = [headID];
    while(queue.length) {
        const id = queue.shift();
        
        if (!graph[id]) continue;
        console.log(id, graph[id], graph, queue)
        for(const subID of graph[id]) {
            queue.push(subID);
        }
        
        count++;
        
        if (levelLen === count) {
            levelLen = queue.length;
            count = 0;
            result++;
        }
    }
    
    return result;
};