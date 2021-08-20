/**
 * 给定一个字符串 s 和一个整数 k，从字符串开头算起，每 2k 个字符反转前 k 个字符。
 * 如果剩余字符少于 k 个，则将剩余字符全部反转。
 * 如果剩余字符小于 2k 但大于或等于 k 个，则反转前 k 个字符，其余字符保持原样。
 */
/**
* @param {string} s
* @param {number} k
* @return {string}
*/
var reverseStr = function (s, k) {
    let sArr = Array.from(s),
        sLength = sArr.length,
        res = '';
    if (k > sLength) {
        res = sArr.reverse().join('');
    } else {
        res += sArr.slice(0, k).reverse().join('') + sArr.slice(k, 2 * k).join('') + reverseStr(sArr.slice(2 * k, sLength).join(''), k);
    }
    return res;
};

let str = 'abcdefg';
console.log(reverseStr(str, 2))