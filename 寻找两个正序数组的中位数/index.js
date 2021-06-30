/**
 * 给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    if (!nums1 || !nums2) return 0;
    let containArr = [...nums1, ...nums2].sort((a, b) => { return a - b });
    console.log(containArr);
    // 取中位索引 ceil向上 floor向下 round四舍五入
    let index = Math.floor((containArr.length - 1) / 2);
    if (containArr.length % 2 == 1) {
        return containArr[index];
    } else {
        return (containArr[index] + containArr[index + 1]) / 2;
    }
};

let a = [1, 3];
let b = [2];
var temp = findMedianSortedArrays(a, b);
console.log(temp);