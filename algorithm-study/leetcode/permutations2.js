/**
 * MEDIUM
 * https://leetcode.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  const targetLen = nums.length;
  const visited = {};
  const dfs = (path, list) => {
    if (path.length === targetLen) {
      const key = path.join('');
      if (visited[key]) return;

      visited[key] = true;
      result.push([...path]);
      return;
    }

    const len = list.length;
    for (let i = 0; i < len; i++) {
      const temp = list[i];
      list.splice(i, 1);
      path.push(temp);

      dfs(path, list);

      list.splice(i, 0, temp);
      path.pop();
    }
  };

  dfs([], nums);

  return result;
};
