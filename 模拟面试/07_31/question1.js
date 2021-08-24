/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

var NodeListA = new ListNode(0);
NodeListA.next = new ListNode(9);
NodeListA.next.next = new ListNode(1);
NodeListA.next.next.next = new ListNode(2);
NodeListA.next.next.next.next = new ListNode(3);

var NodeListB = new ListNode(3);
NodeListB.next = new ListNode(2);
NodeListB.next.next = new ListNode(4);
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let flagA = headA, flagB = headB;
    let result = new ListNode(), resFlag = result;
    while (flagA.next != null) {
        while (flagB.next != null) {
            console.log(flagB, flagA);
            if (flagB.val === flagA.val) {
                resFlag.next = new ListNode(flagB.val);
                resFlag.next = resFlag.next.next;
            }
            flagB = flagB.next;
        }
        flagA = flagA.next;
    }
    console.log(result.next);
};

getIntersectionNode(NodeListA, NodeListB)