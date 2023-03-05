/**
 * HARD
 * https://leetcode.com/problems/minimum-number-of-days-to-eat-n-oranges/
 * @param {number} n
 * @return {number}
 */
var minDays = function (n) {
  const visited = {};

  let count = 0;
  const queue = [n];
  while (queue.length) {
    let len = queue.length;
    count++;
    while (len) {
      const num = queue.shift();
      visited[num] = true;

      if (num % 3 === 0) {
        const num3 = num - 2 * (num / 3);
        if (num3 === 0) return count;
        if (!visited[num3]) queue.push(num3);
      }

      if (num % 2 === 0) {
        const num2 = num - num / 2;
        if (num2 === 0) return count;
        if (!visited[num2]) queue.push(num2);
      }

      const num1 = num - 1;
      if (num1 === 0) return count;
      if (!visited[num1]) queue.push(num1);

      len--;
    }
  }
};

var minDays = function(n) {
  const cache = { 0: 0, 1: 1 }

  const dfs = (n) => {
      if (cache[n] !== undefined) return cache[n];

      const one = 1 + (n % 2) + dfs(parseInt(n / 2));
      const two = 1 + (n % 3) + dfs(parseInt(n / 3));

      cache[n] = Math.min(one, two);

      return cache[n];
  }

  return dfs(n);
};