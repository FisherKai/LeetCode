/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * 思路：
 * 生成两个快慢指针，初始让快慢指针相距n，这样等快指针指向尾节点时慢指针正好指向要删除的节点
 * 注意要判断n，如果快慢指针最后都指向头节点以及快指针越界的情况
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head, slow = head, count = n;
    // 让快指针与慢指针相距n个节点
    while (count--) {
        fast = fast.next;
    }
    // 如果慢指针和快指针值相等
    if (fast == slow) {
        return head.next;
    }
    // 然后同时移动快慢指针
    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var List = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(removeNthFromEnd(List, 2));