/**
 * MEDIUM
 * https://leetcode.com/problems/rotting-oranges/
 * @param {number[][]} grid
 * @return {number}
 */
 var orangesRotting = function(grid) {
    const queue = [];
    let fresh = 0;
    
    for(let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) fresh++;
            if (grid[i][j] === 2) queue.push([i, j]);
        }
    }
    
    const direction = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    let time = 0;
    while(fresh > 0 && queue.length) {
        length = queue.length;
        
        for(let i = 0; i < length; i++) {
            const [r, c] = queue.shift();
            
            for(const [dr, dc] of direction) {
                const row = r + dr;
                const col = c + dc;
                
                if (row >= grid.length) continue;
                if (row < 0) continue;
                if (col >= grid[0].length) continue;
                if (col < 0) continue;
                if (grid[row][col] !== 1) continue;
                
                grid[row][col] = 2;
                queue.push([row, col]);
                fresh--;
            }
        }
        
        time++;
    }
    
    return fresh ? -1 : time;
};