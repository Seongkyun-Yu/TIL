/**
 * https://leetcode.com/problems/car-fleet/
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
 var carFleet = function(target, position, speed) {
    const carData = [];
    for(let i = 0; i < position.length; i++) {
        carData.push({pos: position[i], spd: speed[i]});
    }
    
    carData.sort((a, b) => b.pos - a.pos);
    
    const stack = [];
    for(let i = 0; i < carData.length; i++) {
        const { pos, spd } = carData[i];
        stack.push((target - pos) / spd);
        
        if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
            stack.pop();
        }
    }
    
    return stack.length;
};