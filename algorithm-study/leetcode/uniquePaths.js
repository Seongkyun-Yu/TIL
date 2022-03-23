/**
 * https://leetcode.com/problems/unique-paths/ // 미해결
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
 var uniquePaths = function(m, n) {
    let count = 0;
    
    const checkPath = (accDown, accRight) => {
        if(accDown === m && accRight === n) {
            count++;
            return;
        }
        
        if (accDown < m) checkPath(accDown + 1, accRight);
        if (accRight < n) checkPath(accDown, accRight + 1);
    }
    
    checkPath(1, 1);
    
    return count;
};