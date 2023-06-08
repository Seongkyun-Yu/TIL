/**
 * EASY
 * https://leetcode.com/problems/valid-mountain-array/
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (arr.length <= 1) return false;
  if (arr[0] > arr[1]) return false;
  if (arr[arr.length - 1] > arr[arr.length - 2]) return false;

  let decrease = false;
  let prev = -Infinity;
  for (const num of arr) {
    if (prev > num) decrease = true;

    if (decrease === false && num <= prev) return false;
    if (decrease === true && num >= prev) return false;

    prev = num;
  }

  return true;
};
