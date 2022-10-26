/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    const m = {};
    for (let i = 0; i < s.length; i++) {
        m[s[i]] = m[s[i]] + 1 || 1;
    }
    let numOfOdds = 0;
    for (const key in m) {
        if (m[key] % 2 === 1) {
            numOfOdds += 1;
        }
    }
    return numOfOdds > 0 ? s.length - numOfOdds + 1 : s.length;
};