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
  const dfs = (idx, acc, list) => {
    if (list.length > 4) return;
    if (list.length === 4) {
      const key = list.join('-');
      if (visited[key]) return;
      if (acc === target) result.push([...list]);
      visited[key] = true;
      console.log(result);
      return;
    }

    for (let i = idx; i < nums.length; i++) {
      list.push(nums[i]);
      dfs(i + 1, acc + nums[i], list);
      list.pop();
    }
  };

  dfs(0, 0, []);

  return result;
};
