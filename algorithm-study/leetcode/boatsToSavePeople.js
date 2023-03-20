/**
 * MEDIUM
 * https://leetcode.com/problems/boats-to-save-people/
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function (people, limit) {
  people.sort((a, b) => a - b);

  let count = 0;
  let slow = 0;
  let fast = people.length - 1;
  while (slow <= fast) {
    if (people[slow] + people[fast] <= limit) {
      slow++;
      fast--;
    } else {
      fast--;
    }
    count++;
  }

  return count;
};
