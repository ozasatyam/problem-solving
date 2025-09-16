// Last updated: 9/16/2025, 3:09:40 PM
/**
 * @param {string[]} words
 * @return {number}
 */
var countPrefixSuffixPairs = function(words) {
    let n = words.length
    let ans=0
    for(let i=0;i<n;i++){
        let s1 = words[i]
        for(let j=i+1; j<n;j++){
            let s2 = words[j]
        if(s2.length<s1.length) continue
        let pre= s2.slice(0,s1.length)
         let suf= s2.slice(-s1.length)
         if(pre===s1&&suf===s1)
            ans++

        }
    }
    return ans
};