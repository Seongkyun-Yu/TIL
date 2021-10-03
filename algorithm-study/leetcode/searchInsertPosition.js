/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return findIndex(nums, target, 0, nums.length - 1);
};

const findIndex = (nums, target, startIndex, lastIndex) => {
  if (startIndex > lastIndex) return startIndex;

  const midIndex = Math.floor((startIndex + lastIndex) / 2);

  if (nums[midIndex] === target) return midIndex;
  if (nums[midIndex] > target)
    return findIndex(nums, target, startIndex, midIndex - 1);
  if (nums[midIndex] < target)
    return findIndex(nums, target, midIndex + 1, lastIndex);
};

console.log(searchInsert([1, 3, 5, 6], 7));
