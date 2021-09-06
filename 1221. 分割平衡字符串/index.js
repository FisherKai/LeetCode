/**
 * 在一个 平衡字符串 中，'L' 和 'R' 字符的数量是相同的。
 * 给你一个平衡字符串 s，请你将它分割成尽可能多的平衡字符串。
 * 注意：分割得到的每个字符串都必须是平衡字符串。
 * 返回可以通过分割得到的平衡字符串的 最大数量 。
 * https://leetcode-cn.com/problems/split-a-string-in-balanced-strings/
 */
/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    let result = 0, d = 0;
    for (let index = 0; index < s.length; index++) {
        const ch = s[index];
        ch === 'L' ? d++ : d--;
        if (d === 0) {
            result++;
        }
    }
    return result;
};