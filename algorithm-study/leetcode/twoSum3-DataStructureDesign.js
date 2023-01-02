// EASY
// https://leetcode.com/problems/two-sum-iii-data-structure-design/

var TwoSum = function () {
  this.nums = {};
  this.total = 0;
};

/**
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function (number) {
  this.nums[number] = this.nums[number] + 1 || 1;
  this.total++;
};

/**
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function (value) {
  if (this.total < 2) return false;

  for (const num in this.nums) {
    const needNum = value - +num;

    if (needNum === +num && this.nums[needNum] > 1) return true;
    else if (needNum !== +num && this.nums[needNum]) return true;
  }

  return false;
};

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */
