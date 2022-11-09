/**
 * @param {string} s
 * @return {string[][]}
 */
 var partition = function(s) {
    const result = [];
    const chars = s.split("");
    
    const isPalindrome = (s) => {
        if (s.length === 1) return true;
        
        let start = 0;
        let end = s.length - 1;
        while(start < end) {
            if (s[start] !== s[end]) return false;
            start++;
            end--;
        }
        
        return true;
    }
    
    const dfs = (startIndex, acc) => {
        if (startIndex === chars.length) return;
        if (startIndex > chars.length) return;
        
        const tempResult = [];
        for(let i = startIndex; i < chars.length; i++) {
            const s = acc + chars[i];
            if (isPalindrome(s)) tempResult.push(s);
            dfs(i + 1, s);
        }
        
        if (tempResult.length) result.push(tempResult);
    }
    
    dfs(0, "");
    
    return result;
};