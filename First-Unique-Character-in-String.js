/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let ans = {};
  let done = {};
  for (i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch in ans) {
      done[ch] = i;
      delete ans[ch];
    } else if (!(ch in done)) {
      ans[ch] = i;
    }
  }

  return Object.values(ans)[0] ?? -1;
};
firstUniqChar("leetcode");
