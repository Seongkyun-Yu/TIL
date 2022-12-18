/**
 * MEDIUM
 * https://leetcode.com/problems/gas-station
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  const startList = [];
  for (let i = 0; i < gas.length; i++) {
    if (gas[i] > 0 && gas[i] >= cost[i]) startList.push(i);
  }

  const visited = {};
  const dfs = (idx, restGas, startIdx, isFirst) => {
    if (restGas < cost[idx]) return false;
    if (!isFirst && idx === startIdx) return true;
    if (visited[idx] > restGas) return false;

    let result;
    if (idx + 1 === cost.length)
      result = dfs(0, restGas - cost[idx] + gas[0], startIdx, false);
    else
      result = dfs(
        idx + 1,
        restGas - cost[idx] + gas[idx + 1],
        startIdx,
        false,
      );

    visited[idx] = restGas;

    return result;
  };

  for (let i = 0; i < startList.length; i++) {
    const idx = startList[i];

    if (dfs(idx, gas[idx], idx, true)) return idx;
  }

  return -1;
};
