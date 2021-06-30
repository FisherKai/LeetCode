/**
 * 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 * 说明：你不能倾斜容器。
 */

/**
 * @param {number[]} height
 * @return {number}
 */
/**
 * 双重for循环暴力破解不行！leetcode会显示时间超时，太慢了。。。
 */
var maxArea = function (height) {
    if (!height || height.length < 2) { return 0 }

    let maxA = 0;
    for (let i = 0; i < height.length; i++) {
        const i_item = height[i];
        for (let j = i + 1; j < height.length; j++) {
            const j_item = height[j];
            let min = i_item > j_item ? j_item : i_item;
            if (min * (j - i) > maxA) {
                maxA = min * (j - i)
            }
        }
    }
    return maxA;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))