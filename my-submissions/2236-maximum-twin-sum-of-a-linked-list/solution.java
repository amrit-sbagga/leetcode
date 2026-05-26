/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public int pairSum(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        // Step 1: Get middle of the linked list
        while (fast != null && fast.next != null) {
            fast = fast.next.next;
            slow = slow.next;
        }

        // Step 2: Reverse second half of the linked list
        ListNode prev = null;
        ListNode nextNode = null;
        while (slow != null) {
            nextNode = slow.next;
            slow.next = prev;
            prev = slow;
            slow = nextNode;
        }

        // Step 3: Find the maximum twin sum
        ListNode start = head;
        int maxSum = 0;
        while (prev != null) {
            maxSum = Math.max(maxSum, start.val + prev.val);
            prev = prev.next;
            start = start.next;
        }

        return maxSum;
    }
}
