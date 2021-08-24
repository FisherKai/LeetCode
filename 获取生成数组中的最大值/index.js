/**
 * 给你一个整数 n 。按下述规则生成一个长度为 n + 1 的数组 nums ：
 * nums[0] = 0
 * nums[1] = 1
 * 当 2 <= 2 * i <= n 时，nums[2 * i] = nums[i]
 * 当 2 <= 2 * i + 1 <= n 时，nums[2 * i + 1] = nums[i] + nums[i + 1]
 * 返回生成数组 nums 中的 最大 值。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/get-maximum-in-generated-array
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function (n) {
    let nums = [], m = 0;
    while (m <= n) {
        if (m === 0) {
            nums[m] = 0;
        } else if (m === 1) {
            nums[m] = 1;
        } else {
            switch (m % 2) {
                case 0:
                    nums[m] = nums[m / 2];
                    break;
                case 1:
                    nums[m] = nums[Math.ceil(m / 2)] + nums[Math.floor(m / 2)];
                    break;
            }
        }
        m++;
    }
    // nums.sort((a, b) => a - b)
    // return nums[n];
    return Math.max(...nums);
};

getMaximumGenerated(7);