class Solution {
    public int longestOnes(int[] nums, int k) {
        int left = 0;
        int maxLength = 0;

        for (int right = 0; right < nums.length; right++) {
             // If we see a 0, consume one allowed flip
            if (nums[right] == 0) {
                k--;
            }

            // out of flips, shift left side in once
            if (k < 0) {
                if (nums[left] == 0) {
                    k++;
                }
                left++;
            }
            maxLength = Math.max(maxLength, right - left + 1);
        }
        return maxLength;
    }
}
