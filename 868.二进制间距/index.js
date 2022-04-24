/**
 * https://leetcode-cn.com/problems/binary-gap/
 */

/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function (n) {
    const binaryNum = n.toString('2');
    console.log(binaryNum);
    let flag = true, len = 1; //用来记录最长间距
    let i = 0, j = 1;
    while (i < binaryNum.length - 1 && j < binaryNum.length - 1) {
        if (binaryNum[i] == 1 && binaryNum[j] == 0) {
            j++;
            if (flag === true) {
                len++;
            }
            flag = false
        } else {
            flag = true
            i++;
            j++;
        }
    }
    if (!flag) len--;
    return len;
};

binaryGap(5)