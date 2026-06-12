/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestZigZag = function (root) {
    let ans = 0;


    function dfs(node, goLeft, length) {
        if (!node) return;

        // update max length
        ans = Math.max(ans, length);

        if (goLeft) {
            // if we go left, next must be right
            dfs(node.left, false, length + 1);
            // restart fresh on right
            dfs(node.right, true, 1);
        } else {
            dfs(node.right, true, length + 1);
            dfs(node.left, false, 1);
        }
    }

    dfs(root, true, 0);   // assume start left
    dfs(root, false, 0);  // assume start right

    return ans;
};
