/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */

class MinnHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this._bubbleUp();
  }

  pop() {
    if (this.heap.length === 1) return this.heap.pop();
    const top = this.heap[0];
    this.heap[0] = this.heap.pop();
    this._bubbleDown();
    return top;
  }

  _bubbleUp() {
    let i = this.heap.length - 1;
    while (i > 0) {
      let p = Math.floor((i - 1) / 2);
      if (this.heap[i] >= this.heap[p]) break;
      [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
      i = p;
    }
  }

  _bubbleDown() {
    let i = 0;
    const n = this.heap.length;
    while (true) {
      let left = 2 * i + 1;
      let right = 2 * i + 2;
      let smallest = i;

      if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
      if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;

      if (smallest === i) break;
      [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
      i = smallest;
    }
  }

  size() {
    return this.heap.length;
  }
}


var maxScore = function(nums1, nums2, k) {
  const n = nums1.length;
  const pairs = nums1.map((val, i) => [nums2[i], val]);
  pairs.sort((a, b) => b[0] - a[0]); // sort by nums2 descending

  let max = 0;
  let sum = 0;
  const minHeap = new MinnHeap();

  for (let i = 0; i < n; i++) {
    const [num2, num1] = pairs[i];
    sum += num1;
    minHeap.push(num1);

    if (minHeap.size() === k) {
      max = Math.max(max, sum * num2);
      sum -= minHeap.pop();
    }
  }

  return max;
};


