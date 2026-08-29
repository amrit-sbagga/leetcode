/**
 * @param {number[]} nums
 * @param {number} limit
 * @return {number[]}
 */
var lexicographicallySmallestArray = function (nums, limit) {
  const tuples = nums.map((num, idx) => [num, idx]);
  tuples.sort((a, b) => a[0] - b[0]);

  const groups = [];
  let group = [];
  for (let i = 0; i < tuples.length; i++) {
    if (group.length === 0 || tuples[i][0] - group.at(-1)[0] <= limit) {
      group.push(tuples[i]);
    } else {
      groups.push(group.slice());
      group = [tuples[i]];
    }
  }
  groups.push(group);

  const ans = new Array(nums.length).fill();
  for (const group of groups) {
    const copy = group.slice().sort((a, b) => a[1] - b[1]);

    for (let i = 0; i < copy.length; i++) {
      const [_, idx] = copy[i];
      ans[idx] = group[i][0];
    }
  }

  return ans;
};
