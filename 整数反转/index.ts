/**
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 示例 1:
 * 输入: 123
 * 输出: 321
 * 示例 2:
 * 输入: -123
 * 输出: -321
 * 示例 3:
 * 输入: 120
 * 输出: 21
 * 注意:
 * 假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

function reverse(x: number): number {
    let numStr = x.toString();
    let flag = true; //true 代表正数，false代表负数
    let resultStr = '', resultStack = [];
    for (let index = 0; index < numStr.length; index++) {
        if (numStr.charAt(index) === '-') {
            flag = false;
            continue;
        }
        if (numStr.charAt(index) !== '-' || numStr.charAt(index) !== '+') {
            resultStack.push(numStr.charAt(index));
        }
    }
    resultStack.reverse();
    resultStack.forEach(function (e) {
        resultStr += e;
    })
    let result = flag ? Number(resultStr) : -Number(resultStr);
    return result > (2 ** 31 - 1) || result <(-2) ** 31 ? 0 : result;
};
console.log(reverse(1534236469));

