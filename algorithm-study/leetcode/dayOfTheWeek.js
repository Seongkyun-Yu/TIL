/**
 * EASY
 * https://leetcode.com/problems/day-of-the-week/
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function (day, month, year) {
  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString('en-US', { weekday: 'long' });
};
