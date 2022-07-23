/**
 * https://leetcode.com/problems/evaluate-reverse-polish-notation/submissions/
 * @param {string[]} tokens
 * @return {number}
 */
 var evalRPN = function(tokens) {
    const stack = [];
    
    for(let i = 0; i < tokens.length; i++) {
        if (isNaN(Number(tokens[i]))) {
            const num2 = Number(stack.pop());
            const num1 = Number(stack.pop());
            
            if (tokens[i] === "+") stack.push(num1 + num2);
            else if (tokens[i] === "-") stack.push(num1 - num2);
            else if (tokens[i] === "*") stack.push(num1 * num2);
            else stack.push(Math.trunc(num1 / num2));
        } else {
            stack.push(tokens[i]);
        }
    }

    return stack[0];
};