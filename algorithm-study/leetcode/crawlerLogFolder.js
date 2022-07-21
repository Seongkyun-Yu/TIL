/**
 * https://leetcode.com/problems/crawler-log-folder/
 * @param {string[]} logs
 * @return {number}
 */
 var minOperations = function(logs) {
    let result = 0;
    for(const log of logs) {
        if (log === "../") result -= result ? 1 : 0;
        else if (log === "./") continue;
        else result++;
    }
    
    return result;
};