/**
 * MEDIUM
 * https://leetcode.com/problems/asteroid-collision/
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
  const stack = [];
  for (const ast of asteroids) {
    while (true) {
      const prev = stack.pop();
      if (!prev) {
        stack.push(ast);
        break;
      }
      if (
        (prev < 0 && ast < 0) ||
        (prev > 0 && ast > 0) ||
        (prev < 0 && ast > 0)
      ) {
        stack.push(prev);
        stack.push(ast);
        break;
      }
      if (Math.abs(prev) === Math.abs(ast)) break;
      else if (Math.abs(prev) > Math.abs(ast)) {
        stack.push(prev);
        break;
      }
    }
  }

  return stack;
};
