// Last updated: 9/16/2025, 3:11:18 PM
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function (words, maxWidth) {
    const word = []
    const ans = []
    let i = 0
    word[0] = []
    let length = 0
    for (const str of words) {
        if ((length + str.length + word[i].length - 1) < maxWidth) {
            word[i].push(str)
            length += str.length
        } else {
            ans.push([])
            if (word[i].length == 1) {
                ans[i] += word[i][0]
                ans[i] += " ".repeat(maxWidth - word[i][0].length)

            } else {

                const totalSpaces = maxWidth - length;
                const gaps = word[i].length - 1;

                let findSpace = Math.floor(totalSpaces / gaps);
                let extraSpace = totalSpaces % gaps;

                let j = 0
                for (; j < word[i].length - 1; j++) {
                    ans[i] += word[i][j]
                    ans[i] += " ".repeat(findSpace + (extraSpace > 0 ? 1 : 0))
                    extraSpace--;
                }
                ans[i] += word[i][j]
            }
            i++
            word.push([])
            word[i].push(str)
            length = str.length
        }
    }
    ans.push(word[i].join(" "))
    ans[ans.length - 1] += " ".repeat(maxWidth - ans[i].length)

    return ans
};