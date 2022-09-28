/**
 * https://leetcode.com/problems/find-if-path-exists-in-graph/
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
 var validPath = function(n, edges, source, destination) {
    const visited = {};
    const path = {};
    for(let i = 0; i < edges.length; i++) {
        if (path[edges[i][0]]) path[edges[i][0]].push(edges[i][1]);
        else path[edges[i][0]] = [edges[i][1]];
        
        if (path[edges[i][1]]) path[edges[i][1]].push(edges[i][0]);
        else path[edges[i][1]] = [edges[i][0]];
    }
    
    const checkPath = (vertex) => {
        if (visited[vertex]) return false;
        if (destination === vertex) return true;
        visited[vertex] = true
        
        const vertexs = path[vertex];
        for(let i = 0; i < vertexs.length; i++) {
            const result = checkPath(vertexs[i]);
            if (result) return true;
        }
        
        return false;
    }
    
    return checkPath(source);
};