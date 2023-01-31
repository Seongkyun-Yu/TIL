/**
 * EASY
 * https://leetcode.com/problems/relative-sort-array/
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  const nums = {};
  for (const num of arr2) {
    nums[num] = [];
  }

  const rest = [];
  for (const num of arr1) {
    if (!nums[num]) rest.push(num);
    else nums[num].push(num);
  }
  rest.sort((a, b) => a - b);

  const acc = [];
  for (const num of arr2) {
    for (n of nums[num]) {
      acc.push(n);
    }
  }

  return [...acc, ...rest];
};
