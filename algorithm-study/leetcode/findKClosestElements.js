/**
 * MEDIUM
 * https://leetcode.com/problems/find-k-closest-elements/
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {
  if (arr.length === k) return arr;
  let min = Infinity;
  let minIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(min - x) <= Math.abs(arr[i] - x)) continue;

    min = arr[i];
    minIdx = i;
  }

  const result = [min];
  let left = minIdx - 1;
  let right = minIdx + 1;
  while (result.length < k && (left >= 0 || right < arr.length)) {
    if (
      Math.abs(arr[left] - x) <= Math.abs(arr[right] - x) ||
      arr[right] === undefined
    ) {
      result.unshift(arr[left]);
      left--;
    } else {
      result.push(arr[right]);
      right++;
    }
  }

  return result;
};
