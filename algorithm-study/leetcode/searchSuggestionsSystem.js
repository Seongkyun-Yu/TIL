/**
 * MEDIUM
 * https://leetcode.com/problems/search-suggestions-system/
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  products.sort((a, b) => a.localeCompare(b));

  const result = [];
  let left = 0;
  let right = products.length - 1;
  for (let i = 0; i < searchWord.length; i++) {
    const c = searchWord[i];

    while (
      left <= right &&
      (products[left].length <= i || products[left][i] !== c)
    ) {
      left++;
    }
    while (
      left <= right &&
      (products[right].length <= i || products[right][i] !== c)
    ) {
      right--;
    }

    const sList = [];
    const len = Math.min(3, right - left + 1);
    for (let j = 0; j < len; j++) {
      sList.push(products[left + j]);
    }

    result.push(sList);
  }

  return result;
};
