/**
 * https://leetcode.com/problems/goal-parser-interpretation/
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    let result = "";
    let temp = "";
    for(let i = 0; i < command.length; i++) {
        if (command[i] === "G") result += command[i];
        else if (command[i] === ")") {
            temp += command[i];
            if (temp === "()") result += "o";
            else result += "al";
            temp = "";
        } else {
            temp += command[i];
        }
    }
    
    return result;
};