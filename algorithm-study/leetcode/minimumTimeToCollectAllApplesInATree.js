/**
 * MEDIUM
 * https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function (n, edges, hasApple) {
  const graph = {};
  const apples = new Set();

  for (let i = 0; i < edges.length; i++) {
    const [start, dest] = edges[i];
    if (graph[start]) graph[start].push(dest);
    else graph[start] = [dest];

    if (hasApple[i]) apples.add(dest);
  }

  const find = (start, count) => {
    if (apples.has(start)) return count;
    if (!graph[start]) return 0;

    let sum = 0;
    const list = graph[start];
    for (let i = 0; i < list.length; i++) {
      sum += find(list[i], count + 1);
    }

    if (sum === 0) return 0;
    if (start === 0) return sum;
    return sum + 1;
  };

  return find(0, 0);
};
