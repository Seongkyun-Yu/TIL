/**
 * MEDIUM
 * https://leetcode.com/problems/network-delay-time/
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  const graph = {};
  for (const [cur, dest, time] of times) {
    if (!graph[cur]) graph[cur] = [[cur, dest, time]];
    else graph[cur].push([cur, dest, time]);
  }

  if (!graph[k]) return -1;

  let count = 0;
  let result = 0;
  const visit = { k: true };
  const dfs = (node, t) => {
    if (visit[node]) return;

    count++;
    visit[node] = true;

    let maxTime = 0;
    const children = graph[node];
    if (!children) return;
    for (const [_, dest, time] of children) {
      if (visit[dest]) continue;
      dfs(dest, time);
      maxTime = Math.max(maxTime, time);
    }

    console.log({ maxTime });

    result += maxTime;
  };

  dfs(k, 0);

  return count === n ? result : -1;
};
