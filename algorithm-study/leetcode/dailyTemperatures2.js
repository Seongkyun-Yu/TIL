/**
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  const result = new Array(temperatures.length).fill(0);
  const stack = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (stack.length && stack[stack.length - 1].temp < temperatures[i]) {
      const { idx } = stack.pop();
      result[idx] = i - idx;
    }

    stack.push({ temp: temperatures[i], idx: i });
  }

  return result;
};
