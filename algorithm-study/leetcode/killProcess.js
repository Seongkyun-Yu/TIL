/**
 * MEDIUM
 * https://leetcode.com/problems/kill-process/
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
  const childrenHash = {};
  for (let i = 0; i < ppid.length; i++) {
    if (childrenHash[ppid[i]]) childrenHash[ppid[i]].push(pid[i]);
    else childrenHash[ppid[i]] = [pid[i]];
  }

  const result = [];
  const queue = [kill];
  while (queue.length) {
    const proc = queue.shift();
    result.push(proc);

    const children = childrenHash[proc];
    if (!children) continue;
    for (const child of children) {
      queue.push(child);
    }
  }

  return result;
};
