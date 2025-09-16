// Last updated: 9/16/2025, 3:10:39 PM
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {


    let n = citations.length
    let arr = new Array(n+1)
    arr.fill(0)
    for(let val of citations){
        arr[Math.min(val,n)] +=  1  
    }
    let paperCount = arr[n]
    let h = n
    while(h> paperCount){
        h--
        paperCount += arr[h]
    }
    return h

    // const shorted = citations.sort((a, b) => (b - a))
    // for (let i = 0; i < citations.length; i++) {

    //     if ((i + 1) <= citations[i]) {
    //         h = i + 1
    //     } else {
    //         break
    //     }

    // }
    // return h
};