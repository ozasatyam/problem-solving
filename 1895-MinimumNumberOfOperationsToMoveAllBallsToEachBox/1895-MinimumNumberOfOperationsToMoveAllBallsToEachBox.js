// Last updated: 9/16/2025, 3:10:01 PM
/**
 * @param {string} boxes
 * @return {number[]}
 */
var minOperations = function (boxes) {
    let sums = []
    let balls = 0;
    let moves = 0;
    for(const char of boxes)
    {
        sums.push(balls+moves)
        moves += balls
        balls = balls + parseInt(char)
        // console.log(balls,moves)
    }
    balls =0
    moves =0
        for(let i=boxes.length-1;i>-1;i--)
    {
        sums[i] += (balls+moves)
        moves += balls
        balls = balls + parseInt(boxes[i])
        // console.log(balls,moves)
    }
    // console.log(sums)
    return sums
    // let total = 0
    // const n = boxes.length
    // const ans = []
    // const positions = []
    // for (let i = 0; i < n; i++) {
    //     total = total + i
    //     if (boxes[i]!='0') {
    //         positions.push(i)
    //     }
    // }
    // for (let i = 0; i < n; i++) {

    //         let total = 0
    //         for (let j = 0; j < positions.length; j++) {
    //             if (positions[j] != i)
    //                 total = total + Math.abs((positions[j] - i))
    //         }
    //         ans.push(total)
        
    // }
    // // console.log(ans,positions)
    // return ans
};