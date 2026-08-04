impl Solution {
    pub fn find_missing_elements(nums: Vec<i32>) -> Vec<i32> {
        let mut nums = nums;
        nums.sort_unstable();

        (nums[0]..nums[nums.len() - 1])
           .filter(|&n| !nums.binary_search(&n).is_ok())
           .collect()
    }
}
