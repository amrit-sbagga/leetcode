/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
    let first = -1;

    let last = -1;

    let minDistance = Infinity;

    let position = 1;

    let prev = head;

    let curr = head.next;

    while (curr !== null && curr.next !== null) {
        const isCritical =
            (curr.val > prev.val && curr.val > curr.next.val) ||
            (curr.val < prev.val && curr.val < curr.next.val);

        if (isCritical) {
            if (first === -1) {
                first = position;
            } else {
                minDistance = Math.min(minDistance, position - last);
            }

            last = position;
        }

        prev = curr;

        curr = curr.next;

        position++;
    }

    if (first === -1 || first === last) {
        return [-1, -1];
    }

    const maxDistance = last - first;

    return [minDistance, maxDistance];
};
