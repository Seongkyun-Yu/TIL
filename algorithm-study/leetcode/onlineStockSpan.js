var StockSpanner = function () {
  this.count = 0;
  this.stack = [];
};

/**
 * MEDIUM
 * https://leetcode.com/problems/online-stock-span/
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  const topIdx = this.stack.length - 1;
  if (this.stack[topIdx] <= price) {
    let tempCount = 1;
    for (let i = topIdx; i >= 0; i--) {
      if (this.stack[i] > price) break;
      tempCount++;
    }
    this.count = tempCount;
    this.stack.push(price);

    return this.count;
  }

  this.count = 1;
  this.stack.push(price);
  return this.count;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */
