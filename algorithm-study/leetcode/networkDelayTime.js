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

  console.log({ graph });

  let count = 1;
  let delayTime = 0;
  const visit = {};
  const queue = [...graph[k]];
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [cur, dest, time] = queue.shift();

      delayTime += time;
      count++;

      if (!graph[dest]) {
        // count++;
        continue;
      }

      for (const node of graph[dest]) {
        queue.push(node);
      }
    }
  }

  console.log({ count });

  return count === n ? delayTime : -1;
};
