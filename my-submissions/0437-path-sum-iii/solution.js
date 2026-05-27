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
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
    let prefixSumCount = new Map();
    prefixSumCount.set(0, 1);

    const dfs = (node, currentSum) => {
        if(!node) return 0;

        currentSum += node.val;
        let count = prefixSumCount.get(currentSum - targetSum) || 0;

        prefixSumCount.set(currentSum, (prefixSumCount.get(currentSum) || 0) + 1);

        count += dfs(node.left, currentSum);
        count += dfs(node.right, currentSum);

        prefixSumCount.set(currentSum, prefixSumCount.get(currentSum) - 1);
        if(prefixSumCount.get(currentSum) === 0){
           prefixSumCount.delete(currentSum)
        }

        return count;
    }

    return dfs(root, 0);
};
// root =[10,5,-3,3,2,null,11,3,-2,null,1], targetSum = 8, output = 3
