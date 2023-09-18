// https://leetcode.com/problems/add-two-numbers/description/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// this method does not work with very large numbers due to lack of precision
// numbers with more than ~21 digits get rounded and converted to scientific notation
// therefore, we must do digit-wise addition

/* const convertToNum = (node) => {
    let currentNode = node;
    let str = currentNode.val.toString();
    while (currentNode.next) {
        currentNode = currentNode.next;
        str += currentNode.val.toString();
    }
    return parseInt(str.split('').reverse().join(''));
}

var addTwoNumbers = function(l1, l2) {
    let n1 = convertToNum(l1);
    console.log('n1 = ' + n1);
    let n2 = convertToNum(l2);
    console.log('n2 = ' + n2);

    let answerBigInt = BigInt(n1) + BigInt(n2);
    let answerStr = answerBigInt.toString().split('').reverse().join('');
    console.log("answerStr = " + answerStr);

    let head = new ListNode(parseInt(answerStr[0]));
    let current = head;

    for (let i=1; i<answerStr.length; i++) {
        let next = new ListNode(parseInt(answerStr[i]))
        current.next = next;
        current = next;
    }

    return head;
}; */

var addTwoNumbers = function (l1, l2) {
  let sumStr = '';
  let remainder = 0;
  let current1 = l1;
  let current2 = l2;

  let currentSum = current1.val + current2.val + remainder;
  if (currentSum > 9) {
    remainder = 1;
    currentSum %= 10;
  }

  sumStr = currentSum.toString();

  while (current1.next || current2.next) {
    currentSum = remainder;
    remainder = 0;

    if (current1.next) {
      current1 = current1.next;
      currentSum += current1.val;
    }

    if (current2.next) {
      current2 = current2.next;
      currentSum += current2.val;
    }

    if (currentSum > 9) {
      remainder = 1;
      currentSum %= 10;
    }

    sumStr = currentSum.toString() + sumStr;
  }

  if (remainder > 0) sumStr = remainder.toString() + sumStr;
  console.log('sumStr final = ' + sumStr);

  let head = new ListNode(sumStr[sumStr.length - 1]);
  let prev = head;
  for (let i = sumStr.length - 2; i >= 0; i--) {
    let current = new ListNode(sumStr[i]);
    prev.next = current;
    prev = current;
  }

  return head;
};