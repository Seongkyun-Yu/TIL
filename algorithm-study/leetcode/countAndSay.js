/**
 * https://leetcode.com/problems/count-and-say/
 * @param {number} n
 * @return {string}
 */
 var countAndSay = function(n) {
    if (n === 1) return "1";
    
    let start = '1';
    let result = '';
    let tmp = 1;
    for(i=0; i<n-1; i++) {
        for(let j = 0; j < start.length; j++){
            if(start[j] !== start[j + 1] || j == start.length - 1){
                result += tmp + start[j];
                tmp = 1;
            } else tmp += 1;
        }
        
        start = result;
        result = '';
    }
    
    return start;
};