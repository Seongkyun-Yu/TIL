/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const m = new Map();
  const left = new Map();
  const right = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (left.get(num) === undefined) left.set(num, i);
    right.set(num, i);
    m.set(num, m.get(num) + 1 || 1);
  }

  const degree = Math.max(...Array.from(m.values()));
  const elems = Array.from(m.keys()).filter((num) => m.get(num) === degree);
  const len = nums.length;

  for (const elem of elems) {
    len = Math.min(len, right.get(elem) - left.get(elem) + 1);
  }

  return len;
};
