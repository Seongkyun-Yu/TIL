/**
 * https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 */
 const calc = (prev, cur, n, count = 2) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    if (count === n) return prev + cur;
    
    return calc(cur, prev + cur, n, ++count);
}

var fib = function(n) {
    return calc(0, 1, n);
};

