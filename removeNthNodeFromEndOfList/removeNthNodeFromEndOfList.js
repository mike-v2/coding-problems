// https://leetcode.com/problems/remove-nth-node-from-end-of-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {

  // march to the end of the list to determine the length
  // keep an array of nodes in order to reference them
  // to remove node, check if first node in which case return second node
  // check if last node to set previous next to null
  // else change the previous node's next value

  /* 
      const nodes = [head];
      let currentNode = head;
      while (currentNode.next) {
          nodes.push(currentNode.next);
          currentNode = currentNode.next;
      }
  
      const removingIndex = nodes.length - n;
  
      if (nodes.length === n) {
          if (nodes.length === 1) return null;
          return nodes[1];
      } else if (n === 1) {
          nodes[removingIndex - 1].next = null;
      } else {
          nodes[nodes.length - n - 1].next = nodes[nodes.length - n + 1];
      }
  
      return nodes[0];
   */


  // the above method may require too much storage since we are storing each node
  // instead of storing all of them, we only need to store the one that is n units from the current count
  // actually store the n-1 node because we need to change its next value

  let beforeRemoval = null;
  let currentNode = head;
  let count = 1;

  while (currentNode.next) {
    currentNode = currentNode.next;
    count++;
    if (count === n + 1) {
      beforeRemoval = head;
    } else if (count > n + 1) {
      beforeRemoval = beforeRemoval.next;
    }
  }

  if (count === 1) return null;

  if (count === n) {
    return head.next;
  } else if (n === 1) {
    beforeRemoval.next = null;
  } else {
    beforeRemoval.next = beforeRemoval.next.next;
  }

  return head;
};