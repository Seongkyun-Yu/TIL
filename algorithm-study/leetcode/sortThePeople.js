/**
 * EASY
 * https://leetcode.com/problems/sort-the-people/
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function (names, heights) {
  const heightsObj = {};
  for (let i = 0; i < heights.length; i++) {
    heightsObj[heights[i]] = names[i];
  }

  heights.sort((a, b) => b - a);

  return heights.map((height) => heightsObj[height]);
};
