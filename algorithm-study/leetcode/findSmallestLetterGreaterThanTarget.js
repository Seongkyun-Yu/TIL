/**
 * EASY
 * https://leetcode.com/problems/find-smallest-letter-greater-than-target/
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let left = 0;
  let right = letters.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (letters[mid] === target) left = mid + 1;
    else if (letters[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  if (left === letters.length) return letters[0];

  return letters[left];
};
