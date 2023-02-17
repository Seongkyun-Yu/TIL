/**
 * MEDIUM
 * https://leetcode.com/problems/4sum/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return [];

  nums.sort((a, b) => a - b);

  const visited = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const twoSum = nums[i] + nums[j];
      let left = j + 1;
      let right = nums.length - 1;

      while (left < right) {
        if (twoSum + nums[left] + nums[right] === target) {
          if (visited[`${nums[i]}-${nums[j]}-${nums[left]}-${nums[right]}`]) {
            left++;
            continue;
          }
          result.push([nums[i], nums[j], nums[left], nums[right]]);
          visited[`${nums[i]}-${nums[j]}-${nums[left]}-${nums[right]}`] = true;
        } else if (twoSum + nums[left] + nums[right] < target) {
          left++;
        } else {
          right--;
        }
      }
    }
  }

  return result;
};
