// https://leetcode.com/problems/reverse-nodes-in-k-group/submissions/1087833368/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {

  // to reverse sequence in O(1) space:
  // first node will connect to remaining list
  // all other nodes will connect to previous node

  let count = k;
  let segmentHead = null;
  let prevSegmentHead = null;
  let currentNode = head;
  let prevNode = null;
  let newHead = null;

  while (true) {
    // start on another segment
    if (count === 0) {
      count = k;
    }

    if (currentNode == null) {
      // list not long enough for another reverse
      // TODO need to undo reversal of current segment
      // segment will still be properly connected to previous segment, so we can start at segment head
      // to undo, start with first reversed node (prevNode)
      // get reference to rest of list before setting next node
      // set first node next to null
      // set remaining nodes' next to prevNode

      const numUndo = k - count - 1;
      console.log(`starting undo process with count: ${count} numUndo: ${numUndo}`)

      let undoCount = 0;
      let prevUndoNode = null;
      let nextUndoNode = prevNode;
      console.log(`starting undo process with node: ${nextUndoNode?.val}`)

      while (nextUndoNode && undoCount < numUndo) {
        let remaining = nextUndoNode.next;
        console.log(`UNDO linking: ${nextUndoNode.val} to: ${prevUndoNode?.val}`)
        nextUndoNode.next = prevUndoNode;

        prevUndoNode = nextUndoNode;
        nextUndoNode = remaining;

        undoCount++;
      }

      if (numUndo > 1) {
        console.log(`UNDO finished, linking segmentHead: ${segmentHead?.val} to: ${prevUndoNode?.val}`)
        segmentHead.next = prevUndoNode;
      }

      break;
    }

    if (count === k) {
      // first node will connect to remaining list
      if (segmentHead) {
        console.log(`setting prevSegmentHead: ${segmentHead.val}`)
        prevSegmentHead = segmentHead;
      }

      segmentHead = currentNode;
    }

    console.log(`current count: ${count} current node: ${currentNode.val}`)

    // store next node so we can move current node
    let next = currentNode.next;

    if (count < k) {
      console.log(`linking: ${currentNode.val} to: ${prevNode?.val}`)
      currentNode.next = prevNode;

      if (count === 1 && prevSegmentHead) {
        console.log(`connecting prev segment head to start of segment`)
        console.log(`linking: ${prevSegmentHead.val} to: ${currentNode.val}`)
        prevSegmentHead.next = currentNode;
      }
    }

    if (count === 1) {
      if (!newHead) newHead = currentNode;
      console.log(`connecting segment head to rest of chain`)
      console.log(`linking: ${segmentHead.val} to: ${next?.val}`)
      segmentHead.next = next;

      currentNode = segmentHead;
    }

    prevNode = currentNode;
    currentNode = next;
    count--;
  }

  return newHead;
};

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

const nodes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //[1, 2, 3, 4, 5, 6, 7, 8, 9];
let prevNode = null;
for (let i = nodes.length - 1; i >= 0; i--) {
  const node = new ListNode(nodes[i], prevNode);
  prevNode = node;
}

let newNode = reverseKGroup(prevNode, 7);
const newArr = [newNode.val];
const HARD_LIMIT = 100;
let currentLimitCount = 0;
while (newNode.next) {
  currentLimitCount++;
  if (currentLimitCount > HARD_LIMIT) break;
  newNode = newNode.next;
  newArr.push(newNode.val);
}
console.log(`final answer: ${newArr}`)