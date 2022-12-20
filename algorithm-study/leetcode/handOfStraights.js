/**
 * MEDIUM
 * https://leetcode.com/problems/hand-of-straights/description/
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function (hand, groupSize) {
  if (hand.length % groupSize) return false;

  const sorted = hand.sort((a, b) => a - b);
  const count = {};
  for (const num of sorted) {
    count[num] = count[num] + 1 || 1;
  }
  const nums = new Set([...sorted]);

  let temp = [];
  while (nums.size) {
    for (const num of nums) {
      if (!count[num]) {
        nums.delete(num);
        continue;
      }
      if (temp.length === 0) {
        temp.push(num);
        count[num] = count[num] - 1;
        if (temp.length === groupSize) {
          temp = [];
          break;
        }
        continue;
      }
      if (temp[temp.length - 1] + 1 < num) return false;

      temp.push(num);
      count[num] = count[num] - 1;

      if (temp.length === groupSize) {
        temp = [];
        break;
      }
    }
    if (temp.length === 0) continue;
    else if (temp.length !== groupSize) return false;
  }

  return true;
};
