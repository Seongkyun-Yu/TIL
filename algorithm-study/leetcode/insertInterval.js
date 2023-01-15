/**
 * MEDIUM
 * https://leetcode.com/problems/insert-interval/
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

const getOverlap = (nums1, nums2) => {
  const start = Math.min(nums1[0], nums2[0]);
  const end = Math.max(nums1[1], nums2[1]);

  if (nums1[0] <= nums2[0] && nums2[0] <= nums1[1]) {
    return [start, end];
  } else if (nums2[0] <= nums1[0] && nums1[0] <= nums2[1]) {
    return [start, end];
  }

  return [];
};

var insert = function (intervals, newInterval) {
  if (!intervals.length) return [newInterval];

  const result = [];
  let temp = newInterval;
  let keep = false;
  for (let i = 0; i < intervals.length; i++) {
    const overlap = getOverlap(temp || [], intervals[i]);

    if (overlap.length) {
      temp = overlap;
      keep = true;
    } else if (keep) {
      result.push(temp);
      result.push(intervals[i]);
      temp = null;
      keep = false;
    } else {
      result.push(intervals[i]);
    }
  }

  if (temp) result.push(temp);

  return result.sort((a, b) => a[0] - b[0]);
};
