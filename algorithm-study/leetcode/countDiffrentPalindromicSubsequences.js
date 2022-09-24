/**
 * https://leetcode.com/problems/count-different-palindromic-subsequences/
 * @param {string} s
 * @return {number}
 */
 var countPalindromicSubsequences = function(s) {
    const memo = {};
    
    const check = (start, end) => {
        if (start > end) return 0;
        if (memo[`${start}-${end}`]) return memo[`${start}-${end}`];
        
        const str = s.slice(start, end + 1);
        let count = 0;
        for(const c of "abcd") {
            let left = str.indexOf(c);
            let right = str.lastIndexOf(c);
            
            if (left === -1 || right === -1) continue;            
                        
            count += left === right ? 1 : check(left + start + 1, right + start - 1) + 2; 
        }
                
        memo[`${start}-${end}`] = count % 1000000007;
        
        return memo[`${start}-${end}`];
    };
    
    return check(0, s.length - 1);
};