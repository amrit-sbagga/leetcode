class Solution {
    public int maxVowels(String s, int k) {
        Set<Character> vowels = new HashSet<>(Arrays.asList('a', 'e', 'i', 'o', 'u'));

        int currentCount = 0;
        int maxCount = 0;

        for (int i = 0; i < k; i++) {
            if (vowels.contains(s.charAt(i)))
                currentCount++;
        }

        maxCount = currentCount;

        for (int i = k; i < s.length(); i++) {

            if (vowels.contains(s.charAt(i)))
                currentCount++;
            if (vowels.contains(s.charAt(i - k)))
                currentCount--;
            maxCount = Math.max(maxCount, currentCount);

        }

        return maxCount;

    }
}
