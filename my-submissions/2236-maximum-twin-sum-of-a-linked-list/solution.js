/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
    let slow = head;
    let fast = head;

    // Get middle of the linked list
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    // Reverse second half of the linked list
    let prev = null;
    while (slow != null) {
        // nextNode = slow.next;
        // slow.next = prev;
        // prev = slow;
        // slow = nextNode;
        // Destructuring assignment swaps the pointers simultaneously
        [slow.next, prev, slow] = [prev, slow, slow.next];
    }

    let start = head;
    let maxSum = 0;
    while (prev != null) {
        maxSum = Math.max(maxSum, start.val + prev.val);
        prev = prev.next;
        start = start.next;
    }

    return maxSum;
};
