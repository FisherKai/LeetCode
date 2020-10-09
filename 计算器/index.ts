
/**
 * 给定一个包含正整数、加(+)、减(-)、乘(*)、除(/)的算数表达式(括号除外)，计算其结果。
 * 表达式仅包含非负整数，+， - ，*，/ 四种运算符和空格  。 整数除法仅保留整数部分。
 * 示例 1:
 * 输入: "3+2*2"
 * 输出: 7
 * 示例 2:
 * 输入: " 3/2 "
 * 输出: 1
 * 示例 3:
 * 输入: " 3+5 / 2 "
 * 输出: 5
 * 说明：
 * 你可以假设所给定的表达式都是有效的。
 * 请不要使用内置的库函数 eval。
 */

function calculate(s: string): number {
    if (!(s.length > 0)) { return; }
    // 去掉字符串中的空格
    s = s.replace(/\s*/g, '');
    // 定义处理栈
    let stack = [], c, flag = false;
    for (let index = 0; index < s.length; index++) {
        if (flag) { continue; }
        c = s.charAt(index);
        if (c !== "*" && c !== "/") {
            stack.push(c);
            flag = false;
        } else {
            flag = true;
            c === "*" && stack.push(Number(stack.pop()) * Number(s.charAt(index + 1)));
            c === "/" && stack.push(Math.floor(Number(stack.pop()) / Number(s.charAt(index + 1))));
        }
    }
    // 此时栈内只有加减法了
    let result: any = '', temp;
    console.log(stack);
    while (stack.length > 0) {
        temp = stack.pop();
        if (temp === '+') {
            temp = stack.pop();
            result = Number(result) + Number(temp);
        } else if (temp === '-') {
            temp = stack.pop();
            result = Number(result) - Number(temp);
        } else {
            result += (temp);
        }
    }

    return result;
};
console.log(calculate("18+8/2"));