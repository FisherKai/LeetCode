/**
 * 给定一个正整数数组 w ，其中 w[i] 代表下标 i 的权重（下标从 0 开始），
 * 请写一个函数 pickIndex ，它可以随机地获取下标 i，选取下标 i 的概率与 w[i] 成正比。
 * 例如，对于 w = [1, 3]，挑选下标 0 的概率为 1 / (1 + 3) = 0.25 （即，25%），而选取下标 1 的概率为 3 / (1 + 3) = 0.75（即，75%）。
 * 也就是说，选取下标 i 的概率为 w[i] / sum(w) 。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/random-pick-with-weight
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {number[]} w
 */
var Solution = function (w) {
    this.wList = w || [];
    this.sum = this.wList.reduce((pre, current) => {
        return pre + current;
    });
    this.pre = new Array(w.length).fill(0);
    this.pre[0] = w[0];
    for (let i = 1; i < w.length; ++i) {
        this.pre[i] = this.pre[i - 1] + w[i];
    }
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function () {
    let probability = (Math.random() * this.sum);
    let index = 0;
    for (; index < this.pre.length; index++) {
        const element = this.pre[index];
        if (element >= probability)
            break;
    }
    console.log(probability,index);
    return index;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
var obj = new Solution([1])
var param_1 = obj.pickIndex()
console.log(param_1);