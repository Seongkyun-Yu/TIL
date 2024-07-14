// HARD
// https://leetcode.com/problems/maximum-frequency-stack/description/
var FreqStack = function () {
  this.freq = {};
  this.stack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FreqStack.prototype.push = function (val) {
  this.freq[val] = this.freq[val] + 1 || 1;
  if (!this.stack[this.freq[val]]) this.stack[this.freq[val]] = [val];
  else {
    this.stack[this.freq[val]].push(val);
  }
  return null;
};

/**
 * @return {number}
 */
FreqStack.prototype.pop = function () {
  const mostFreq = this.stack[this.stack.length - 1].pop();
  if (this.stack[this.stack.length - 1].length === 0) this.stack.pop();
  this.freq[mostFreq] = this.freq[mostFreq] - 1;

  return mostFreq;
};

/**
 * Your FreqStack object will be instantiated and called as such:
 * var obj = new FreqStack()
 * obj.push(val)
 * var param_2 = obj.pop()
 */
