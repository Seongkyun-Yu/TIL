/**
 * https://leetcode.com/problems/water-bottles/
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
 var numWaterBottles = function(numBottles, numExchange) {
    let bottles = numBottles;
    let rest = numBottles;
    
    while(rest >= numExchange) {
        bottles += Math.floor(rest);
        
        rest = Math.floor(rest / numExchange) + (rest % numExchange);
    }
    
    return bottles;
};

console.log(numWaterBottles(15, 4))