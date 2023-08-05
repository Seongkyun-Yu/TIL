/**
 * MEDIUM
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  if (fruits.length <= 2) return fruits.length;

  let count = 1;
  const counter = {};
  counter[fruits[0]] = 1;

  let left = 0;
  let right = 1;
  while (left < right) {
    counter[fruits[right]] = counter[fruits[right]] + 1 || 1;
    count = Object.keys(counter).length;

    if (count <= 2) continue;
  }
};
