/**
 * @param {number[][]} edges
 * @return {number}
 */
 var findCenter = function(edges) {
    const map = {};
    let max = -Infinity;
    let maxIndex = 0
    for(let i = 0; i < edges.length; i++) {
        for(let j = 0; j < edges[i].length; j++) {
            map[edges[i][j]] = map[edges[i][j]] + 1 || 1;
            if (map[edges[i][j]] > max) {
                max = map[edges[i][j]];
                maxIndex = edges[i][j];
            }
        }
    }
    
    return maxIndex;
};