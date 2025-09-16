// Last updated: 9/16/2025, 3:09:54 PM
/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (blocks, k) {
    let operations = 0
    let leastOperations = 0
    for (let i = 0; i < blocks.length; i++) {
        let startIndex = i - k 

        if (startIndex >= 0) {
            blocks[startIndex] == "W" && operations--
            blocks[i] == "W" && operations++
            if (leastOperations > operations)
                leastOperations = operations
        } else if (blocks[i] == "W") {
            operations++
            leastOperations++
        }

    }
    // console.log(leastOperations)
    return leastOperations == Infinity ? operations :leastOperations
};