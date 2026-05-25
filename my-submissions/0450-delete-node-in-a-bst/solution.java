/**
 * Definition for a binary tree node.
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode() {}
 *     TreeNode(int val) { this.val = val; }
 *     TreeNode(int val, TreeNode left, TreeNode right) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class Solution {
    public static TreeNode findSubtreeMin(TreeNode node) {
        while (node != null && node.left != null) {
            node = node.left;
        }
        return node;
    }

    public TreeNode deleteNode(TreeNode root, int key) {
        if (root == null) {
            return root;
        }

        if (root.val < key) {
            root.right = deleteNode(root.right, key);
        } else if (root.val > key) {
            root.left = deleteNode(root.left, key);
        } else {
             // Case 1: Node has no children (leaf node)
            if (root.right == null && root.left == null) {
                return null;
            }

             // Case 2A: Node has only right child
            else if (root.left == null) {
                return root.right;
            }

            // Case 2B: Node has only left child
            else if (root.right == null) {
                return root.left;
            }

            // Case 3: Node has both children
            else {
                TreeNode successor = findSubtreeMin(root.right);
                root.val = successor.val;
                root.right = deleteNode(root.right, successor.val);
            }
            
        }
        return root;
    }
}
