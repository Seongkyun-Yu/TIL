/**
 * https://leetcode.com/problems/baseball-game/submissions/
 * @param {string[]} ops
 * @return {number}
 */
 var calPoints = function(ops) {
    const scores = [];
    
    for (const score of ops) {
        if (Number(score)) scores.push(+score); 
        else if (score === "C") scores.pop();
        else if (score === "D") scores.push(scores[scores.length - 1] * 2);
        else if (score === "+") scores.push(scores[scores.length - 1] + scores[scores.length - 2])
    }
    
    return scores.reduce((acc, cur)=> acc + cur, 0)
};