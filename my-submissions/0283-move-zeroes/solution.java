class Solution {
    public void moveZeroes(int[] nums) {
        int low = 0;
        int high = low + 1;

        while (high <= nums.length - 1) {
            if (nums[low] != 0) {
                low++;
                high++;
            } else {
                if (nums[high] != 0) {
                    // swap
                    int temp = nums[low];
                    nums[low] = nums[high];
                    nums[high] = temp;
                    low++;
                }
                high++;
            }
        }
    }
}

