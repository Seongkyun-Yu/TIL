/**
 * MEDIUM
 * https://leetcode.com/problems/walls-and-gates/
 * @param {number[][]} rooms
 * @return {void} Do not return anything, modify rooms in-place instead.
 */
 var wallsAndGates = function(rooms) {
    const queue = [];
    const visited = {};
    
    for(let i = 0; i < rooms.length; i++) {
        for(let j = 0; j < rooms[0].length; j++) {
            if (rooms[i][j] === 0) {
                queue.push({ row: i, col: j });
                visited[`${i}-${j}`] = true;
            }
        }
    }
    
    const addQueue = (row, col) => {
        if (row < 0) return;
        if (col < 0) return;
        if (row >= rooms.length) return;
        if (col >= rooms[0].length) return;
        if (visited[`${row}-${col}`]) return;
        if (rooms[row][col] === -1) return;
        
        visited[`${row}-${col}`] = true;
        queue.push({ row, col });
    }
    
    let dist = 0;
    while(queue.length) {
        const len = queue.length;
        for(let i = 0; i < len; i++) {
            const { row, col } = queue.shift();
            rooms[row][col] = dist;            
            
            addQueue(row, col + 1);
            addQueue(row, col - 1);
            addQueue(row + 1, col);  
            addQueue(row - 1, col);
        }
        
        dist++; 
    }
    
    return rooms;
};