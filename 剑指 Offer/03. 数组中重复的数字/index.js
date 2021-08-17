/**
 * 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，
 * 但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。
 * @param {Array} nums
 * @return {number}
 */
var findRepeatNumber1 = function (nums) {
    if (nums == null || nums.length === 0 || !Array.isArray(nums)) {
        return;
    }
    nums.sort((a, b) => { return a - b; });
    for (let j = 1, i = 0; j < nums.length; j++, i++) {
        if (nums[i] === nums[j]) {
            return nums[i];
        }
    }
};

var l1 = [2, 3, 1, 0, 2, 5, 3];

findRepeatNumber2(l1);