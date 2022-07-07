/**
 * https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 var kidsWithCandies = function(candies, extraCandies) {
    const maxNum = Math.max(...candies);
    
    return candies.map((candy) => candy + extraCandies >= maxNum);
};