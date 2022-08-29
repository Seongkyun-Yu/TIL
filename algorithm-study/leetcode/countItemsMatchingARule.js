/**
 * https://leetcode.com/problems/count-items-matching-a-rule/
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    const checkObj = {
        "type": 0,
        "color": 1,
        "name": 2,
    };
    
    const index = checkObj[ruleKey];
    let count = 0;
    for(const item of items) {
        if (item[index] === ruleValue) count++;
    }
    
    return count;
};