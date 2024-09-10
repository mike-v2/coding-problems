/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertGreatestCommonDivisors = function(head) {
    // cycle through next to find adjacent nodes, store prevNode
    // create funtion to find greatest divisor
    //   starting with the smaller number, check if current divides both numbers (mod == 0)
    //   if not, reduce current by one and repeat
    // insert new node by setting prevNode.next, set new node's next to current

    let current = head;
    let prev = head;

    while (current.next) {
        current = current.next;
        const divisor = findGreatestDivisor(prev.val, current.val);
        const inserted = new ListNode(divisor, current);
        prev.next = inserted;
        prev = current;
    }

    return head;
};

function findGreatestDivisor(a, b) {
    let current = Math.min(a,b);
    while (current > 1) {
        if (a % current === 0 && b % current === 0) break;
        current--;
    }
    return current;
}