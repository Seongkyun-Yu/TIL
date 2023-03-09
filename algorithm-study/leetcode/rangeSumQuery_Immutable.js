/**
 * EASY
 * https://leetcode.com/problems/range-sum-query-immutable/
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.sum = [0];
  for (let i = 0; i < nums.length; i++) {
    this.sum[i] = (this.sum[i - 1] || 0) + nums[i];
  }
};

/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  return this.sum[right] - (this.sum[left - 1] || 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
