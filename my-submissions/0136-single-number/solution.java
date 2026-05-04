class Solution {
    public int singleNumber(int[] nums) {
        int res = 0;

        for(int n : nums){
            res ^= n;
        }
        return res;
    }
}

// XOR 
// Same bits 0 ^ 0 = 0, 1 ^ 1 = 0
// Diff bits 0 ^ 1 = 1, 1 ^ 0 = 1
// Same no. XOR to 0
// a ^ a = 0
// XOR with 0 return original number
// a ^ 0 = a
