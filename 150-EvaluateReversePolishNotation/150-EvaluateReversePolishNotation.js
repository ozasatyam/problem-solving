// Last updated: 9/16/2025, 3:10:56 PM
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let stack = []
    for (token of tokens) {
        switch (token) {
            case "+": {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(Number(a) + Number(b))
                break;
            }
            case "-": {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a - b)
                break;
            }
            case "/": {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(Math.trunc(a / b))
                break;
            }
            case "*": {
                const b = stack.pop()
                const a = stack.pop()
                stack.push(a * b)
                break;
            }
            default:
                stack.push(token)
                break;

        }       
    }
    return Number(stack[0])
};