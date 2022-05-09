/**
 * https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/
 * @param {number[]} salary
 * @return {number}
 */
 var average = function(salary) {
    salary.sort((a, b) => a - b);
    salary.pop();
    salary.shift();
    
    return salary.reduce((a, b) => a + b, 0) / salary.length;
};