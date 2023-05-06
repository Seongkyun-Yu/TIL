// https://leetcode.com/problems/moving-average-from-data-stream/
// EASY
/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.queue = [];
    this.maxSize = size;
    this.acc = 0;
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if (this.queue.length === this.maxSize) {
        this.acc -= this.queue[0];
        this.queue.shift();
    }
    this.queue.push(val);
    this.acc += val;

    return this.acc / this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */