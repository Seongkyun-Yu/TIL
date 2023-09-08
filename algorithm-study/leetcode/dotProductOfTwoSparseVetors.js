/**
 * MEDIUM
 * https://leetcode.com/problems/dot-product-of-two-sparse-vectors/
 * @param {number[]} nums
 * @return {SparseVector}
 */
var SparseVector = function (nums) {
  this.vector = nums;
};

// Return the dotProduct of two sparse vectors
/**
 * @param {SparseVector} vec
 * @return {number}
 */
SparseVector.prototype.dotProduct = function (vec) {
  let sum = 0;
  for (let i = 0; i < this.vector.length; i++) {
    sum += this.vector[i] * vec.vector[i];
  }

  return sum;
};

// Your SparseVector object will be instantiated and called as such:
// let v1 = new SparseVector(nums1);
// let v2 = new SparseVector(nums2);
// let ans = v1.dotProduct(v2);
