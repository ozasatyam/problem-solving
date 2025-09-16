// Last updated: 9/16/2025, 3:10:42 PM
/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
    let sign = 1;
    let numbers = 0
    let result = 0
    let stack = []
    for (let st of s) {

        if (!isNaN(parseInt(st))) {
            numbers = numbers * 10 + parseInt(st)
        } else if (st === "+") {
            result += numbers * sign
            sign = 1
            numbers = 0
        } else if (st === "-") {
            result += numbers * sign
            sign = -1
            numbers = 0
        } else if (st === "(") {
            stack.push(result)
            stack.push(sign)
            result = 0
            sign = 1
        } else if (st === ")") {
            result += (sign * numbers)
            result *= stack.pop()
            // result = result * a
            // let b = stack.pop()
            result += stack.pop()
            numbers = 0
        }
    }
    return result +  numbers * sign
    // console.log(result)

};