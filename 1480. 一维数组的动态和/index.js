/**
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
 * 请返回 nums 的动态和。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/running-sum-of-1d-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    let result = [];
    for (let index = 0; index < nums.length; index++) {
        const element = nums[index];
        if (index === 0) {
            result.push(element)
        } else {
            let res = element, i = index;
            while (i !== 0) {
                res += nums[--i];
            }
            result.push(res)
        }
    }
    return result;
};

let s = runningSum([1, 2, 3, 4]);
console.log(s);