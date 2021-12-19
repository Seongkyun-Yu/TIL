/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    for (let i = 0; i < t.length; i++) {
        if (s[0] === t[i]) s = s.slice(1, s.length);
    }
   
    return !Boolean(s.length)
};