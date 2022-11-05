/**
 * https://leetcode.com/problems/task-scheduler/
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
    const count = {};
    for(const task of tasks) {
        count[task] = count[task] + 1 || 1;
    }
    
    const maxHeap = new MaxPriorityQueue();
    for(const key in count) {
        maxHeap.enqueue(count[key], count[key]);
    }
    
    let time = 0;
    const queue = [];
    while(maxHeap.size() || queue.length) {
        time++;
        
        if (!maxHeap.size()) time = queue[0].startTime;
        else {
            const cnt = maxHeap.dequeue().element - 1;
            if (cnt) queue.push({ cnt, startTime: time + n });
        }
        
        if (queue.length && queue[0].startTime === time) {
            maxHeap.enqueue(queue.shift().cnt);
        }
    }
    
    return time;
};