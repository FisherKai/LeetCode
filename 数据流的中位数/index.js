/**
 * 中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。
 * 例如，
 * [2,3,4] 的中位数是 3
 * [2,3] 的中位数是 (2 + 3) / 2 = 2.5
 * 设计一个支持以下两种操作的数据结构：
 * void addNum(int num) - 从数据流中添加一个整数到数据结构中。
 * double findMedian() - 返回目前所有元素的中位数。
 * 示例：
 * addNum(1)
 * addNum(2)
 * findMedian() -> 1.5
 * addNum(3) 
 * findMedian() -> 2
 * 进阶:
 * 如果数据流中所有整数都在 0 到 100 范围内，你将如何优化你的算法？
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/find-median-from-data-stream
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var MedianFinder = function () {
    this.maxHeap = new Heap()
    this.minHeap = new Heap()
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
    let maxSize = this.maxHeap.getSize()
    let minSize = this.minHeap.getSize()
    if (maxSize === 0) {
        this.maxHeap.insert(num, false)
    } else {
        if (this.maxHeap.getTop() > num) {
            this.maxHeap.insert(num, false)
        } else {
            this.minHeap.insert(num, true)
        }
        maxSize = this.maxHeap.getSize()
        minSize = this.minHeap.getSize()
        if (minSize > maxSize) {
            // 需要从小顶堆删除堆顶元素，并放入到大顶堆
            let top = this.minHeap.pop(true)
            this.maxHeap.insert(top, false)
        } else if (maxSize - 1 > minSize) {
            // 需要从大顶堆删除堆顶元素，并放入到小顶堆
            let top = this.maxHeap.pop(false)
            this.minHeap.insert(top, true)
        }
    }
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
    let maxSize = this.maxHeap.getSize()
    let minSize = this.minHeap.getSize()
    if (maxSize === minSize) {
        return (this.maxHeap.getTop() + this.minHeap.getTop()) / 2
    } else {
        return this.maxHeap.getTop()
    }
}

class Heap {
    constructor() {
        this.data = [0]
        this.count = 0
    }

    getTop() {
        return this.data[1]
    }

    pop(minFlag) {
        let top = this.data[1]
        if (this.count > 1) {
            this.data[1] = this.data[this.count]
            this.data.splice(this.count, 1)
            this.count--
            let i = 1
            if (minFlag) {
                while (true) {
                    let maxPos = i
                    if (
                        i * 2 <= this.count &&
                        this.data[i] > this.data[i * 2]
                    ) {
                        maxPos = i * 2
                    }
                    if (
                        i * 2 + 1 <= this.count &&
                        this.data[maxPos] > this.data[i * 2 + 1]
                    ) {
                        maxPos = i * 2 + 1
                    }
                    if (i === maxPos) {
                        break
                    }
                    this.swap(i, maxPos)
                    i = maxPos
                }
            } else {
                while (true) {
                    let maxPos = i
                    if (
                        i * 2 <= this.count &&
                        this.data[i] < this.data[i * 2]
                    ) {
                        maxPos = i * 2
                    }
                    if (
                        i * 2 + 1 <= this.count &&
                        this.data[maxPos] < this.data[i * 2 + 1]
                    ) {
                        maxPos = i * 2 + 1
                    }
                    if (i === maxPos) {
                        break
                    }
                    this.swap(i, maxPos)
                    i = maxPos
                }
            }
        } else {
            this.data.splice(this.count, 1)
            this.count--
        }
        return top
    }

    insert(val, minFlag) {
        this.count++
        this.data[this.count] = val
        let i = this.count
        if (minFlag) {
            while (
                parseInt(i / 2) > 0 &&
                this.data[i] < this.data[parseInt(i / 2)]
            ) {
                this.swap(i, parseInt(i / 2))
                i = parseInt(i / 2)
            }
        } else {
            while (
                parseInt(i / 2) > 0 &&
                this.data[i] > this.data[parseInt(i / 2)]
            ) {
                this.swap(i, parseInt(i / 2))
                i = parseInt(i / 2)
            }
        }
    }

    getSize() {
        return this.count
    }

    swap(i, j) {
        let temp = this.data[i]
        this.data[i] = this.data[j]
        this.data[j] = temp
    }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
var obj = new MedianFinder();
obj.addNum(-1);
console.log(obj.findMedian());
obj.addNum(-2);
console.log(obj.findMedian());
obj.addNum(-3);
console.log(obj.findMedian());
obj.addNum(-4);
console.log(obj.findMedian());
obj.addNum(-5);
console.log(obj.findMedian());