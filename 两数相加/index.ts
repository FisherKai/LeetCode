/**
 * 题目
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 示例：
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

/**
 * 思路：
 * 当其中一个ListNode的next不为空，也就有值的时候就不断进行循环操作----》也就是对应每一位相加
 * 对于当前位加上标志位相加若大于10则对10求余，且标志进位为1。。。。下一次就是下一位的两位当前位相加再加标志位，循环上一步的操作
 * 还要考虑当相加完之后还有进位的情况，若flag不为0，则新创建一个ListNode保存下来并赋给当前ListNode的next
 */

class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

let listNode1 = new ListNode(5);
let listNode2 = new ListNode(5);

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    let l3 = new ListNode(), current = l3, flag = 0;
    while (l1 !== null || l2 !== null) {
        let result: number, l1Value = l1 ? l1.val : 0, l2Value = l2 ? l2.val : 0, sum = l1Value + l2Value + flag;
        result = sum % 10;
        flag = Math.floor(sum / 10);
        current.next = new ListNode(result);
        if (l1 !== null) l1 = l1.next;
        if (l2 !== null) l2 = l2.next;
        current = current.next;
    };
    if(flag!==0) current.next=new ListNode(flag);
    return l3.next;
};
console.log(addTwoNumbers(listNode1, listNode2));
