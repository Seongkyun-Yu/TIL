/**
 * https://leetcode.com/problems/path-crossing/
 * @param {string} path
 * @return {boolean}
 */
 var isPathCrossing = function(path) {
    const map = {
        "N": 1,
        "S": -1,
        "W": -1,
        "E": 1
    };
    
    const visited = new Set(["0-0"]);    
    
    const pos = [0, 0];
    for(const p of path) {
        if (p == "N" || p == "S") pos[1] += map[p];
        else pos[0] += map[p];
        
        if (visited.has(`${pos[0]}-${pos[1]}`)) return true;
        
        visited.add(`${pos[0]}-${pos[1]}`);
    }
    
    return false;
};