// Last updated: 9/16/2025, 3:09:46 PM
/**
 * @param {string[]} words
 * @param {number[][]} queries
 * @return {number[]}
 */
var vowelStrings = function (words, queries) {
    let vowels = new Set(['a', 'e', 'i', 'o', 'u'])
    let ans = [];
    let vowelsContain = new Array(words.length).fill(0)
    for (let i = 0; i < words.length; i++) {
         vowelsContain[i+1] = vowelsContain[i]
        if (vowels.has(words[i].at(0)) && vowels.has(words[i].at(words[i].length - 1)))
            vowelsContain[i+1] = vowelsContain[i]+1       
    }
    for (let j = 0; j < queries.length; j++) {
       ans[j]=vowelsContain[queries[j][1]+1]-vowelsContain[queries[j][0]] 
    }
    return ans
};