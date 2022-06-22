/** 
 * https://leetcode.com/problems/top-k-frequent-elements
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const countObj = {};
    
    for(const num of nums) {
        countObj[num] = countObj[num] ? countObj[num] + 1 : 1;
    }
    
    const tempList = [];
    for(const key in countObj) {
        if (tempList[countObj[key]]) tempList[countObj[key]].push(+key);
        else tempList[countObj[key]] = [+key];
    }
    
    const result = [];
    for(let i = tempList.length - 1; i >= 0; i--) {
        if (!tempList[i]) continue;
        if (result.length === k) return result;

        result.push(...tempList[i]);
    }

    return result;
};

console.log(topKFrequent([1,2], 2))