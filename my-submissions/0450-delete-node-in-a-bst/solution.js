/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var findSubtreeMin = function (node) {
    while (node !== null && node.left !== null) {
        node = node.left;
    }
    return node;
}

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
    if (root === null)
        return null;

    if (key < root.val)
        root.left = deleteNode(root.left, key);
    else if (key > root.val)
        root.right = deleteNode(root.right, key);
    else {
        // Case 1: Node has no children (leaf node)
        if (root.left === null && root.right === null) {
            return null;
        }
        // Case 2A: Node has only right child
        else if (root.left === null) {
            return root.right;
        }

        // Case 2B: Node has only left child
        else if (root.right === null) {
            return root.left;
        }
        // Case 3: Node has both children
        else {
            let successor = findSubtreeMin(root.right);
            root.val = successor.val;
            root.right = deleteNode(root.right, successor.val);
        }
    }
    return root;
};
