// Last updated: 9/16/2025, 3:10:23 PM
/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
   let  maxChunk = 0
   let chunk = 0
    for(let i=0;i<arr.length;i++){
        maxChunk = Math.max(arr[i],maxChunk)
        if(i===maxChunk)
            chunk++
    }
    return chunk
};