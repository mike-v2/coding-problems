// https://leetcode.com/problems/merge-k-sorted-lists/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {

  // while there are still non-empty lists
  //   find smallest node among remaining lists
  //   remove smallest node from its linked list
  //   add smallest node to new sorted list
  //   keep a reference to last sorted node to link to smallest node

  let listIndex = getSmallestNode(lists);
  if (listIndex < 0) return null;

  const head = lists[listIndex];
  let lastSortedNode = head;

  // remove list from array if empty, otherwise advance to next node
  if (lists[listIndex].next == null) {
    lists.splice(listIndex, 1);
  } else {
    lists[listIndex] = lists[listIndex].next;
  }

  while (lists.length > 0) {
    listIndex = getSmallestNode(lists);
    if (listIndex < 0) break;

    lastSortedNode.next = lists[listIndex];
    lastSortedNode = lists[listIndex];

    if (lists[listIndex].next == null) {
      lists.splice(listIndex, 1);
    } else {
      lists[listIndex] = lists[listIndex].next;
    }
  }

  return head;
};

function getSmallestNode(lists) {
  let smallestValue = Infinity;
  let listIndex = -1;

  for (let i = 0; i < lists.length; i++) {
    if (!lists[i]) continue;
    if (lists[i].val < smallestValue) {
      smallestValue = lists[i].val;
      listIndex = i;
    }
  }

  return listIndex;
}