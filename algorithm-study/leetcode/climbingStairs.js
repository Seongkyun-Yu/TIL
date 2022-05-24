/**
 * https://leetcode.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
 var climbStairs = function(n) {
    let steps = []
    steps[0] = 1
    steps[1] = 1
    
    for(let i = 2; i <= n; i++){
        steps[i] = steps[i - 1] + steps[i - 2]
    }
    
    return steps[n]
};