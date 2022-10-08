
var MedianFinder = function() {
    this.list = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {  
    const arr = this.list;
    let left = 0;
    let right = arr.length - 1;
    let mid = Math.floor((left + right) / 2);
    
    while(left <= right) {
        mid = Math.floor((left + right) / 2);
        if (num === arr[mid]) return arr.splice(mid, 0, num);
        else if (num < arr[mid]) right = mid - 1;
        else left = mid + 1;
    }

    arr.splice(left, 0, num);
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const mid = Math.floor(this.list.length / 2);
    if (this.list.length % 2) return this.list[mid];
    
    return (this.list[mid] + this.list[mid - 1]) / 2;
};

/** 
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
