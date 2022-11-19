
// https://leetcode.com/problems/stock-price-fluctuation/

var StockPrice = function() {
    this.data = {};
    this.max = new MaxPriorityQueue({ compare: (a, b) => b.price - a.price });
    this.min = new MinPriorityQueue({ compare: (a, b) => a.price - b.price });
    this.latest = { timestamp: -Infinity, price: 0 };
};

/** 
 * @param {number} timestamp 
 * @param {number} price
 * @return {void}
 */
StockPrice.prototype.update = function(timestamp, price) {
    this.data[timestamp] = price;
    
    this.max.enqueue({ timestamp, price });
    this.min.enqueue({ timestamp, price });
    
    if (this.latest.timestamp <= timestamp) {
        this.latest = { timestamp, price };
    }
};

/**
 * @return {number}
 */
StockPrice.prototype.current = function() {
    return this.latest.price;
};

/**
 * @return {number}
 */
StockPrice.prototype.maximum = function() {
    let max = this.max.dequeue();
    
    while(max.price !== this.data[max.timestamp]) {
       max = this.max.dequeue(); 
    }
    
    this.max.enqueue(max);
    
    return max.price;
};

/**
 * @return {number}
 */
StockPrice.prototype.minimum = function() {
    let min = this.min.dequeue();
    
    while(min.price !== this.data[min.timestamp]) {
       min = this.min.dequeue(); 
    }
    
    this.min.enqueue(min);
    
    return min.price;
};

/** 
 * Your StockPrice object will be instantiated and called as such:
 * var obj = new StockPrice()
 * obj.update(timestamp,price)
 * var param_2 = obj.current()
 * var param_3 = obj.maximum()
 * var param_4 = obj.minimum()
 */