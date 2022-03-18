/**
 * https://leetcode.com/problems/happy-number/
 * @param {number} n
 * @return {boolean}
 */

 var isHappy = function(n) {
    if (n < 1) return false;
    let set = new Set();
	
    while (!set.has(n)) {
        set.add(n);
        let s = n.toString();
        n = 0;
        
        for (let i = 0; i < s.length; ++i) {
            n += +s[i] * +s[i] ;
        }
        
        if (n == 1) return true;
    }
	
    return false;
};