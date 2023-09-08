/**
 * EASY
 * https://leetcode.com/problems/design-an-ordered-stream/
 * @param {number} n
 */
var OrderedStream = function (n) {
  this.pointer = 0;
  this.list = [];
};

/**
 * @param {number} idKey
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function (idKey, value) {
  const chunk = [];
  this.list[idKey - 1] = value;

  while (this.list[this.pointer]) {
    chunk.push(this.list[this.pointer]);
    this.pointer++;
  }

  return chunk;
};

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */
