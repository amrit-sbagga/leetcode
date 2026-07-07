class Solution {
    public long sumAndMultiply(int n) {
        if (n == 0) {
            return 0;
        }

        List<Integer> arr = new ArrayList<>();

        while (n > 0) {
            int d = n % 10;
            if (d > 0) {
                arr.add(d);
            }
            n /= 10;
        }

        long sum = 0;
        for (int d : arr) {
            sum += d;
        }

        long value = 0;
        long tens = 1;

        for (int d : arr) {
            value += (long)d * tens;
            tens *= 10;
        }

        return value * sum;
    }
}
