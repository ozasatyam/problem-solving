// Last updated: 9/16/2025, 3:10:55 PM
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
      const stack = [];
    s = s.trim() + ' ';
    let index = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') {
            if (index < i) {
                const word = s.slice(index, i);
                if (word.trim()) {
                    stack.push(word);
                }
            }
            index = i + 1;
        }
    }

    return stack.reverse().join(' ');
//    return s.split(' ').reverse().filter((x) => x !== "").join(' ')
    
};