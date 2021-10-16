/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const result = [];

  while (result.length < m + n) {
    if (nums1[0] !== 0 && nums1[0] < nums2[0]) result.push(nums1.shift());
    else result.push(nums2.shift());
  }

  return result;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
