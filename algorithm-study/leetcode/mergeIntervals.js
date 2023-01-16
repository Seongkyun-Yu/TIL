/**
 * MEDIUM
 * https://leetcode.com/problems/merge-intervals/
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const getInterval = (nums1, nums2) => {
  const start = Math.min(nums1[0], nums2[0]);
  const end = Math.max(nums1[1], nums2[1]);

  if (nums1[0] <= nums2[0] && nums2[0] <= nums1[1]) {
    return [start, end];
  }

  return [];
};
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const last = result.pop();
    const interval = getInterval(last, intervals[i]);

    if (interval.length) {
      result.push(interval);
    } else {
      result.push(last);
      result.push(intervals[i]);
    }
  }

  return result;
};
