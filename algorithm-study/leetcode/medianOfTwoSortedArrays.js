/**
 * HARD
 * https://leetcode.com/problems/median-of-two-sorted-arrays/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let short = nums1;
  let long = nums2;
  const total = nums1.length + nums2.length;
  const half = Math.floor(total / 2);

  if (long.length < short.length) {
    short = nums2;
    long = nums1;
  }

  console.log({ short, long });

  let left = 0;
  let right = short.length - 1;
  while (true) {
    let i = Math.floor((left + right) / 2);
    let j = half - i - 2;

    shortLeft = i >= 0 ? short[i] : -Infinity;
    shortRight = i + 1 < short.length ? short[i + 1] : Infinity;
    longLeft = j >= 0 ? long[j] : -Infinity;
    longRight = j + 1 < long.length ? long[j + 1] : Infinity;

    if (shortLeft <= longRight && longLeft <= shortRight) {
      if (total % 2) return Math.min(shortRight, longRight);
      else
        return (
          (Math.max(shortLeft, longLeft) + Math.min(shortRight, longRight)) / 2
        );
    }

    if (shortLeft > longRight) right = i - 1;
    else left = i + 1;
  }
};
