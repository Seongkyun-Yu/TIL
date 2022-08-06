/**
 * https://leetcode.com/problems/daily-temperatures/
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    const tlen = temperatures.length;
    
    for(let i = 0; i < temperatures.length; i++) {
        if (stack.length === 0){
            stack.push(temperatures[i]);
            continue;
        }
        
        if (temperatures[i]) continue;
        
    }
};