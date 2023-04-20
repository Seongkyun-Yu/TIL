/**
 * MEDIUM
 * https://leetcode.com/problems/sort-an-array/
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  if (nums.length === 1) return nums;

  const mid = Math.floor(nums.length / 2);
  const arr1 = nums.slice(0, mid);
  const arr2 = nums.slice(mid, nums.length);

  const sorted1 = sortArray(arr1);
  const sorted2 = sortArray(arr2);

  const tempArr = [];

  while (sorted1.length && sorted2.length) {
    if (sorted1[0] < sorted2[0]) tempArr.push(sorted1.shift());
    else tempArr.push(sorted2.shift());
  }

  while (sorted1.length) {
    tempArr.push(sorted1.shift());
  }

  while (sorted2.length) {
    tempArr.push(sorted2.shift());
  }

  return tempArr;
};
