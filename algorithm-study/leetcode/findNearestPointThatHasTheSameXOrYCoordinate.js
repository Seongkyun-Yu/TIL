/**
 * https://leetcode.com/problems/find-nearest-point-that-has-the-same-x-or-y-coordinate/
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let min = Infinity
    let nearestPoint = -1
    
    points.forEach((point, i)=>{
        const [a, b] = point;
        
        if(a === x || b === y){
            const dist = Math.abs(x - a) + Math.abs(y - b)
            if(dist < min) {
                nearestPoint = i
                min = dist
            }
        }
    });
    
    return nearestPoint
};