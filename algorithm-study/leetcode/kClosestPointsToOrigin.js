/**
 * https://leetcode.com/problems/k-closest-points-to-origin/
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
 var kClosest = function(points, k) {
    const maxHeap = new MinPriorityQueue();
    
    for(const point of points) {
        const [x, y] = point;
        const distance = x * x + y * y;
        maxHeap.enqueue(point, distance);
    }
    
    const result = [];
    for(let i = 0; i < k; i++) {
        const { element } = maxHeap.dequeue()
        result.push(element);
    }
    
    return result;
};