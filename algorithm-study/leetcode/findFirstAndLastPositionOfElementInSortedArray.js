/**
 * MEDIUM
 * https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const binarySearch = (left, right) => {
    let start = left;
    let end = right;
    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) return mid;
      else if (nums[mid] < target) start = mid + 1;
      else end = mid - 1;
    }

    return -1;
  };

  const firstFind = binarySearch(0, nums.length - 1);
  if (firstFind === -1) return [-1, -1];

  let start = firstFind;
  let end = firstFind;
  while (true) {
    const res = binarySearch(0, start - 1);
    if (res === -1) break;
    if (res === start) break;
    start = res;
  }
  while (true) {
    const res = binarySearch(end + 1, nums.length - 1);
    if (res === -1) break;
    if (res === end) break;
    end = res;
  }

  return [start, end];
};
