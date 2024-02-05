/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let ans = "";
  let pre = "";
  strs.sort();
  for (let i = 0; i < strs[0].length; i++) {
    const substring = ans + strs[0][i];
    if (strs.every((ar) => ar.includes(substring))) {
      ans = substring;
      if (ans.length > pre.length) {
        pre = ans;
      }
    } else {
      ans = "";
    }
  }
  console.log(pre);
};
longestCommonPrefix(["flower", "flow", "flight"]);
