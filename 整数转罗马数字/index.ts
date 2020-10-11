/**
 * 罗马数字包含以下七种字符： I， V， X， L，C，D 和 M。
字符          数值
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
例如， 罗马数字 2 写做 II ，即为两个并列的 1。12 写做 XII ，即为 X + II 。 27 写做  XXVII, 即为 XX + V + II 。

通常情况下，罗马数字中小的数字在大的数字的右边。但也存在特例，例如 4 不写做 IIII，而是 IV。数字 1 在数字 5 的左边，
所表示的数等于大数 5 减小数 1 得到的数值 4 。同样地，数字 9 表示为 IX。这个特殊的规则只适用于以下六种情况：

I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。
X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 
C 可以放在 D (500) 和 M (1000) 的左边，来表示 400 和 900。
给定一个整数，将其转为罗马数字。输入确保在 1 到 3999 的范围内。

示例 1:

输入: 3
输出: "III"
示例 2:

输入: 4
输出: "IV"
示例 3:

输入: 9
输出: "IX"
示例 4:

输入: 58
输出: "LVIII"
解释: L = 50, V = 5, III = 3.
示例 5:

输入: 1994
输出: "MCMXCIV"
解释: M = 1000, CM = 900, XC = 90, IV = 4.
 */

function intToRoman(num: number): string {
    let result: string = '';
    let oneThousand: number, fiveHundred: number, oneHundred: number, fifty: number, ten: number, five: number, one: number;
    oneThousand = (num - num % 1000) / 1000;
    fiveHundred = (num % 1000 - num % 1000 % 500) / 500;
    oneHundred = (num % 1000 % 500 - num % 1000 % 500 % 100) / 100;
    fifty = (num % 1000 % 500 % 100 - num % 1000 % 500 % 100 % 50) / 50;
    ten = (num % 1000 % 500 % 100 % 50 - num % 1000 % 500 % 100 % 50 % 10) / 10;
    five = (num % 1000 % 500 % 100 % 50 % 10 - num % 1000 % 500 % 100 % 50 % 10 % 5) / 5;
    one = (num % 1000 % 500 % 100 % 50 % 10 % 5 - num % 1000 % 500 % 100 % 50 % 10 % 5 % 1) / 1;
    if (oneThousand > 0) {
        for (let index = 0; index < oneThousand; index++) {
            result += 'M';
        }
    }
    if (fiveHundred > 0) {
        for (let index = 0; index < fiveHundred; index++) {
            result += 'D';
        }
    }
    if (oneHundred > 0) {
        for (let index = 0; index < oneHundred; index++) {
            result += 'C';
        }
    }
    if (fifty > 0) {
        for (let index = 0; index < fifty; index++) {
            result += 'L';
        }
    }
    if (ten > 0) {
        for (let index = 0; index < ten; index++) {
            result += 'X';
        }
    }
    if (five > 0) {
        for (let index = 0; index < five; index++) {
            result += 'V';
        }
    }
    if (one > 0) {
        for (let index = 0; index < one; index++) {
            result += 'I';
        }
    }
    // 处理特殊情况
    result.indexOf('DCCCC') !== -1 && (result = result.replace('DCCCC', 'CM'));
    result.indexOf('CCCC') !== -1 && (result = result.replace('CCCC', 'CD'));
    result.indexOf('LXXXX') !== -1 && (result = result.replace('LXXXX', 'XC'));
    result.indexOf('XXXX') !== -1 && (result = result.replace('XXXX', 'XL'));
    result.indexOf('VIIII') !== -1 && (result = result.replace('VIIII', 'IX'));
    result.indexOf('IIII') !== -1 && (result = result.replace('IIII', 'IV'));
    return result;
};

console.log(intToRoman(1994));