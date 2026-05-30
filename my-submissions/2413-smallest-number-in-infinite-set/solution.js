
var SmallestInfiniteSet = function() {
    this.minHeap = [];
    this.added = new Set();
    // records current pop number
    this.curr = 1;
};

/**
 * @return {number}
 */
SmallestInfiniteSet.prototype.popSmallest = function() {
    if(this.minHeap.length > 0){
        const smallest = this.minHeap.pop();
        this.added.delete(smallest);
        return smallest;
    }
    return this.curr++;
};

/** 
 * @param {number} num
 * @return {void}
 */
SmallestInfiniteSet.prototype.addBack = function(num) {
    // items in the minHeap must be smallest than curr
    if(num < this.curr && !this.added.has(num)){
        this.added.add(num);
        this.minHeap.push(num);
        this.minHeap.sort((a, b) => b - a)
    }
};

/** 
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */

// Input =>  ["SmallestInfiniteSet","addBack","popSmallest","popSmallest","popSmallest","addBack","popSmallest","popSmallest","popSmallest"]
// [[],[2],[],[],[],[1],[],[],[]]
// output => [null,null,1,2,3,null,1,4,5]
