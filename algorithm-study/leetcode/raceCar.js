/**
 * HARD
 * https://leetcode.com/problems/race-car/submissions/
 * @param {number} target
 * @return {number}
 */
 var racecar = function(target) {
    const queue = [{ moves: 0, position: 0, speed: 1 }];
    const visited = {};
    
    while(queue.length) {
        const { moves, position, speed } = queue.shift();
        
        if (position === target) return moves;        
        if (visited[`${position}-${speed}`]) continue;
        
        visited[`${position}-${speed}`] = true;
        
        queue.push({ moves: moves + 1, position: position + speed, speed : speed * 2 });
        
        if (position + speed > target && speed > 0) queue.push({ moves: moves + 1, position, speed : -1 });
        else if (position + speed < target && speed < 0) queue.push({ moves: moves + 1, position, speed: 1 });
    }
};