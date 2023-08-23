/**
 * EASY
 * https://leetcode.com/problems/find-the-difference-of-two-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
  const nums1Set = new Set(nums1);
  const nums2Set = new Set(nums2);

  const result1 = new Set();
  for (const num of nums1) {
    if (nums2Set.has(num)) continue;
    result1.add(num);
  }

  const result2 = new Set();
  for (const num of nums2) {
    if (nums1Set.has(num)) continue;
    result2.add(num);
  }

  return [[...result1], [...result2]];
};
