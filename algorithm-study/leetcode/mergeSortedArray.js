/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
  let len = nums1.length - 1
  m--;
  n--;

  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[len] = nums1[m]
      m--;
    } else {
      nums1[len] = nums2[n]
      n--;
    }

    len--;
  }
  return nums1;
};