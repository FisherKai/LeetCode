/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。返回删除后的链表的头节点
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    if (head == null) {
        return head;
    }

    // 如果删除头节点
    if (head.val === val) {
        head = head.next;
    }

    let f = head.next, s = head;
    while (f) {
        if (f.val == val) {
            s.next = f.next;
        }
        f = f.next;
        s = s.next;
    }
    return head;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var List = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));

deleteNode(List, 3);