class Solution {
    public int largestAltitude(int[] gain) {
        int previous = 0;
        int biggest = 0;

        for (int i = 0; i < gain.length; i++) {
            previous += gain[i];
            if (previous > biggest)
                biggest = previous;
        }
        return biggest;
    }
}
