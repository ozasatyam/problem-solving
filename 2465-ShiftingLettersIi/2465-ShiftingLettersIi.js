// Last updated: 9/16/2025, 3:09:52 PM
/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
    const n = s.length
    let prefix = Array(n + 1).fill(0)
    let string = s
    for (const shift of shifts) {
        if (shift[2]) {
            prefix[shift[0]] += 1
            prefix[shift[1] + 1] -= 1
        } else {
            prefix[shift[1] + 1] = prefix[shift[1] + 1] + 1
            prefix[shift[0]] = prefix[shift[0]] - 1
        }
    }

    let shift = 0;
    const result = Array(n);

    for (let i = 0; i < n; i++) {
        shift = (shift + prefix[i]) % 26;
        // Shift the current character and add to result array
        const base = 'a'.charCodeAt(0);
        const newCharCode = ((s.charCodeAt(i) - base + shift) % 26 + 26) % 26 + base;
        result[i] = String.fromCharCode(newCharCode);
    }

    // Join the result array to form the final shifted string
    return result.join('');
};