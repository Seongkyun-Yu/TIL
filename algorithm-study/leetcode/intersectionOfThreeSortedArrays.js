/**
 * EASY
 * https://leetcode.com/problems/intersection-of-three-sorted-arrays/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
var arraysIntersection = function (arr1, arr2, arr3) {
  const count = {};

  for (const num of arr1) {
    count[num] = count[num] + 1 || 1;
  }

  for (const num of arr2) {
    count[num] = count[num] + 1 || 1;
  }

  for (const num of arr3) {
    count[num] = count[num] + 1 || 1;
  }

  const result = [];
  for (const num in count) {
    if (count[num] === 3) result.push(+num);
  }

  return result;
};
