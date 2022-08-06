/**
 * https://leetcode.com/problems/daily-temperatures/submissions/
 * @param {number[]} temperatures
 * @return {number[]}
 */
 var dailyTemperatures = function(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = [];
    
    for(let i = 0; i < temperatures.length; i++) {        
        while(stack[stack.length - 1]?.temp < temperatures[i]) {
            const { temp, index } = stack.pop();
            result[index] = i - index;
        }
        
        stack.push({
                temp: temperatures[i], 
                index: i
        });
    }
    
    return result;
};