/**
 * EASY
 * https://leetcode.com/problems/meeting-rooms/
 * @param {number[][]} intervals
 * @return {boolean}
 */
var canAttendMeetings = function (intervals) {
  const check = {};
  for (const [start, end] of intervals) {
    for (let i = start; i < end; i++) {
      if (check[i]) return false;
      check[i] = true;
    }
  }

  return true;
};
