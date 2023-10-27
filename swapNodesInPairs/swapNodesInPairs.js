// https://leetcode.com/problems/swap-nodes-in-pairs/description/

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
var swapPairs = function (head) {

  // initialize by setting node 2's next to node 1 and keeping a reference to lastSwapped
  // while there are still two nodes left:
  // connect lastSwapped to second node
  // freeze a reference to the rest of the chain otherwise it will be lost
  // connect second node to first
  // connect original first node to null just in case this is the end

  if (!head || !head.next) {
    return head;
  }

  const newHead = head.next;
  // get a reference to the rest of the chain
  let nextUnswapped = head.next.next;
  // swap first and second
  head.next.next = head;
  let lastSwapped = head;
  // reset in case it's the end of the chain
  lastSwapped.next = null;

  while (nextUnswapped && nextUnswapped.next) {
    // connect the chain
    lastSwapped.next = nextUnswapped.next;
    // get a reference to the rest of the chain
    const next = nextUnswapped.next.next;
    // connect second node to first
    nextUnswapped.next.next = nextUnswapped;
    // break the original first node's connection
    nextUnswapped.next = null;

    lastSwapped = nextUnswapped;
    nextUnswapped = next;
  }

  if (nextUnswapped) lastSwapped.next = nextUnswapped;

  return newHead;
};