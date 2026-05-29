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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return [];
    let res = [], q = [root];

    while (q.length > 0) {
        let size = q.length;
        // console.log("size, q => ", size, q);
        for(let i = 0; i < size; i++){
           let node = q.shift();
           // console.log("node => ", node);
           // last node at this level
           if(i === size - 1) res.push(node.val);
           // push children
           if(node.left) q.push(node.left);
           if(node.right) q.push(node.right);
        }
    }
    return res;
};

// input -> [1,2,3,null,5,null,4], output -> [1,3,4]
