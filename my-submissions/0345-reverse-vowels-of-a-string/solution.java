class Solution {
    public String reverseVowels(String s) {
        Set<Character> vowels = new HashSet<>();
        for (char c : "aeiouAEIOU".toCharArray()) {
            vowels.add(c);
        }

        char[] arr = s.toCharArray();
        int left = 0;
        int right = arr.length - 1;

        while (left < right) {
            // Move left pointer until a vowel is found
            while (left < right && !vowels.contains(arr[left])) {
                left++;
            }
            // Move right pointer until a vowel is found
            while (left < right && !vowels.contains(arr[right])) {
                right--;
            }

            // Swap the vowels
            char temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;

            left++;
            right--;
        }

        return new String(arr);
    }
}
