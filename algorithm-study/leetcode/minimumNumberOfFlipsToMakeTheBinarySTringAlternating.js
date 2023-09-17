/**
 * MEDIUM
 * https://leetcode.com/problems/minimum-number-of-flips-to-make-the-binary-string-alternating/
 * @param {string} s
 * @return {number}
 */
var minFlips = function(s) {
    const sArr = [...s];
    const startOneArr = [];
    const startZeroArr = [];
    for(let i = 0; i < s.length * 2 - 1; i++) {
        if (i % 2) startOneArr.push(0);
        else startOneArr.push(1);

        if (i % 2) startZeroArr.push(1);
        else startZeroArr.push(0);
    }

    let startOneCount = 0;
    let startZeroCount = 0;
    let startIdx = 0;
    let endIdx = s.length - 1;

    while(endIdx < s.length * 2) {
        if (startIdx === 0) {
            for(let i = startIdx; i < end)
        }
    }

};