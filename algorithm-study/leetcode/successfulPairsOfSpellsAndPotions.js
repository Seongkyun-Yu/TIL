/**
 * MEDIUM
 * https://leetcode.com/problems/successful-pairs-of-spells-and-potions/
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function (spells, potions, success) {
  const sortedPotions = potions.sort((a, b) => a - b);

  const result = [];
  for (const spell of spells) {
    let left = 0;
    let right = sortedPotions.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (sortedPotions[mid] * spell < success) left = mid + 1;
      else right = mid - 1;
    }

    if (sortedPotions[left] * spell >= success)
      result.push(sortedPotions.length - left);
    else result.push(0);
  }

  return result;
};
