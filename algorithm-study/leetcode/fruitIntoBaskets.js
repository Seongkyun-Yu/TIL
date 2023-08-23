/**
 * MEDIUM
 * https://leetcode.com/problems/fruit-into-baskets/description/
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  if (fruits.length <= 2) return fruits.length;

  let result = 1;
  let count = 1;
  let typeCount = 1;
  const counter = {};
  counter[fruits[0]] = 1;

  let left = 0;
  let right = 1;
  while (left < right && right < fruits.length) {
    counter[fruits[right]] = counter[fruits[right]] + 1 || 1;
    typeCount = Object.keys(counter).length;
    count++;

    if (typeCount > 2) {
      while (typeCount >= 3) {
        counter[fruits[left]] = counter[fruits[left]] - 1;
        if (counter[fruits[left]] === 0) delete counter[fruits[left]];
        left++;
        typeCount = Object.keys(counter).length;
        count--;
      }
    }

    result = Math.max(result, count);
    right++;
  }

  return result;
};
