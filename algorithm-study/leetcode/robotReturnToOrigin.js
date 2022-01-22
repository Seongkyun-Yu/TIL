/**
 * https://leetcode.com/problems/robot-return-to-origin/
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    const table = {
        "U": 1,
        "D": -1,
        "L": -1,
        "R": 1
    }
    
    let udCount = 0;
    let lrCount = 0;
    
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === "U" || moves[i] === "D") udCount += table[moves[i]];
        else lrCount += table[moves[i]];
    }
    
    return udCount === 0 && lrCount === 0
};