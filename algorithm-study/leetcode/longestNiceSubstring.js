/**
 * 1763
 * https://leetcode.com/problems/longest-nice-substring/
 * @param {string} s
 * @return {string}
 */
 let longestNiceSubstring = s => {
    let best = '';
    
    const isNice = (s, c) => {
        const cSets = new Set(s);
        return cSets.has(c.toLowerCase()) && cSets.has(c.toUpperCase());
    };
    
    const getNiceSubString = (s) => {
        for (let i = 0; i < s.length; ++i) {
            if (isNice(s, s[i])) continue;
            
            getNiceSubString(s.substring(0, i));
            getNiceSubString(s.substring(i + 1));
            
            return;
        }
        
        if (best.length < s.length) best = s;
    }
    
    getNiceSubString(s);
    
    return best;
};