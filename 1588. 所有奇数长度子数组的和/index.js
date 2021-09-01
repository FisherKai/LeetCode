/**
 * 给你一个正整数数组 arr ，请你计算所有可能的奇数长度子数组的和。
 * 子数组 定义为原数组中的一个连续子序列。
 * 请你返回 arr 中 所有奇数长度子数组的和 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sum-of-all-odd-length-subarrays
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let res = 0, len = arr.length;
    for (let i = 1; i <= len; i + 2) {
        for (let index = 0; index < array.length; index + i) {
            const element = array[index];

        }
    }
    console.log(res);
};
sumOddLengthSubarrays([1, 4, 2, 5, 3])
